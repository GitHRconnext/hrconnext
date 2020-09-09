import React from "react";
import { useRouter } from "next/router";

const LinkComponent = (props) => {
  // console.log("props in LinkComponent >>>", props);
  const router = useRouter();
  const style = {
    text: {
      color: "blue",
      cursor: "pointer",
    },
  };
  return (
    <div
      className="mx-2"
      style={style.text}
      onClick={() => router.push(props.link)}
    >
      {props.text}
    </div>
  );
};

export default LinkComponent;
