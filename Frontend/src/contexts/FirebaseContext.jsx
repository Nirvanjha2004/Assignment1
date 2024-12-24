import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const FirebaseContext = createContext();

export function FirebaseProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return (
        <FirebaseContext.Provider value={{ user, loading }}>
            {!loading && children}
        </FirebaseContext.Provider>
    );
}

export const useFirebase = () => useContext(FirebaseContext); 