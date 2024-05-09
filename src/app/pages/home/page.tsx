"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
