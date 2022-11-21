// import * as React from "react";
// import PropTypes from "prop-types";
// import Backdrop from "@mui/material/Backdrop";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// // web.cjs is required for IE11 support
// import { useSpring, animated } from "react-spring/web.cjs";
// import {
//   FormControl,
//   FormHelperText,
//   Input,
//   InputAdornment,
//   MenuItem,
//   TextField,
// } from "@material-ui/core";

// const currencies = [
//   {
//     label: 'Coca Cola',
//     value: "0.5x12-6L"
//   },
//   {
//     label: 'Fanta (apelsin)',
//     value: "0.5x12-6L"
//   },
//   {
//     label: 'Ichimlik (gilos)',
//     value: "0.5x12-6L"
//   },
//   {
//     label: 'Ichimlik (nok)',
//     value: "0.5x12-6L"
//   },
//   {
//     label: 'Ichimlik (olma)',
//     value: "0.5x12-6L"
//   },
//   {
//     label: 'Ichimlik (buratino)',
//     value: "0.5x12-6L"
//   },
//   {
//     label: 'Ichimlik (mineralka)',
//     value: "0.5x12-6L"
//   },
//   {
//     label: 'Ichimlik (kvas)',
//     value: "2x6-12L"
//   },
//   {
//     label: 'Ichimlik (mors)',
//     value: "2x6-12L"
//   },
// ];

// const Fade = React.forwardRef(function Fade(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     },
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// Fade.propTypes = {
//   children: PropTypes.element,
//   in: PropTypes.bool.isRequired,
//   onEnter: PropTypes.func,
//   onExited: PropTypes.func,
// };

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 500,
//   bgcolor: "background.paper",
//   border: "1px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// export default function AllModal() {
//   const [values, setValues] = React.useState({
//     amount: "",
//     liter: '',
//     select: 'Coca Cola'
//   });

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div className="pb-5 pt-2">
//       <Button
//         onClick={handleOpen}
//         className={"py-3 px-3 mx-1 border border-2 text-black"}
//         style={{ backgroundColor: "white", borderRadius: "0px !important" }}
//       >
//         Mahsulot ishlab chiqiarish
//       </Button>
//       <Modal
//         aria-labelledby="spring-modal-title"
//         aria-describedby="spring-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//             <Typography id="spring-modal-title" variant="h6" component="h2">
//               Mahsulot ishlab chiqarish
//             </Typography>
//             <Typography id="spring-modal-description" sx={{ mt: 2 }}>
//               {/* <TextField
//                 id="standard-select-currency"
//                 select
//                 label="Select"
//                 value={values.select}
//                 onChange={handleChange}
//                 helperText="Iltimos mahsulot nomini tanlang"
//                 variant="standard"
//               >
//                 {currencies.map((option) => (
//                   <MenuItem key={option.value} value={option.label}>
//                     {option.label}
//                   </MenuItem>
//                 ))}
//               </TextField> */}
//               <FormControl
//                 variant="standard"
//                 sx={{ m: 1, mt: 3, width: "25ch" }}
//               >
//                 <Input
//                   type="number"
//                   id="standard-adornment-weight"
//                   value={values.liter >= 0 ? values.liter : (values.liter * (-1))}
//                   onChange={handleChange("liter")}
//                   endAdornment={
//                     <InputAdornment position="end">L</InputAdornment>
//                   }
//                   aria-describedby="standard-weight-helper-text"
//                   inputProps={{
//                     "aria-label": "weight",
//                   }}
//                 />
//                 <FormHelperText id="standard-weight-helper-text">
//                   Liter
//                 </FormHelperText>
//               </FormControl>
//             </Typography>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const currencies = [
  {
    label: "Coca Cola",
    value: "0.5x12-6L",
  },
  {
    label: "Fanta (apelsin)",
    value: "0.5x12-6L",
  },
  {
    label: "Ichimlik (gilos)",
    value: "0.5x12-6L",
  },
  {
    label: "Ichimlik (nok)",
    value: "0.5x12-6L",
  },
  {
    label: "Ichimlik (olma)",
    value: "0.5x12-6L",
  },
  {
    label: "Ichimlik (buratino)",
    value: "0.5x12-6L",
  },
  {
    label: "Ichimlik (mineralka)",
    value: "0.5x12-6L",
  },
  {
    label: "Ichimlik (kvas)",
    value: "2x6-12L",
  },
  {
    label: "Ichimlik (mors)",
    value: "2x6-12L",
  },
];

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [values, setValues] = React.useState({
    liter: "",
    select: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleOpen = () => {
    setValues({
      liter: "",
      select: "",
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CreateProduct = () => {
    console.log(values);
    setOpen(false);
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

  return (
    <div>
      <Button
        type="button"
        onClick={handleOpen}
        className={"py-3 px-3 mx-1 border border-2 text-black"}
        style={{ backgroundColor: "white", borderRadius: "0px !important" }}
      >
        Mahsulot ishlab chiqiarish
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Mahsulot ishlab chiqarish</h2>
            <form id="transition-modal-description" onSubmit={CreateProduct}>
              <FormControl className="w-100 mt-4">
                <InputLabel id="demo-simple-select-helper-label">
                  Maxsulot nomi
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={values.select}
                  onChange={handleChange("select")}
                >
                  {currencies.map((value) => (
                    <MenuItem key={value.label} value={value.label}>
                      {value.label} ({value.value})
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
              </FormControl>

              <FormControl
                className="w-100 mt-4"
                variant="standard"
                sx={{ m: 1, mt: 3, width: "100%" }}
              >
                <InputLabel id="demo-simple-select-helper-label">
                  Suv miqdori
                </InputLabel>
                <Input
                  type="number"
                  id="standard-adornment-weight"
                  value={values.liter >= 0 ? values.liter : values.liter * -1}
                  onChange={handleChange("liter")}
                  endAdornment={
                    <InputAdornment position="end">L</InputAdornment>
                  }
                  aria-describedby="standard-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                <FormHelperText id="standard-weight-helper-text">
                  Liter
                </FormHelperText>
              </FormControl>

              <div className="w-100 text-white">
                <ColorButton
                  className="w-100 py-2"
                  variant="contained"
                  onClick={CreateProduct}
                >
                  Create Product
                </ColorButton>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
