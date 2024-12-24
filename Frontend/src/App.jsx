import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import CartPage from './pages/CartPage'
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from './pages/ProductPage';
import ErrorPage from "./pages/ErrorPage";
import IndProdPage from "./pages/IndProdPage";
import ComplaintPage from "./pages/ComplaintPage";
import { FirebaseProvider } from './contexts/FirebaseContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';
import ProductDetails from './pages/ProductDetails';

function App() {
  return <FirebaseProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/Signup" element={<SignupPage/>} />
      <Route 
        path="/cart" 
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        } 
      />
      <Route path="/orders" element={<IndProdPage />} />
      <Route path="/:productId" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/complaint" element={<ComplaintPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
</FirebaseProvider>
}

export default App;
