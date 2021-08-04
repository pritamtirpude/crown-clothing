import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage.component";

function App() {
  const HatsPage = () => {
    return (
      <div>
        <h1>Hats Page</h1>
      </div>
    );
  };
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
