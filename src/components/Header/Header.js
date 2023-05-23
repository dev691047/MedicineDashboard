import React from "react";

const Header = (props) => {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <button
        style={{ float: "right", height: "30px", width: "50px" }}
        onClick={props.showCartHandler}
      >
        Cart
      </button>
    </div>
  );
};

export default Header;
