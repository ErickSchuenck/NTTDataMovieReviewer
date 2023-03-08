import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Content from "./components/Content/Content";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Header />
      <Title />
      <Content />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
