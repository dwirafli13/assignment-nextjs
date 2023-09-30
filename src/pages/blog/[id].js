import React from 'react'

const BlogDetails = ({user}) => {
    console.log(user);
    return (
        <div>
            <p>{user?.todos?.todo}</p>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const res = await axios.get(
      `https://dummyjson.com/todos/${params.id}`
    );
    const data = await res.data;
  
    return {
      props: { user: data },
    };
  }
  
  export async function getStaticPaths() {
    const res = await axios.get("https://dummyjson.com/todos");
    const data = await res.data;
  
    const paths = data?.todos?.map((item) => {
      return {
        params: { id: `${item.id}` },
      };
    });
  
    return {
      paths,
      fallback: true,
    };
  }

export default BlogDetails