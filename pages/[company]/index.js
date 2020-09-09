import React from "react";

function Home(props) {
  return (
    <div>
      <h1>this is company Home page</h1>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://localhost/backend/public/api/stattistic/search"
  );
  const posts = await res.json();
//   console.log("posts >>>", posts);
  return {
    props: {
      posts,
    },
  };
}

export default Home;
