import React, { useState } from "react";
import { connect } from "react-redux";
import { orderBurger } from "./redux/burger/burger-action.js";

function CustomerChoice(props) {
  const [userChoice, setUserChoice] = useState(0);

  return (
    <div className="burgerbox-container">
      <h2 className="burgerbox-text">
        Number of Burger Buns Available: {props.burgerBuns}
      </h2>
      <input
        type="text"
        value={userChoice}
        onChange={(e) => setUserChoice(e.target.value)}
        className="custom-input"
      ></input>
      <button
        className="burgerbox-btn"
        onClick={() => props.orderBurger(userChoice)}
      >
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
    orderBurger: (number) => dispatch(orderBurger(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerChoice);
