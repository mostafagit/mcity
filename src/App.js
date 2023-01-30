import { Route, Routes } from "react-router";
import Footer from "./components/Header_Footer/footer";
import Header from "./components/Header_Footer/header";
import Home from "./components/HOME";
import SignIn from "./components/signin";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sing_in" element={<SignIn />} />
        <Route path="/dashboard" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
