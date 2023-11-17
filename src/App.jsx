import './App.css';
import {Provider} from "react-redux"
import Counter from "./components/Counter/Counter"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
    <div>
      <Counter />
      <Counter />
    </div>
    </Provider>
  );
}

export default App;
