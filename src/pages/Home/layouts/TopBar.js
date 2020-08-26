import React, { useState, useEffect } from "react";
import logoHR1 from "../../../images/logoHR1.png";

const TopBar = () => {
  //   const prevScrollY = useRef(0);
  //   const [goingUp, setGoingUp] = useState(false);
  const [transparentBG, setTransparentBG] = useState(true);

  var styleTopBar = {
    root: {
      height: "100px",
      display: "flex",
      position: "fixed",
      top: "0",
      width: "100%",
      zIndex: "10",
    },
    container: {},
    item: {},
  };

  useEffect(() => {
    function handleScroll() {
      const scrollYvalue = window.scrollY;
      if (scrollYvalue > 100) {
        setTransparentBG(false);
      } else {
        setTransparentBG(true);
      }
      console.log(
        "scroll page >>>",
        parseInt(scrollYvalue),
        " >100 ",
        transparentBG
      );

      //   for scroll up/down action
      //   if (prevScrollY.current < scrollYvalue && goingUp) {
      //     setGoingUp(false);
      //   }
      //   if (prevScrollY.current > scrollYvalue && !goingUp) {
      //     setGoingUp(true);
      //   }
      //   prevScrollY.current = scrollYvalue;
      //   console.log('scroll up >>>',goingUp);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [transparentBG]);

  return (
    <div
      style={Object.assign({}, styleTopBar.root, {
        backgroundColor: `${
          transparentBG ? "rgb(255 250 250 / 5%)" : "#f8f9fa"
        }`,
      })}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="wanav"
      >
        <a className="navbar-brand" href="#main">
          <img src={logoHR1} width="150" height="65" alt="" loading="lazy" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse nav-set-hr"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-right top-nav-hr mx-auto">
            <li className="nav-item active">
              <b>
                <a
                  className="nav-link"
                  href="#features"
                  style={{ paddingTop: "35px" }}
                >
                  คุณลักษณะของโปรแกรม
                </a>
              </b>
            </li>
            <li className="nav-item">
              <b>
                <a
                  className="nav-link"
                  href="#functions"
                  style={{ paddingTop: "35px" }}
                >
                  ฟังก์ชัน
                </a>
              </b>
            </li>
            <li className="nav-item">
              <b>
                <a
                  className="nav-link"
                  href="#prices"
                  style={{ paddingTop: "35px" }}
                >
                  ราคา
                </a>
              </b>
            </li>
            <li className="nav-item">
              <b>
                <a
                  className="nav-link"
                  href="#informations"
                  style={{ paddingTop: "35px" }}
                >
                  ความรู้
                </a>
              </b>
            </li>
            <li className="nav-item">
              <b>
                <a
                  className="nav-link"
                  href="#about_us"
                  style={{ paddingTop: "35px" }}
                >
                  เกี่ยวกับเรา
                </a>
              </b>
            </li>
            <li className="nav-item">
              <b>
                <a
                  className="nav-link"
                  href="#contact_us"
                  style={{ paddingTop: "35px" }}
                >
                  ติดต่อเรา
                </a>
              </b>
            </li>
          </ul>

          {/* action button สมัครใช้งาน เข้าสู่ระบบ */}
          <div className="form-inline-nav reg-log-nav-hr">
            <button
              className="btn btn-sm btcl"
              type="submit"
              style={{
                marginTop: "38px",
                marginRight: "5px",
                marginLeft: "10px",
              }}
            >
              สมัครใช้งาน
            </button>
            <button
              className="btn btn-sm btcl"
              type="submit"
              style={{
                marginTop: "38px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
