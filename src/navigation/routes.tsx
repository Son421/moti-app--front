import { Route, Routes } from "react-router-dom";
import UserPage from "../pages/userPage/UserPage";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import History from "../pages/history/History";
import Edit from "../pages/edit/Edit";

export default () => (
    <Routes>
        <Route path="/user/" element={<UserPage/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/" element={<Registration/>}/> {/*create a guest page*/} 
        <Route path="/login" element={<Login/>}/>
        <Route path="/edit" element={<Edit/>}/>
    </Routes>
);