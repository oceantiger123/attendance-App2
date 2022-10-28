import {useEffect, useState} from "react";
import "./App.css";
import AttendentCalendar from "./Components/calendar";
import Members from "./Components/member/member";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SingleDateAttendance from "./Components/singleDateAttended/attendance";
import { Onemember } from "./Components/member/oneMember";
import Login from "./Components/Login";
import axios from "axios";
import Updatepassword from "./Components/updatePassword/updatepassword";

const App = () => {
  // const token = window.localStorage.getItem('token');
 
  // const [auth, setAuth] = useState({});
  // useEffect(()=>{
  //   (async()=>{
  //     try{
  //       const {data: user} = await axios.get('/auth/me', {
  //         headers: {
  //           authorization: token
  //         }
  //       })
  //       setAuth(user)
  //     }catch(err){
  //     }
  //   })()
  // },[token])

  return (
    <div>
      
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/members" element={<Members />} />
            <Route exact path="/members/:id" element={<Onemember />} />
            <Route exact path="/dates/:id" element={<SingleDateAttendance />} />
            <Route exact path="/calendar" element={<AttendentCalendar />} />
            <Route exact path="/updatepassword" element={<Updatepassword />} />
          </Routes>
        </div>
      
    </div>
  );
  // return (
  //   <div>
  //     {auth.id ? (
  //       <div>
  //         <Navbar />
  //         <Routes>
  //           <Route exact path="/" element={<Home />} />
  //           <Route exact path="/members" element={<Members />} />
  //           <Route exact path="/members/:id" element={<Onemember />} />
  //           <Route exact path="/dates/:id" element={<SingleDateAttendance />} />
  //           <Route exact path="/calendar" element={<AttendentCalendar />} />
  //           <Route exact path="/updatepassword" element={<Updatepassword />} />
  //         </Routes>
  //       </div>
  //     ) : (
  //       <Login auth={auth} />
  //       )}
  //   </div>
  // );
};

export default App;
