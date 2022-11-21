import { useState } from "react";
import "./login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import axios from "axios";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const LoginPage = async (e) => {
    e.preventDefault();
    try {
      await axios
      .post("http://localhost:2001/api/register", {
        name: name,
        password: password,
      })
      .then(() => {
        alert("Registratsiyadan o'tdingiz");
      })
      history.push('/login');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="login_form">
      <div className="form">
        <div className="form_logo">
          Safo<span>Water</span>
        </div>
        <div className="form_title">
          Regis<span>tra</span>tion
        </div>
        <form className="form_items" onSubmit={LoginPage}>
          <div className="form_inputs">
            <input
              type="text"
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="new username"
            />
            <label>Username</label>
          </div>
          <div className="form_inputs">
            <div
              className={
                password ? "d-block password_icon position-absolute" : "d-none"
              }
            >
              <VisibilityIcon
                className={show === false ? "d-none" : "d-block"}
                onClick={() => setShow(false)}
              />
              <VisibilityOffIcon
                className={show === true ? "d-none" : "d-block"}
                onClick={() => setShow(true)}
              />
            </div>
            <input
              type={show === true ? "text" : "password"}
              required
              name="password"
              autoComplete="on"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button className="form_button" onClick={(e) => LoginPage(e)}>
            Registration
          </button>
          <p className="text-center text-danger fw-bold message">{msg}</p>
        </form>
      </div>
    </div>
  );
};
