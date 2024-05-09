"use client";

const getTicket = async (id: any) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  return res.json();
};

const page = async ({ params }: any) => {
  const ticket = await getTicket(params.id);
  return (
    <div>
      <div>{ticket.title}</div>
      <div>{ticket.description}</div>
    </div>
  );
};

export default page;
