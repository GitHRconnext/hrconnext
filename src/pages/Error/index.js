import React from "react";

const NotFoundPage = (props) => {
  // console.log("props >>>", props);
  return (
    <div>
      <h1>Not Found Page</h1>
      <h2>there is no "{props.location.pathname}" path in this web page</h2>
    </div>
  );
};

export default NotFoundPage;
