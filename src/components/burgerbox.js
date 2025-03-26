import React from "react";
import { connect } from "react-redux";
import { orderBurger } from "./redux/burger/burger-action.js";

function Burgerbox(props) {
  return (
    <div className="burgerbox-container">
      <h2 className="burgerbox-text">
        Number of Burger Buns Available: {props.burgerBuns}
      </h2>
      <button className="burgerbox-btn" onClick={props.orderBurger}>
        Order Burger
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    burgerBuns: state.burger.burgerBuns,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderBurger: () => dispatch(orderBurger()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Burgerbox);
