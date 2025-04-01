import "./App.css";
import Pizzabox from "./components/pizzabox";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import BurgerBox from "./components/burgerbox";
import CustomerChoice from "./components/customer-choice";
// import HooksContainer from "./components/hooks-container";

function App() {
  return (
    <Provider store={store}>
      <Pizzabox />
      <BurgerBox />
      {/* <HooksContainer /> */}
      <CustomerChoice />
    </Provider>
  );
}

export default App;
