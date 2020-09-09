import React, { useState } from "react";
import axios from "axios";
import LoadingLayout from "../conponents/layoutLoad/LoadingLayout";

function Test({ getApiData }) {
  const [creating, setCreating] = useState(false);
  const [created, setCreated] = useState(false);
  console.log("<<< render >>>");
  //   console.log("getApiData >>>", getApiData);

  const handleClickData = async (event) => {
    event.preventDefault();
    console.log("test handle Click >>>");
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    console.log("responst after click >>>", res);
  };

  const setCreateShow = (e) => {
    e.preventDefault();
    setCreating(true);
    const timer = setTimeout(() => {
      setCreated(!created);
    }, 3000);
    return () => clearTimeout(timer);
  };
  return (
    <>
      {creating ? (
        <LoadingLayout created={created} />
      ) : (
        <div className="form-group row" style={{ justifyContent: "center" }}>
          <div className="col-4 col-sm-4">
            <button
              className="btn btn-purple btn-sm"
              type="submit"
              style={{ width: "100%" }}
              onClick={setCreateShow}
            >
              show
            </button>
          </div>
          {/* {getApiData.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.completed ? "red" : "green" }}
              onClick={handleClickData}
            >
              {item.id + ".) " + item.title}
            </div>
          ))} */}
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  //---------- example use fetch case
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  // const getApiData = await res.json();

  //---------- ตัวอย่างหากต้องการเรียกหลาย api ก่อนการ render
  //   let [req1, req2] = await Promise.all([fetch(url_1), fetch(url_2)]);

  //---------- example use axios case
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/");
  const getApiStatus = (res.status) + " " + res.statusText;
  const getApiData = await res.data;

  console.log(`getStaticProps data fetched STATUS >>> ${getApiStatus}`);

  return {
    props: {
      getApiData,
    },
  };
}

export default Test;
