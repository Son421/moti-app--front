import { Route, Routes } from "react-router-dom";
import UserPage from "../pages/userPage/UserPage";
import Registration from "../pages/registration/Registration";

export default () => (
    <Routes>
        <Route path="/" element={<UserPage/>}/>
    </Routes>
);

