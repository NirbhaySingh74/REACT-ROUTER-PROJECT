import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
