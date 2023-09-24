import "./App.css";
import ContextProvider from "./contextApi/ContextProvider";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <AllRoutes />
      </ContextProvider>
    </div>
  );
}

export default App;