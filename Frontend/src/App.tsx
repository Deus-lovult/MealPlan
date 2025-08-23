import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "./components/ui/provider";
import { ValueProvider } from "./ContextProvider/MealsContext";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <ValueProvider>
        <Provider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Provider>
      </ValueProvider>
    </>
  );
}

export default App;
