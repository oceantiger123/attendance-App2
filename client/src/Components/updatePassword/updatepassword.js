import axios from "axios";
import { useState } from "react";
import "./updatepassword.css";

const Updatepassword = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const handleChange = (event)=>{
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(user.newpassword!==user.newpasswordagain) setError("New Password Again doesn't match New Password");
        //console.log(error)
        else {
          try{
            const {data: admin}= await axios.put('/auth/updatepassword', user)
            if(admin){
              alert("password has been updated");
              window.location.href = '/';
            }
          } catch (err){
            setError(err.response.data)
          }
        }
    };
    return (
        <div className="updatepassword">
           <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="username">
            <big>Current Username</big>
          </label>
          <input name="username" type="text" value={user.username} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="password">
            <big>Current Password</big>
          </label>
          <input name="password" type="password" value={user.password} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="newpassword">
            <big>New Password</big>
          </label>
          <input name="newpassword" type="password" value={user.newpassword} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="newpasswordagain">
            <big>New Password Again</big>
          </label>
          <input name="newpasswordagain" type="password" value={user.newpasswordagain} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        
        <div>{error} </div>
      </form> 
        </div>
    );
}

export default Updatepassword;