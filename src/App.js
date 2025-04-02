import "./App.css";
// import Pizzabox from "./components/pizzabox";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import ProductsContainer from "./components/products-container";
// import BurgerBox from "./components/burgerbox";
// import CustomerChoice from "./components/customer-choice";
// import HooksContainer from "./components/hooks-container";

function App() {
  return (
    <Provider store={store}>
      {/* <Pizzabox />
      <BurgerBox /> */}
      {/* <HooksContainer /> */}
      {/* <CustomerChoice /> */}
      <ProductsContainer />
    </Provider>
  );
}

export default App;
