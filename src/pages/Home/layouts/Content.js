import React, { useState } from "react";
import imagehome from "../../../images/home-bg-hr.png";
import imagep1 from "../../../images/p1.png";
import image21 from "../../../images/21.png";
import image19 from "../../../images/19.png";
import image20 from "../../../images/20.png";
import image23 from "../../../images/23.png";
import image24 from "../../../images/24.png";
import image13 from "../../../images/13.png";
import image15 from "../../../images/15.png";
import image18 from "../../../images/18.png";
import image26 from "../../../images/26.png";
import image17 from "../../../images/17.png";
import image16 from "../../../images/16.png";
import image14 from "../../../images/14.png";
import icon1 from "../../../icons/1.png";
import icon2 from "../../../icons/2.png";
import icon3 from "../../../icons/3.png";
import icon4 from "../../../icons/4.png";
import icon5 from "../../../icons/5.png";
import icon6 from "../../../icons/6.png";
import icon7 from "../../../icons/7.png";
import iconuser_blue from "../../../icons/user_blue.png";
import iconsick_blue from "../../../icons/sick_blue.png";
import iconreceive_cash_blue from "../../../icons/receive_cash_blue.png";
import iconidentification_blue from "../../../icons/identification_blue.png";
import iconcalendar_blue from "../../../icons/calendar_blue.png";
import iconmobile_blue from "../../../icons/mobile_blue.png";
import icondashboard_blue from "../../../icons/dashboard_blue.png";

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

const Content = () => {
  const [functionCarousel, setFunctionCarousel] = useState(0);
  const funtionsList = [
    { iconSource: icon1, name: "ประวัติบุคคล การศึกษา งาน" },
    { iconSource: icon2, name: "การลากิจ ป่วย พักร้อน" },
    { iconSource: icon3, name: "เงินเดือน และค่าตอบแทนอื่น" },
    { iconSource: icon4, name: "การตอกบัตรเวลาทำงานด้วย GPS" },
    { iconSource: icon5, name: "ปฎิทินงานของบริษัท" },
    { iconSource: icon6, name: "Mobile App สำหรับพนักงาน" },
    { iconSource: icon7, name: "Dashboard สำหรับผู้บริหาร" },
  ];
  const informationsList = [
    {
      header: "ประวัติบุคคล การศึกษา งาน",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: image13,
      iconSource: iconuser_blue,
    },
    {
      header: "การลากิจ ป่วย พักร้อน",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: image15,
      iconSource: iconsick_blue,
    },
    {
      header: "เงินเดือน และค่าตอบแทนอื่น",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: image18,
      iconSource: iconreceive_cash_blue,
    },
    {
      header: "การตอกบัตรเวลาทำงานด้วย GPS",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: image26,
      iconSource: iconidentification_blue,
    },
    {
      header: "ปฎิทินงานของบริษัท",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: image17,
      iconSource: iconcalendar_blue,
    },
    {
      header: "Mobile App สำหรับพนักงาน",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: image16,
      iconSource: iconmobile_blue,
    },
    {
      header: "Dashboard สำหรับผู้บริหาร",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata`,
      imageSource: image14,
      iconSource: icondashboard_blue,
    },
  ];

  const handleCarousel = (action) => {
    if (action === "next") {
      setFunctionCarousel((functionCarousel + 1) % 3);
    } else {
      setFunctionCarousel((functionCarousel - 1) % 3);
    }
  };
  return (
    <div
      style={{
        background: `top center url(${imagehome}) no-repeat`,
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
                >
                  สมัครใช้งานฟรี
                </button>
              </div>
            </div>
            {/* <!--HRConnext picture--> */}
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <img src={imagep1} alt="" width="100%" height="inherit" />
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
                <img src={image21} alt="" width="100%" height="inherit" />
                <b>
                  <p>สามารถใช้งานฟังก์ชันหลัก ฟรี 100%</p>
                </b>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore.
                </p>
              </div>
              <div className="col-sm-8 col-md-4 shadow-lg p-3 mb-5 bg-white rounded">
                <img src={image19} alt="" width="100%" height="inherit" />
                <b>
                  <p>การใช้งานง่าย รูปแบบสวยงาม</p>
                </b>
                <p style={{ fontFamily: "'Taviraj', serif" }}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore.
                </p>
              </div>
              <div className="col-sm-8 col-md-4 ">
                <img src={image20} alt="" width="100%" height="inherit" />
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
            <ol className="carousel-indicators">
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
                    <img src={icon1} alt="" width="50px" height="50px" />
                    <p>ประวัติบุคคล การศึกษา งาน</p>
                  </div>
                  <div className="col">
                    <img src={icon2} alt="" width="50px" height="50px" />
                    <p>การลากิจ ป่วย พักร้อน</p>
                  </div>
                  <div className="col">
                    <img src={icon3} alt="" width="50px" height="50px" />
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
                    <img src={icon4} alt="" width="50px" height="50px" />
                    <p>การตอกบัตรเวลาทำงานด้วย GPS</p>
                  </div>
                  <div className="col">
                    <img src={icon5} alt="" width="50px" height="50px" />
                    <p>ปฎิทินงานของบริษัท</p>
                  </div>
                  <div className="col">
                    <img src={icon6} alt="" width="50px" height="50px" />
                    <p>Mobile App สำหรับพนักงาน</p>
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
                    <img src={icon7} alt="" width="50px" height="50px" />
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
            className="card c-register col-xs-11 col-sm-10 col-md-8 col-lg-6"
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
                <button className="btn btn-sm btcl " type="submit">
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
        <div className="" style={{ marginTop: "150px" }}>
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
                src={image23}
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
                src={image24}
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
  );
};

export default Content;
