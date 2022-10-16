import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import User from "./components/User";
import Posts from "./components/Posts";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <User />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
