import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Page/Login";
 import Dashboard from "./Page/Dashboard";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import MainContaine from "./Page/MainContaine";
import Dashbord from "./task/src/Dashbord";
import HomePage from "./challenge/Challenge1_TodoList/src/HomePage";
import Api_userDetails from "./challenge/Challenge2_APIINtergation/src/Api_Fetch_userDetails";
import FormPage from "./challenge/challenge3_Form/src/FormPage";
import UserDetail from "./challenge/Challenge4_ReduxPrac/src/Component/UserDetail";
import UserDashboard from "./challenge/Challenge5_Layout_Dashboard/src/Dashboard"
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
    {/* <Dashbord/> */}

    {/* challenge 1 todo list filter delted add without API */}
    {/* <HomePage/> */}
    {/* challenge 2 API INtegration fetch user details from API */}
    {/* <Api_userDetails/> */}
    {/* challenge 3 Form validation changes */}
    {/* <FormPage/> */}
    {/* challenge 4 redux practice */}
    {/* <UserDetail /> */}
    {/* challenge 5 layout user dashbord */}
    <UserDashboard />
    </>
  );
}

export default App;
