import React from "react";

const Logout = (props) => (
  <button className='login btn' onClick={props.onLogout}>
    Logout
  </button>
);

export default Logout;
