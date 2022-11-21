import { useState } from "react";
import "./login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import axios from "axios";
import { setUserSession } from "../../utils/Common";
import Loading from "../Loading";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  styled,
  TextField,
} from "@material-ui/core";
import { purple } from "@mui/material/colors";
import jwtDecode from "jwt-decode";
// import { useHistory } from "react-router-dom";

export const Login = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
    showPassword: false,
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#082b7a",
    "&:hover": {
      backgroundColor: "#082b7a",
    },
    "& span": {
      color: theme.palette.getContrastText(purple[900]),
    },
  }));

  // const history = useHistory();

  const LoginPage = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post("https://safowater-role.herokuapp.com/login", {
        login: values.login,
        password: values.password,
      })
      .then((res) => {
        const decode = jwtDecode(res.data.token);
        setUserSession(res.data.token, decode.fullName, decode.role);
        window.location.href =
          decode.role === "admin"
            ? "/omborxona"
            : decode.role === "callcenter"
            ? "/callcenter"
            : "/deliver";
        setLoading(false);
        setMsg(res.data.password);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      });
  };

  if (loading) {
    return (
      <div className="content">
        <Loading />
      </div>
    );
  }

  return (
    <div className="login_form">
      <div className="form px-5">
        <div className="form_logo">
          Safo<span>Water</span>
        </div>
        <div className="form_title">
          Log<span>I</span>n
        </div>
        <form className="w-100" onSubmit={LoginPage}>
          <div className="w-100 px-4 py-3">
            <FormControl className="w-100" variant="standard">
              <TextField
                id="standard-basic"
                label="login"
                value={values.login}
                onChange={handleChange("login")}
                autoComplete="on"
              />
            </FormControl>
          </div>

          <div className="px-4 pb-4 pt-2 w-100">
            <FormControl className="w-100" variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                autoComplete="on"
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment
                    position="end"
                    className="position-absolute"
                    style={{ right: 0 }}
                  >
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div>
            <p className="text-center text-danger fw-bold message">{msg}</p>
          </div>
          <div className="px-4 w-100 text-white">
            <ColorButton
              className="w-100 py-2"
              variant="contained"
              onClick={LoginPage}
            >
              Log In
            </ColorButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
