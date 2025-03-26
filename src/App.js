import "./App.css";
import Pizzabox from "./components/pizzabox";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import BurgerBox from "./components/burgerbox";
// import HooksContainer from "./components/hooks-container";

function App() {
  return (
    <Provider store={store}>
      <Pizzabox />
      <BurgerBox />
      {/* <HooksContainer /> */}
    </Provider>
  );
}

export default App;
