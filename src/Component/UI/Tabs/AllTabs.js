import React from "react";
import { NavLink } from "react-router-dom";

function AllTabs({ pathLink, setDate }) {

  // const DateBuilder = (a) => {
  //   // let months = [
  //   //   "January",
  //   //   "February",
  //   //   "March",
  //   //   "April",
  //   //   "May",
  //   //   "June",
  //   //   "July",
  //   //   "August",
  //   //   "September",
  //   //   "October",
  //   //   "November",
  //   //   "December",
  //   // ];
  //   // let days = [
  //   //   "Sunday",
  //   //   "Monday",
  //   //   "Tuesday",
  //   //   "Wednesday",
  //   //   "Thursday",
  //   //   "Friday",
  //   //   "Saturday",
  //   // ];

  //   let day = days[a.getDay()];
  //   let date = a.getDate();
  //   let month = months[a.getMonth()];
  //   let year = a.getFullYear();

  //   return `${day} ${date} ${month} ${year}`
  // }

  let a = new Date();

  const arr = [
    {
      id: 1,
      name: "Bugun",
      date: `${a.getDate()}-${a.getMonth()}-${a.getFullYear()}`
    },
    {
      id: 2,
      name: "Kecha",
      date: `${a.getDate()-1}-${a.getMonth()}-${a.getFullYear()}`
    },
    {
      id: 3,
      name: "Hafta",
      date: `${a.getDate()-7}-${a.getMonth()}-${a.getFullYear()}`
    },
    {
      id: 4,
      name: "Oy",
      date: `${a.getDate()}-${a.getMonth()-1}-${a.getFullYear()}`
    },
    {
      id: 5,
      name: "Yil",
      date: `${a.getDate()}-${a.getMonth()}-${a.getFullYear()-1}`
    },
  ];

  const tabBtn = (e, date) => {
     
    
    const tabLink = document.getElementsByClassName("allTab");
    for (let i = 0; i < tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace(" active text-white", "");
    }
    e.currentTarget.className += " active text-white";
    setDate({sana : date});
  };

  return (
    <div>
      <div className="pb-4 d-flex justify-content-center">
        {arr.map((res) => {
          if (res.id === 1) {
            return (
              <NavLink
                key={res.id}
                exact
                activeClassName="active text-white"
                className={"px-5 py-2 allTab text-black fw-bold all_btn_tabs"}
                to={pathLink}
                onClick={(e)=>tabBtn(e, res.date)}
              >
                {res.name}
              </NavLink>
            );
          } else {
            return (
              <NavLink
                key={res.id}
                exact
                activeClassName=""
                className={"px-5 py-2 allTab text-black fw-bold all_btn_tabs"}
                to={pathLink}
                onClick={(e)=>tabBtn(e, res.date)}
              >
                {res.name}
              </NavLink>
            );
          }
        })}
      </div>
    </div>
  );
}

export default AllTabs;
