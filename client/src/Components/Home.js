import { Calendar } from "react-calendar";
import React, { useState} from 'react';
import "./Home.css"
import axios from "axios";
import { Link } from "react-router-dom"

const Home = () => {
  const [date, setDate] = useState({});
  const [attendance, setAttendance] = useState([]);
  
  const onChange = async(date) => {
    let curDate = date.toString().slice(4,15)
    const {data: dateObj} = await axios.get(`/api/dates/:id/:id/:id?date=${curDate}`);
    if(dateObj === "not existed"){
      const {data: createdDate} = await axios.post('/api/dates', {"date": curDate});
      setDate(createdDate);
      setAttendance([])
    } else{
      const {data: attendance} = await axios.get(`/api/dates/${dateObj.id}`);
      setDate(dateObj)
      setAttendance(attendance);
      }
    };

    return (
      <div className="home">
        <h1 style={{ textAlign: "center" }}>Welcome to Attendance App</h1>
        <h4>Please Click a day on the calendar to see attendance. If no attendance, you can click "Edit Attendance" button to add or delete attendees</h4>
        <Calendar onChange={onChange}/>

        {attendance.length > 0 ? (

      <div>
          <h3>The number of members attended on {date.date}: {attendance.length}</h3>
          <Link to={`/dates/${date.id}`} state={date.date}>
           <button style={{margin: "10px"}}>Edit Attendance</button>  
          </Link>
                <div style={{display: "flex", flexWrap: "wrap"}}>
            {attendance.map((member) => (
              <div style={{width: '100px', height: '100px', border: "solid", borderColor: "white"}} key={member.id}>
              <Link to={`/members/${member.id}`} key={member.id}>
               <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                 <img style={{ width: "30px", margin: "5px" }} src={member.image} alt="" />
              <label>{member.name}</label>
               </div>
              </Link>
              </div>
            ))}
            </div> 
      </div>
      ) : (
        <div>
          <h3 > NO ATTENDENCE: {date.date} "Please choose a day on calendar to see attendance, then click "Edit attendance" to add or delete attendees </h3>
          <Link to={`/dates/${date.id}`} state={date.date}>
           <button>Edit Attendance</button>  
          </Link>
        </div>
      )
      }
      </div>
    )
  }
  
  export default Home;
  