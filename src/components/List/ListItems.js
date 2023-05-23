import React from "react";
import classes from "./ListItem.module.css";
import ListItemForm from "./ListItemForm.js";
const ListItems = (props) => {
  const price = `$${props.price}`;
  return (
    <li>
      <div className={classes.med}>
        <span style={{ fontWeight: "bold" }}>{props.name}</span>
        <span className={classes.description}>{props.description}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <ListItemForm id={props.id} />
      {/* {console.log(props.id)} */}
    </li>
  );
};

export default ListItems;
