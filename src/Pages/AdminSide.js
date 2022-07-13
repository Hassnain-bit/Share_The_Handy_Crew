import React, { useEffect, useState } from "react";
import CustomersItem from "../components/AdminSide/CustomersItem";
import "../styles/AdminSide.css"
import firebase from 'firebase';
function AdminSide() {
  const [userData , setUserData] = useState([]);
  useEffect(()=>{
    const firestore = firebase.database().ref('/UserInfo');
      firestore.on('value',(response)=>{
        const data = response.val();
        let userInfo = [];
        for(let id in data){
          userInfo.push({
            id:id,
            firstName: data[id].firstName,
            lastName:data[id].lastName,
            email: data[id].email,
            phone: data[id].phone,
            subject:data[id].subject,
            message: data[id].message,
          });
        } 
        setUserData(userInfo);
      });
  },[])
  return (
    <div className="Admin-Side">
      <div className="dashboard-title">
          <div className="heading">
          <h1>Admin Dashboard</h1>
          </div>
      </div>

      <div className="mt-5 mb-5">
      <div className="container">
      {
        userData.map((data, index)=>(
          <CustomersItem
              firstName={data.firstName}
              lastName={data.lastName}
              email={data.email}
              phone={data.phone}
              subject={data.subject}
              message={data.message}
        />
        ))
      }
      
      
      </div>
      </div>
         
        
    </div>
  );
}

export default AdminSide;
