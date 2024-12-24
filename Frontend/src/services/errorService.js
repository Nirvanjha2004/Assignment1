export const handleFirebaseError = (error) => {
    switch (error.code) {
        case 'auth/user-not-found':
            return 'No user found with this email address';
        case 'auth/wrong-password':
            return 'Incorrect password';
        case 'auth/email-already-in-use':
            return 'Email already registered';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters';
        case 'auth/invalid-email':
            return 'Invalid email address';
        default:
            return error.message;
    }
}; 