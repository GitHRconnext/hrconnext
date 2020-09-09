import React from "react";
import { useRouter } from "next/router";

const ButtonComponent = (props) => {
  // console.log("props in ButtonComponent >>>", props);
  const router = useRouter();
  const style = {
    text: {},
  };
  return (
    <div
      className={`btn mx-2 ${props.addClassName}`}
      style={style.text}
      onClick={() => router.push(props.link)}
    >
      {props.text}
    </div>
  );
};

export default ButtonComponent;
