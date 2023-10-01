import React from "react";
import axios from "axios";

const BlogDetails = ({ user }) => {
  console.log(user);
  return (
    <div>
      <p>{user.todo}</p>
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const res = await axios.get("https://dummyjson.com/todos");
//   const data = await res.data;
//   return { props: { data } };
// };

export async function getStaticProps({ params }) {
  const res = await axios.get(`https://dummyjson.com/todos/${params.id}`);
  const data = await res.data;

  return {
    props: { data : user },
  };
}

export async function getStaticPaths() {
  const res = await axios.get("https://dummyjson.com/todos");
  const data = await res.data;

  const paths = data.map((item) => {
    return {
      params: { id: `${item.id}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export default BlogDetails;
