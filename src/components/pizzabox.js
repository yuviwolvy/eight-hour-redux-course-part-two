import React from "react";
import { orderPizza } from "./redux";
import { connect } from "react-redux";

function Pizzabox(props) {
  return (
    <div className="pizzabox-container">
      <h2 className="pizzabox-text">
        Number of Pizza Available: {props.pizzaBase}
      </h2>
      <button className="pizzabox-btn" onClick={props.orderPizza}>
        Order Pizza
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pizzaBase: state.pizza.pizzaBase,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderPizza: () => dispatch(orderPizza()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pizzabox);
