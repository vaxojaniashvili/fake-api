"use client";
import Image from "next/image";
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
      <div className="flex justify-center">
        <Link href="/pages/Basket">
          <p className="w-fit px-5 text-white bg-black rounded">Basket</p>
        </Link>
      </div>
      <h1 className="px-5">products</h1>
      <div>
        {data.map((item: any) => {
          return (
            <div className="px-5">
              <Link href={`/pages/home/${item.id}`}>
                <div className="flex font-serif py-2">{item.title}</div>
                <Image width={150} height={150} src={item.image} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
