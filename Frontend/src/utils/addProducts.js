import { db } from '../firebase/config';
import { collection, writeBatch, doc } from '@firebase/firestore';

const products = [
    {
        name: "Classic White Shirt",
        price: 200,
        image: "/products/product8.png",
        description: "Premium cotton formal shirt",
        category: "shirts",
        colors: ["White", "Light Blue", "Pink"],
        sizes: ["S", "M", "L", "XL"],
        gender: "men"
    },
    {
        name: "Graphic Print T-Shirt",
        price: 180,
        image: "/products/product9.png",
        description: "Trendy graphic printed t-shirt",
        category: "t-shirts",
        colors: ["White", "Black", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        gender: "men"
    },
    {
        name: "Essential Plain T-Shirt",
        price: 150,
        image: "/products/product10.png",
        description: "Comfortable plain t-shirt",
        category: "t-shirts",
        colors: ["White", "Black", "Gray", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        gender: "men"
    },
    {
        name: "Classic Polo T-Shirt",
        price: 220,
        image: "/products/product11.png",
        description: "Premium cotton polo t-shirt",
        category: "t-shirts",
        colors: ["Navy", "White", "Black"],
        sizes: ["S", "M", "L", "XL"],
        gender: "men"
    },
    {
        name: "Cozy Hoodie",
        price: 350,
        image: "/products/product12.png",
        description: "Warm and stylish hoodie",
        category: "hoodies",
        colors: ["Gray", "Black", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        gender: "men"
    },
    {
        name: "Slim Fit Jeans",
        price: 400,
        image: "/products/product13.png",
        description: "Classic slim fit denim jeans",
        category: "jeans",
        colors: ["Blue", "Black", "Gray"],
        sizes: ["28", "30", "32", "34", "36"],
        gender: "men"
    },
    {
        name: "Performance Activewear",
        price: 280,
        image: "/products/product14.png",
        description: "High-performance workout wear",
        category: "activewear",
        colors: ["Black", "Gray", "Blue"],
        sizes: ["S", "M", "L", "XL"],
        gender: "men"
    },
    {
        name: "Comfort Boxers",
        price: 120,
        image: "/products/product15.png",
        description: "Soft and comfortable boxers",
        category: "underwear",
        colors: ["Black", "Gray", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        gender: "men"
    },
    {
        name: "Denim Jacket",
        price: 450,
        image: "/products/product16.png",
        description: "Classic denim jacket",
        category: "jackets",
        colors: ["Blue", "Black"],
        sizes: ["S", "M", "L", "XL"],
        gender: "men"
    },
    {
        name: "Summer Shorts",
        price: 180,
        image: "/products/product17.png",
        description: "Casual summer shorts",
        category: "shorts",
        colors: ["Khaki", "Navy", "Black"],
        sizes: ["28", "30", "32", "34"],
        gender: "men"
    },
    {
        name: "Casual Blazer",
        price: 550,
        image: "/products/product18.png",
        description: "Smart casual blazer",
        category: "blazers",
        colors: ["Navy", "Gray", "Black"],
        sizes: ["S", "M", "L", "XL"],
        gender: "men"
    },
    {
        name: "Printed Dress",
        price: 380,
        image: "/products/product19.png",
        description: "Floral printed summer dress",
        category: "dresses",
        colors: ["Blue", "Pink", "Yellow"],
        sizes: ["XS", "S", "M", "L"],
        gender: "women"
    },
    {
        name: "Leather Jacket",
        price: 650,
        image: "/products/product12.png",
        description: "Classic leather jacket",
        category: "jackets",
        colors: ["Black", "Brown"],
        sizes: ["S", "M", "L", "XL"],
        gender: "men"
    },
    {
        name: "Formal Trousers",
        price: 320,
        image: "/products/product14.png",
        description: "Professional formal trousers",
        category: "trousers",
        colors: ["Black", "Gray", "Navy"],
        sizes: ["28", "30", "32", "34", "36"],
        gender: "men"
    },
    {
        name: "Winter Sweater",
        price: 290,
        image: "/products/product5.png",
        description: "Warm knitted sweater",
        category: "sweaters",
        colors: ["Gray", "Navy", "Burgundy"],
        sizes: ["S", "M", "L", "XL"],
        gender: "men"
    },
    {
        name: "Knitted Joggers",
        price: 250,
        image: "/products/product4.png",
        description: "Comfortable knitted joggers for casual wear",
        category: "joggers",
        colors: ["Gray", "Black", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        ratings: {
            average: 4.5,
            count: 12
        },
        gender: "men"
    },
    {
        name: "Denim Jacket",
        price: 350,
        image: "/products/product5.png",
        description: "Classic denim jacket with modern fit",
        category: "jackets",
        colors: ["Blue", "Black", "Light Blue"],
        sizes: ["S", "M", "L", "XL"],
        ratings: {
            average: 4.7,
            count: 18
        },
        gender: "men"
    },
    {
        name: "Casual Sneakers",
        price: 180,
        image: "/products/product6.png",
        description: "Versatile casual sneakers for everyday wear",
        category: "shoes",
        colors: ["White", "Black", "Gray"],
        sizes: ["7", "8", "9", "10", "11"],
        ratings: {
            average: 4.6,
            count: 15
        },
        gender: "men"
    },
    {
        name: "Graphic T-Shirt",
        price: 120,
        image: "/products/product7.png",
        description: "Trendy graphic t-shirt with unique design",
        category: "t-shirts",
        colors: ["White", "Black", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        ratings: {
            average: 4.4,
            count: 20
        },
        gender: "men"
    },
    {
        name: "Women's Summer Dress",
        price: 380,
        image: "/products/product19.png",
        description: "Floral printed summer dress",
        category: "dresses",
        colors: ["Blue", "Pink", "Yellow"],
        sizes: ["XS", "S", "M", "L"],
        gender: "women"
    }
];

export const addProductsToFirestore = async () => {
    try {
        const batch = writeBatch(db);
        
        products.forEach((product) => {
            const docRef = doc(collection(db, 'products'));
            batch.set(docRef, {
                ...product,
                createdAt: new Date().toISOString(),
                inStock: true,
                ratings: {
                    average: 4.5,
                    count: 0
                }
            });
        });

        await batch.commit();
        console.log('Products added successfully!');
    } catch (error) {
        console.error('Error adding products:', error);
    }
}; 