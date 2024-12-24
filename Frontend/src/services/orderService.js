import { db } from '../firebase/config';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const orderService = {
    createOrder: async (userId, cartItems, shippingDetails) => {
        try {
            const orderData = {
                userId,
                items: cartItems,
                shipping: shippingDetails,
                status: 'pending',
                createdAt: new Date().toISOString(),
                total: cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
            };
            
            const docRef = await addDoc(collection(db, 'orders'), orderData);
            return docRef.id;
        } catch (error) {
            throw error;
        }
    },

    getOrders: async (userId) => {
        try {
            const q = query(collection(db, 'orders'), where('userId', '==', userId));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (error) {
            throw error;
        }
    }
}; 