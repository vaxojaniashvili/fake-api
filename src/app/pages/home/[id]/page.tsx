"use client";
import Link from "next/link";
import React from "react";

const getTicket = async (id: number) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};

const page = async ({ params }: any) => {
  const ticket = await getTicket(params.id);
  return (
    <div>
      <Link href="/">
        <h1 className="fixed bg-white border-black border-2 shadow-2xl hover:bg-black hover:text-white text-black rounded px-5 w-fit">
          Return to home
        </h1>
      </Link>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 py-5 shadow-2xl transition w-[250px] items-center justify-center gap-5">
        <div className="w-[200px]">{ticket.description}</div>
        <img className="w-[200px] h-[200px]" src={ticket.image} />
        <h1 className="flex justify-center font-bold">{ticket.price}</h1>
      </div>
    </div>
  );
};

export default page;
