import React from "react";
import { useHistory, Link } from "react-router-dom";
import "../../css/style.css";
import logoHR1 from "../../images/logoHR1.png";
import image11 from "../../images/11.png";

const ForgetPasswordPage = () => {
  const history = useHistory();
  const handleSendEmailForget =(e) => {
    e.preventDefault();
    alert("การเปลี่ยนรหัสผ่านของบัญชีในระบบด้วย Email ยังไม่สามารถใช้งานได้")
  }
  const handleLoginGoogle =(e) => {
    e.preventDefault();
    alert("การเข้าระบบด้วยบัญชี google ยังไม่สามารถใช้งานได้")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" id="login-nav">
        {/* logo */}
        <Link className="navbar-brand" to="/">
          <img src={logoHR1} width="150" height="65" alt="" loading="lazy" />
        </Link>
      </nav>

      <section id="login">
        <div className="">
          <div className="row">
            <div className="col-12">
              {/* picture */}
              <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-md-6">
                  <img
                    src={image11}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              {/* form login */}

              <div>
                <div className="row" style={{ justifyContent: "center" }}>
                  <div className="col-md-6 mx-3">
                    <form>
                      {/* email */}
                      <div className="form-group row">
                        <label for="inputEmail3" className="col-sm-2 col-md-3">
                          Email
                        </label>
                        <div className="col-sm-10 col-md-9">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>

                      {/* forget password */}
                      <div
                        className="form-group row"
                        style={{ justifyContent: "center" }}
                      >
                        <Link to="/login">กลับหน้าเข้าสู่ระบบ</Link>
                      </div>
                      {/* login */}
                      <div
                        className="form-group row"
                        style={{ justifyContent: "center" }}
                      >
                        <div className="col-8 col-sm-6">
                          <button
                            className="btn btn-primary btn-sm"
                            type="submit"
                            style={{ width: "100%" }}
                            onClick={handleSendEmailForget}
                          >
                            ส่งอีเมล์เปลี่ยนรหัสผ่าน
                          </button>
                        </div>
                      </div>
                      {/* register */}
                      <div
                        className="form-group row"
                        style={{ justifyContent: "center" }}
                      >
                        ยังไม่ได้สมัครสมาชิก? <Link to="/register">สมัครสมาชิกฟรี</Link>
                      </div>
                      {/* login with google */}
                      <div
                        className="form-group row"
                        style={{ justifyContent: "center" }}
                      >
                        <div className="col-8 col-sm-6">
                          <button
                            className="btn btn-purple btn-sm"
                            type="submit"
                            style={{ width: "100%" }}
                            onClick={handleLoginGoogle}
                          >
                            Login ด้วย Google
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPasswordPage;
