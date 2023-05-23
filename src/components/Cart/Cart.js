import React from "react";
import Modal from "../UI/Model";
import classes from "./Cart.module.css";
// import BtnDec from "./BtnDec";
import BtnInc from "./BtnInc";
import { useStore } from "../../store/CartProvider";

export const Cart = (props) => {
  const store = useStore();

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {store.cartItems.map((item) => {
        let filtered_item = store.medicines.filter((v) => v.id === item.id);
        console.log({ filtered_item });

        return (
          <li>
            {item.count > 0 && (
              <>
                <h4>{`${filtered_item[0].name}  [x${item.count}]`}</h4>
                <p>price: {filtered_item[0].price}</p>
                <BtnInc
                  style={{ marginRight: "3px" }}
                  item_id={item.id}
                  count={item.count}
                />
                {/* <BtnDec
                  item_id={item.id}
                  price={filtered_item[0].price}
                  count={item.count}
                /> */}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
      </div>

      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          close
        </button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};
