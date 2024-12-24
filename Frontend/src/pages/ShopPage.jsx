import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import HeroSection from "../components/HeroSection";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import BrandCard from "../components/BrandCard";
import FeedBack from "../components/Feedback";
import Footer from "../components/Footer";
import ShopNowCard from "../components/ShopNowCard";
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore/lite';
import Card11 from "../components/Card11";
import { addProductsToFirestore } from '../utils/addProducts';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [isAdmin] = useState(sessionStorage.getItem('isAdmin') === 'true');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleSeedData = async () => {
    try {
      await addProductsToFirestore();
      alert('Products added successfully!');
      window.location.reload(); // Refresh to see new products
    } catch (error) {
      console.error('Error seeding data:', error);
      alert('Failed to seed data. Check console for details.');
    }
  };

  return (
    <div>
      { (
        <button
          onClick={handleSeedData}
          className="bg-black "
        >
          Seed Products Data
        </button>
      )}
      <Navbar />
      <HeroSection />
      <Card11 products={products} />
      <Card1 products={products} />
      <Card2 products={products} />
      <ShopNowCard/>
      <Card4 products={products} />
      <Card5 products={products} />
      <BrandCard />
      <FeedBack />
      <Footer />
    </div>
  );
}

export default ShopPage;
