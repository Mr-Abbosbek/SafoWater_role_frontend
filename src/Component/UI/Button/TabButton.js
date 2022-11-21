import React from 'react';
import { NavLink } from 'react-router-dom';

function TabButton({title1, title2, setPath, pathname}) {
  return (
    <div className="d-flex justify-content-center">
        <NavLink
          activeClassName="active text-white"
          className={"px-5 py-3 text-black mx-1 fw-bold border-2 border all_btn_tabs"}
          to={`/${pathname}/ `}
          exact
          onClick={()=>setPath(true)}
        >
          {title1}
        </NavLink>
        <NavLink
          activeClassName="active text-white"
          className={"px-5 py-3 text-dark mx-1 fw-bold border border-2 all_btn_tabs"}
          to={`/${pathname}/  `}
          exact
          onClick={()=>setPath(false)}
        >
          {title2}
        </NavLink>
      </div>
  );
}

export default TabButton;