import "./App.css";
import ColorModeSwitch from "./components/ColorModeSwitch";
import Login from "./pages/login/Login";
import Register from "./pages/registration/Register";

function App() {
  return(
    <>
    <ColorModeSwitch />
    <Register />
    <Login />
    </>
  );
}

export default App;
