import React from "react";
import axios from "axios";
import Time from "@/components/products/time";
import Head from "next/head";
import Link from "next/link";

const Products = ({ data }) => {
  console.log("data", data);
  return (
    <>
      <Head>
        <title>List Blog</title>
        <meta
          name="list blog"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta name="description" content="about page" />
      </Head>
      <div>
        {data?.todos?.map((item, index) => (
          <Link href={`/todos/${item.id}`}>
            <Time data={item} key={index} />
          </Link>
        ))}
      </div>
    </>
  );
};
export const getServerSideProps = async () => {
  const res = await axios.get("https://dummyjson.com/todos");
  const data = await res.data;
  return { props: { data } };
};

export default Products;
