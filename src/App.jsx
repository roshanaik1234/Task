import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Page/Login";
import Dashboard from "./Page/Dashboard";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import MainContaine from "./Page/MainContaine";
import Dashbord from "./task/src/Dashbord";

function App() {
  return (
    // <Provider store={store}>
    //   <BrowserRouter>
    //     <Routes>
    //       {/* Public Route */}
    //       <Route path="/" element={<Login />} />

    //       {/* Layout Route */}
    //       <Route element={<MainContaine />}>
    //         <Route path="/dashboard" element={<Dashboard />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </Provider>
    <>
    <Dashbord/>
    </>
  );
}

export default App;
