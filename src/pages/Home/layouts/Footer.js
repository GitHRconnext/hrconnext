import React, { useState } from "react";
import imageLogoHR1white from "../../../images/logoHR1white.png";
import iconTelephone from "../../../icons/telephone.png";
import iconMail from "../../../icons/mail.png";
import icon8Line500 from "../../../icons/icons8-line-500.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var checkEmail = window.confirm(
      "กรุณาตรวจสอบความถูกต้องของอีเมล์สำหรับการติดต่อกลับ",
      " อีเมล์ : "
    );
    if (checkEmail) {
      alert("การส่ง Email ยังไม่สามารถใช้งานได้")
    }
  };
  return (
    <footer
      style={{ backgroundColor: "#050D3C", padding: "10px 10px 10px 10px" }}
    >
      <div className="container">
        <header>
          <img
            src={imageLogoHR1white}
            width="150"
            height="65"
            alt=""
            loading="lazy"
            className="text-center"
          />
        </header>
        <br />
        <div className="footer" style={{ color: "#fff" }}>
          <div className="container">
            <div className="row">
              <div id="about_us" className="col-lg-5 col-xs-12 about-company">
                <p style={{ fontFamily: "Taviraj" }}>
                  บริษัท เน็ค อินโนเวชั่น จำกัด เลขที่ 3333/119 ตึกช้าง อาคารบี
                  ชั้น 16 ถนนพหลโยธิน แขวงจอมพล เขตจตุจักร กรุงเทพ 10900
                </p>
                <div className=" row">
                  <div className="col-2">
                    <img
                      src={iconTelephone}
                      alt=""
                      width="50px"
                      height="50px"
                    />
                  </div>
                  <div className="col-10">
                    <p>ติดต่อเรา</p>
                    <p style={{ fontFamily: "Taviraj" }}>
                      086-744-8585 , 02-522-1234-8
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <img src={iconMail} alt="" width="50px" height="50px" />
                  </div>
                  <div className="col-10">
                    <p>อีเมล์</p>
                    <p style={{ fontFamily: "Taviraj" }}>
                      support@hrconnext.com
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <img src={icon8Line500} alt="" width="50px" height="50px" />
                  </div>
                  <div className="col-10">
                    <p>Line</p>
                    <p style={{ fontFamily: "Taviraj" }}>@hrconnext</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-xs-12 fim">
                <p>Quick Asset</p>
                <ul className="m-0 p-0 " style={{ fontFamily: "Taviraj" }}>
                  <li>
                    {" "}
                    <a href="#features">คุณลักษณะของโปรแกรม</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#functions">ฟังก์ชัน</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#prices">ราคา</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#informations">ความรู้</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#about_us">เกี่ยวกับเรา</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#contact_us">ติดต่อเรา</a>
                  </li>
                </ul>
              </div>

              <div
                id="contact_us"
                className="col-lg-4 col-xs-12 location"
                style={{ fontFamily: "Taviraj" }}
              >
                <p style={{ fontFamily: "Prompt" }}>ต้องการให้ติดต่อกลับ</p>
                <input
                  className="form-control form-control-sm  "
                  type="text"
                  placeholder="ชื่อ-สกุล"
                />
                <br />
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="อีเมล์"
                  value={email}
                  onChange={(event) => setEmail(event.value)}
                />
                <br />
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="(ตัวอย่าง) รายละเอียด"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btcl"
                  onClick={handleSubmit}
                >
                  ส่งข้อมูลให้ติดต่อกลับ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
