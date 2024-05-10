"use client";
import { Fetch } from "@/app/types/common";
import Link from "next/link";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const HomePage = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://fakestoreapi.com/products");
//         const result = await res.json();
//         setData(result);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h1>products</h1>
//       <div>
//         {data.map((item: any) => {
//           return (
//             <div>
//               <Link href={`/pages/home/${item.id}`}>
//                 <div className="flex font-serif py-2">{item.title}</div>
//               </Link>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        setData(await res.json());
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {data.map((item: Fetch) => {
        return (
          <div key={item.id}>
            <Link href={`/pages/home/${item.id}`}>
              <h1>{item.title}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default page;
