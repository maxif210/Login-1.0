import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import { GeneralProvider } from "./context/GeneralProvider";
import Layout from './components/Layout';
import SearchScreen from "./components/SearchScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <GeneralProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/layout" element={<Layout />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/search" element={<SearchScreen />} />
          </Routes>
        </GeneralProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
