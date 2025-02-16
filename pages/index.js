import React, { useState } from "react";
import { useRouter } from "next/router";
import "../styles/style.module.css";
import NavLayout from "../conponents/layoutHome/NavLayout";
import FooterLayout from "../conponents/layoutHome/FooterLayout";

export default function Home() {
  const router = useRouter();
  const [functionCarousel, setFunctionCarousel] = useState(0);
  const funtionsList = [
    { iconSource: "/icons/1.png", name: "ประวัติบุคคล การศึกษา งาน" },
    { iconSource: "/icons/2.png", name: "การลากิจ ป่วย พักร้อน" },
    { iconSource: "/icons/3.png", name: "เงินเดือน และค่าตอบแทนอื่น" },
    { iconSource: "/icons/4.png", name: "การตอกบัตรเวลาทำงานด้วย GPS" },
    { iconSource: "/icons/5.png", name: "ปฎิทินงานของบริษัท" },
    { iconSource: "/icons/6.png", name: "Mobile App สำหรับพนักงาน" },
    { iconSource: "/icons/7.png", name: "Dashboard สำหรับผู้บริหาร" },
  ];
  const informationsList = [
    {
      header: "ประวัติบุคคล การศึกษา งาน",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: "/images/13.png",
      iconSource: "/icons/user_blue.png",
    },
    {
      header: "การลากิจ ป่วย พักร้อน",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: "/images/15.png",
      iconSource: "/icons/sick_blue.png",
    },
    {
      header: "เงินเดือน และค่าตอบแทนอื่น",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: "/images/18.png",
      iconSource: "/icons/receive_cash_blue.png",
    },
    {
      header: "การตอกบัตรเวลาทำงานด้วย GPS",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: "/images/26.png",
      iconSource: "/icons/identification_blue.png",
    },
    {
      header: "ปฎิทินงานของบริษัท",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: "/images/17.png",
      iconSource: "/icons/calendar_blue.png",
    },
    {
      header: "Mobile App สำหรับพนักงาน",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: "/images/16.png",
      iconSource: "/icons/mobile_blue.png",
    },
    {
      header: "Dashboard สำหรับผู้บริหาร",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: "/images/14.png",
      iconSource: "/icons/dashboard_blue.png",
    },
  ];

  const handleCarousel = (action) => {
    if (action === "next") {
      setFunctionCarousel((functionCarousel + 1) % 3);
    } else {
      setFunctionCarousel((functionCarousel + 2) % 3);
    }
  };
  return (
    <div>
      {/* แถบเมนูด้านบน */}
      <NavLayout />

      {/* เนื้อหา */}
      <div
        style={{
          background: `top center url(/images/home-bg-hr.png) no-repeat`,
          fontFamily: "'Taviraj', serif !important",
        }}
      >
        {/* <!-- HRConnext  โปรแกรมบริหารงานบุคคล แบบออนไลน์ ฟรี 100% ที่ใช้ --> */}
        <section id="main">
          <div className="r" style={{ paddingTop: "120px" }}>
            <div className="row">
              {/* <!--HRConnext text--> */}
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 pl-5">
                <div style={{ paddingTop: "50px", fontSize: "x-large" }}>
                  <b>
                    <p>HRConnext</p>
                  </b>
                </div>

                {/* <!--โปรแกรมบริหารงานบุคคล แบบออนไลน์ ฟรี 100% ที่ใช้--> */}
                <div style={{ color: "#6467E6", fontSize: "xx-large" }}>
                  <b>
                    <p>โปรแกรมบริหารงานบุคคล</p>
                  </b>
                  <b>
                    <p>แบบออนไลน์ ฟรี 100% ที่ใช้</p>
                  </b>
                </div>

                {/* <!-- สำหรับธุรกิจขนาดกลางและขนาดเล็ก (SME) บริษัท Start up ครอบคลุมการใช้งานฟังก์ชันหลักๆ ที่จำเป็น ทั้งข้อมูลพนักงาน เงินเดือน การลา --> */}
                <div>
                  <p style={{ fontFamily: "'Taviraj', serif" }}>
                    สำหรับธุรกิจขนาดกลางและขนาดเล็ก (SME)
                  </p>
                  <p style={{ fontFamily: "'Taviraj', serif" }}>
                    บริษัท Start up ครอบคลุมการใช้งานฟังก์ชันหลักๆ
                  </p>
                  <p style={{ fontFamily: "'Taviraj', serif" }}>
                    ที่จำเป็น ทั้งข้อมูลพนักงาน เงินเดือน การลา
                  </p>
                </div>

                {/* <!-- ปุ่มสมัครใช้งานฟรี --> */}
                <div className="pr-7 pl-7">
                  <button
                    className="btn btn-sm btcl"
                    type="submit "
                    style={{ width: "50%", fontFamily: "'Taviraj', serif" }}
                    onClick={() => {
                      router.push("/register");
                    }}
                  >
                    สมัครใช้งานฟรี
                  </button>
                </div>
              </div>
              {/* <!--HRConnext picture--> */}
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <img
                  src="/images/p1.png"
                  alt=""
                  width="100%"
                  height="inherit"
                />
              </div>
            </div>
          </div>
          <br />
        </section>

        {/* <!-- คุณสมบัติโดดเด่นของHRConnext --> */}
        <section id="features">
          <header className="text-center" style={{ fontSize: "xx-large" }}>
            <b>
              <p>คุณสมบัติโดดเด่นของ </p>
            </b>
            <b>
              <p>HRConnext</p>
            </b>
          </header>

          <section>
            <div>
              <div
                className="row text-center"
                style={{
                  margin: "50px",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <div className="col-sm-8 col-md-4 ">
                  <img
                    src="/images/21.png"
                    alt=""
                    width="100%"
                    height="inherit"
                  />
                  <b>
                    <p>สามารถใช้งานฟังก์ชันหลัก ฟรี 100%</p>
                  </b>
                  <p style={{ fontFamily: "'Taviraj', serif" }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore.
                  </p>
                </div>
                <div className="col-sm-8 col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
                  <img
                    src="/images/19.png"
                    alt=""
                    width="100%"
                    height="inherit"
                  />
                  <b>
                    <p>การใช้งานง่าย รูปแบบสวยงาม</p>
                  </b>
                  <p style={{ fontFamily: "'Taviraj', serif" }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore.
                  </p>
                </div>
                <div className="col-sm-8 col-md-4 ">
                  <img
                    src="/images/20.png"
                    alt=""
                    width="100%"
                    height="inherit"
                  />
                  <b>
                    <p>อยู่บน Cloud Server ที่มีประสิทธิภาพและปลอดภัย</p>
                  </b>
                  <p style={{ fontFamily: "'Taviraj', serif" }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* <!-- 7 ความสามารถหลักของโปรแกรม HRconnext --> */}
        <section id="functions">
          <div style={{ backgroundColor: "#E9F1FB" }}>
            {/* <!-- 7 ความสามารถหลักของโปรแกรม HRconnext desktop--> */}
            <div
              className="film"
              style={{ paddingTop: "40px", paddingBottom: "100px" }}
            >
              <header className="text-center">
                <b style={{ fontSize: "xx-large" }}>
                  <p>7 ความสามารถหลักของโปรแกรม HRconnext</p>
                </b>
              </header>
              <div
                className="row text-center"
                style={{
                  margin: "30px",
                  fontSize: "16px",
                  fontFamily: "'Taviraj', serif",
                }}
              >
                {funtionsList.map((item, index) => (
                  <FunctionCard
                    key={index}
                    icon={item.iconSource}
                    name={item.name}
                  />
                ))}
              </div>
            </div>

            {/* <!-- 7 ความสามารถหลักของโปรแกรม HRconnext mobile --> */}
            <div
              id="carouselExampleIndicators"
              className="carousel eslid slide"
              data-ride="carousel"
            >
              <ol
                className="carousel-indicators"
                style={{ marginBottom: "5rem" }}
              >
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className={`${functionCarousel === 0 ? "active" : ""}`}
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                  className={`${functionCarousel === 1 ? "active" : ""}`}
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                  className={`${functionCarousel === 2 ? "active" : ""}`}
                ></li>
              </ol>
              <div
                className="carousel-inner text-center"
                style={{ paddingTop: "40px", paddingBottom: "100px" }}
              >
                <b>
                  <div
                    style={{
                      zIndex: "2",
                      fontSize: "xx-large",
                    }}
                  >
                    7ความสามารถหลักของโปรแกรม HRconnext
                  </div>
                </b>
                <div
                  className={`carousel-item ${
                    functionCarousel === 0 ? "active" : ""
                  }`}
                >
                  <div
                    className="column"
                    style={{
                      marginTop: "20px",
                      zIndex: "2",
                      fontFamily: "'Taviraj', serif",
                    }}
                  >
                    <div className="col">
                      <img
                        src={"/icons/1.png"}
                        alt=""
                        width="50px"
                        height="50px"
                      />
                      <p>ประวัติบุคคล การศึกษา งาน</p>
                    </div>
                    <div className="col">
                      <img
                        src={"/icons/2.png"}
                        alt=""
                        width="50px"
                        height="50px"
                      />
                      <p>การลากิจ ป่วย พักร้อน</p>
                    </div>
                    <div className="col">
                      <img
                        src={"/icons/3.png"}
                        alt=""
                        width="50px"
                        height="50px"
                      />
                      <p>เงินเดือน และค่าตอบแทนอื่น</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`carousel-item ${
                    functionCarousel === 1 ? "active" : ""
                  }`}
                >
                  <div
                    className="column"
                    style={{
                      marginTop: "20px",
                      zIndex: "2",
                      fontFamily: "'Taviraj', serif",
                    }}
                  >
                    <div className="col">
                      <img
                        src={"/icons/4.png"}
                        alt=""
                        width="50px"
                        height="50px"
                      />
                      <p>การตอกบัตรเวลาทำงานด้วย GPS</p>
                    </div>
                    <div className="col">
                      <img
                        src={"/icons/5.png"}
                        alt=""
                        width="50px"
                        height="50px"
                      />
                      <p>ปฎิทินงานของบริษัท</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`carousel-item ${
                    functionCarousel === 2 ? "active" : ""
                  }`}
                >
                  <div
                    className="column"
                    style={{
                      marginTop: "20px",
                      zIndex: "2",
                      fontFamily: "'Taviraj', serif",
                    }}
                  >
                    <div className="col">
                      <img
                        src={"/icons/6.png"}
                        alt=""
                        width="50px"
                        height="50px"
                      />
                      <p>Mobile App สำหรับพนักงาน</p>
                    </div>
                    <div className="col">
                      <img
                        src={"/icons/7.png"}
                        alt=""
                        width="50px"
                        height="50px"
                      />
                      <p>Dashboard สำหรับผู้บริหาร</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
                onClick={() => handleCarousel("prev")}
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
                onClick={() => handleCarousel("next")}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          {/* <!-- HRConnext Connect คน | Connect องค์กร | Connect สังคม--> */}
          <div
            style={{
              position: "relative",
              width: "100%",
              top: "-80px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              // className="card w-50 c-register"
              className="card c-register col-10 col-sm-10 col-md-8 col-lg-6"
            >
              <div className="row">
                <div className="col-sm-8">
                  <b>
                    <p style={{ fontSize: "xx-large", color: "#556DE5" }}>
                      HRConnext{" "}
                    </p>
                  </b>
                  <div>
                    <b>
                      <p>Connect คน | Connect องค์กร | Connect สังคม</p>
                    </b>
                  </div>
                </div>

                <div className="col-sm-3 " style={{ margin: "9% 0% 2% 2%" }}>
                  <button
                    className="btn btn-sm btcl "
                    type="submit"
                    onClick={() => {
                      router.push("/register");
                    }}
                  >
                    สมัครใช้งานฟรี
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- 7 ความสามารถหลักของโปรแกรม HRconnext อธิบาย --> */}
        <section id="informations">
          {/* <!-- รูปและคำอธิบาย --> */}
          <div className="">
            {informationsList.map((item, index) => (
              <InformationCard
                key={index}
                header={item.header}
                content={item.content}
                imageSource={item.imageSource}
                iconSource={item.iconSource}
                cardIndex={index}
              />
            ))}
          </div>
        </section>

        {/* <!-- ราคา --> */}
        <section id="prices">
          <header className="text-center">
            <b style={{ fontSize: "xx-large" }}>
              <p>ราคา</p>
            </b>
          </header>
          <div
            className="row text-center"
            style={{ margin: "0px", display: "flex", justifyContent: "center" }}
          >
            {/* <div className="col-2"></div> */}

            <div className="col-md-10 col-xl-4">
              <div className="card">
                <div
                  className="card-header"
                  style={{ color: "#fff", fontSize: "xx-large" }}
                >
                  FREE
                </div>
                <img
                  src="/images/23.png"
                  width="50%"
                  height="30%"
                  style={{ margin: "auto" }}
                  alt="Light bulb idea"
                />
                <p style={{ fontFamily: "'Taviraj', serif" }}>ข้อมูลบุคคล</p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  ประวิติการศึกษา อบรม
                </p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  ประวัติการทำงาน ตำแหน่งงาน
                </p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  การลา และการอนุมัติการลา
                </p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  เงินเดือนและค่าตอบแทนอื่นๆ
                </p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  ประวัติการเลื่อนชั้นเงินเดือน
                </p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  ปฎิทินงานของบริษัท
                </p>

                <button
                  className="btn btn-sm btcl mx-auto"
                  type="submit"
                  style={{
                    width: "40%",
                    marginBottom: "10px",
                    fontFamily: "'Taviraj', serif",
                  }}
                  onClick={() => {
                    router.push("/register");
                  }}
                >
                  เลือก
                </button>
              </div>
            </div>

            <div className="col-md-10 col-xl-4">
              <div className="card">
                <div className="card-header" style={{ color: "#fff" }}>
                  เพิ่มเติมฟังก์ชันเอง
                </div>
                <img
                  src="/images/24.png"
                  width="50%"
                  height="30%"
                  style={{ margin: "auto" }}
                  alt="Rocket"
                />
                <p style={{ fontFamily: "'Taviraj', serif" }}>ข้อมูลบุคคล</p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  ประวิติการศึกษา อบรม
                </p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  ประวัติการทำงาน ตำแหน่งงาน
                </p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  การลา และการอนุมัติการลา
                </p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  เงินเดือนและค่าตอบแทนอื่นๆ
                </p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  ประวัติการเลื่อนชั้นเงินเดือน
                </p>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  ปฎิทินงานของบริษัท
                </p>
                <button
                  className="btn btn-outline-primary btn-sm mx-auto"
                  type="submit"
                  style={{
                    width: "40%",
                    marginBottom: "10px",
                    fontFamily: "'Taviraj', serif",
                  }}
                >
                  เลือก
                </button>
              </div>
            </div>
            {/* <div className="col-2"></div> */}
          </div>
        </section>
      </div>

      {/* ฟุตเตอร์ */}
      <FooterLayout />
    </div>
  );
}

const FunctionCard = ({ icon, name }) => {
  return (
    <div className="col">
      <img src={icon} alt="" width="95px" height="95px" />
      <p>{name}</p>
    </div>
  );
};

const InformationCard = ({
  header,
  content,
  iconSource,
  imageSource,
  cardIndex,
}) => {
  function isOdd(number) {
    return number % 2;
  }
  if (isOdd(cardIndex)) {
    return (
      <div className="row">
        <div
          className="col-md-12 col-xl-6"
          style={{
            padding: "30px 60px 0px 60px",
            alignSelf: "center",
          }}
        >
          <img src={iconSource} alt="" width="50px" height="50px" />
          <p style={{ fontSize: "x-large", color: "#556DE5" }}>{header}</p>
          <p style={{ fontFamily: "'Taviraj', serif" }}>{content}</p>
        </div>
        <div className="col">
          <img src={imageSource} alt="" width="100%" height="100%" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div className="col">
          <img src={imageSource} alt="" width="100%" height="100%" />
        </div>
        <div
          className="col-md-12 col-xl-6"
          style={{
            padding: "30px 60px 0px 60px",
            alignSelf: "center",
          }}
        >
          <img src={iconSource} alt="" width="50px" height="50px" />
          <p style={{ fontSize: "x-large", color: "#556DE5" }}>{header}</p>
          <p style={{ fontFamily: "'Taviraj', serif" }}>{content}</p>
        </div>
      </div>
    );
  }
};
