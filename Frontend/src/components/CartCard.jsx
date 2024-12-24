import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, query, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function CartCard() {
    const userId = sessionStorage.getItem('userId');
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartItems = async () => {
            if (!userId) return;

            try {
                const q = query(
                    collection(db, 'carts'),
                    where('userId', '==', userId)
                );

                const querySnapshot = await getDocs(q);
                const items = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setCartItems(items);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cart:', error);
                setLoading(false);
            }
        };

        fetchCartItems();
    }, [userId]);

    const handleUpdateQuantity = async (cartItemId, newQuantity) => {
        if (newQuantity < 1) return;

        try {
            await updateDoc(doc(db, 'carts', cartItemId), {
                quantity: newQuantity
            });

            setCartItems(prev => prev.map(item => 
                item.id === cartItemId 
                    ? {...item, quantity: newQuantity}
                    : item
            ));
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handleDeleteItem = async (cartItemId) => {
        try {
            await deleteDoc(doc(db, 'carts', cartItemId));
            setCartItems(prev => prev.filter(item => item.id !== cartItemId));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    if (loading) {
        return <div>Loading cart...</div>;
    }

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Product</th>
                        <th scope="col" className="px-6 py-3">Price</th>
                        <th scope="col" className="px-6 py-3">Quantity</th>
                        <th scope="col" className="px-6 py-3">Shipping</th>
                        <th scope="col" className="px-6 py-3">Subtotal</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="p-4">
                                <div className="flex ml-10">
                                    <img
                                        src={item.productImage}
                                        className="w-20 h-20 object-cover"
                                        alt={item.productName}
                                    />
                                    <div className="flex flex-col ml-4 justify-center">
                                        <h1 className="font-semibold">{item.productName}</h1>
                                        <h1 className="text-[13px]">Color: {item.color}</h1>
                                        <h1 className="text-[13px]">Size: {item.size}</h1>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-semibold">${item.price.toFixed(2)}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-purple-600"
                                    >
                                        -
                                    </button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-purple-600"
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-semibold">FREE</td>
                            <td className="px-6 py-4 font-semibold">
                                ${(item.price * item.quantity).toFixed(2)}
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => handleDeleteItem(item.id)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Cart Summary */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold">Cart Total</h3>
                        <div className="mt-2 text-gray-600">
                            <div>Subtotal: ${calculateSubtotal().toFixed(2)}</div>
                            <div>Shipping: FREE</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">
                            ${calculateSubtotal().toFixed(2)}
                        </div>
                        <button 
                            onClick={() => navigate('/checkout')}
                            className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCard;
