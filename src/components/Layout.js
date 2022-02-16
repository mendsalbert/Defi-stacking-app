import React from "react";

const Layout = (props) => {
  return (
    <div className="m-10 flex flex-col justify-center items-center">
      {props.children}
    </div>
  );
};

export default Layout;
