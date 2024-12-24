import { Navigate } from 'react-router-dom';
import { useFirebase } from '../contexts/FirebaseContext';

export function ProtectedRoute({ children }) {
    const { user, loading } = useFirebase();
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (!user) {
        return <Navigate to="/signin" />;
    }
    
    return children;
} 