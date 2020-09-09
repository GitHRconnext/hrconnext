import React from "react";
import { useRouter } from "next/router";

const LoadingPage = (props) => {
  const router = useRouter();

  const handleLoginEmail = (e) => {
    e.preventDefault();
    alert("การเข้าระบบด้วย Email ยังไม่สามารถใช้งานได้");
  };
  return (
    <div className="w-100 h-100">
      <div className="row h-100 align-items-center">
        {/* รูปภาพ */}
        <div className="col-sm-12 col-md-12 col-lg-6">
          <img
            src="/images/8.png"
            className="img-fluid mt-5"
            alt="Responsive"
          />
        </div>
        {/* ข้อความ */}
        <div className="col-sm-12 col-md-12 col-lg-6 px-5">
          <div className="row">
            {props.created ? (
              <div className="col-12 text-right mt-5">
                <div style={{ fontSize: "xx-large" }}>
                  <p>ยินดีด้วย .. บัญชีการใช้งานของบริษัท </p>
                  <p>ได้ถูกสร้างเรียบร้อยแล้ว</p>
                  <div className="row">
                    <div className="col-5 "></div>
                    <div className="col-6 my-4">
                      <button
                        className="btn btn-lg btn-primary "
                        style={{ width: "150px" }}
                        onClick={() => router.push("/login")}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="col-12 text-right mt-5"
                style={{ fontSize: "xx-large" }}
              >
                <p>กำลังติดตั้ง HRconnext </p>
                <p>ให้บริษัทท่านอยู่ กรุณารอสักครู่</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
