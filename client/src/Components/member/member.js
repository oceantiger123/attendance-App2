import axios from "axios";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./member.css";

const Members = () => {
    const [members, setMembers] = useState([]);
    const [formData, setFormData] = useState({});

    useEffect(()=>{
      const cancelToken = axios.CancelToken.source();

      (async()=>{
        try{
          const {data: member} = await axios.get('/api/members', {cancelToken: cancelToken.token});
          setMembers(member);

        }catch(err){
          if(axios.isCancel(err)) console.log('canceled!')
          else {//todo:handle error
          }
        }
      })();
      return ()=>{
         cancelToken.cancel();
      }
    }, []);

    const handleChange = (event) => {
      setFormData({
        ...formData, 
        [event.target.name]: event.target.value
      })
    }
    const handleSubmit = async (event)=>{
      event.preventDefault();
      const {data: members}= await axios.post('/api/members', formData);
      setMembers(members);
      setFormData({})
    }
    return (
      
      <div className="memberComp">
          
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Member Name</label>
            <input name="name" value={formData.name} onChange={handleChange}/>

            <label htmlFor="phone"> Member Phone</label>
            <input name="phone" value={formData.phone} onChange={handleChange}/>

            <button type="submit"> Add Member </button>
          </form>

          <h3>Total Number of Members: {members.length}</h3>
          <h4>To add a new member from above Or Click on a member's box to update information if needed</h4>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            {members.map((member) => (
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
    )
  };

export default Members;