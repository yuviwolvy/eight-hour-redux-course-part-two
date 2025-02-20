import "./App.css";
import Pizzabox from "./components/pizzabox";
import { Provider } from "react-redux";
import store from "./components/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Pizzabox />
    </Provider>
  );
}

export default App;
