"use client";
import Link from "next/link";
// import { useEffect, useState } from "react";

// const HomePage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map((product: any) => (
//           <div>
//             <li key={product.id}>
//               <h2>{product.title}</h2>
//             </li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HomePage;
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>products</h1>
      <div>
        {data.map((item: any) => {
          return (
            <div>
              <Link href={`/pages/home/${item.id}`}>
                <div className="flex font-serif py-2">{item.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
