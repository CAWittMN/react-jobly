import "./App.css";

import NavBar from "./components/NavBar";
import Router from "./routes/Router";

import { CurrentUserProvider } from "./context/CurrentUserContext";

const App = () => {
  return (
    <div className="App mt-3">
      <CurrentUserProvider>
        <NavBar />
        <div className="App-content text-center p-5">
          <Router />
        </div>
      </CurrentUserProvider>
    </div>
  );
};

export default App;
