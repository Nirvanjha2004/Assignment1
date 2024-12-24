import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const navigate = useNavigate();
    const userId = sessionStorage.getItem('userId');
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        const fetchProfile = async () => {
            if (!userId) {
                navigate('/signin');
                return;
            }

            try {
                const docRef = doc(db, 'users', userId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setProfile(data);
                    setFormData(data);
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };
        
        fetchProfile();
    }, [userId, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateDoc(doc(db, 'users', userId), formData);
            setProfile(formData);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    if (!profile) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className="text-purple-600 hover:text-purple-700"
                    >
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                    </button>
                </div>

                {isEditing ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone || ''}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <textarea
                                name="address"
                                value={formData.address || ''}
                                onChange={handleChange}
                                rows="3"
                                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-purple-500 focus:outline-none focus:ring-purple-500"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Name</h3>
                            <p className="mt-1 text-sm text-gray-900">{profile.name}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Email</h3>
                            <p className="mt-1 text-sm text-gray-900">{profile.email}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                            <p className="mt-1 text-sm text-gray-900">{profile.phone || 'Not provided'}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Address</h3>
                            <p className="mt-1 text-sm text-gray-900">{profile.address || 'Not provided'}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserProfile; 