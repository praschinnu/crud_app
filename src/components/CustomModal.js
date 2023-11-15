import React from 'react'
import "./CustomModal.css"
import { useSelector } from 'react-redux'


function CustomModal({id,showPopup,setShowPopup}) {

    const allusers=useSelector((state)=>state.app.users)

    const singleUser=allusers.filter((i)=>i.id===id);
    console.log("singleuser",singleUser);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <br />
        <h5>Name:{singleUser[0].name}</h5>
        <b><p>Age:{singleUser[0].age}</p></b>
        <b><p>Gender:{singleUser[0].gender}</p></b>
        <h6>Email:{singleUser[0].email}</h6>
        <h6>Phno:{singleUser[0].num}</h6><br />
        <b><p>books:-{singleUser[0].category}</p></b>

        <button type="button" class="btn btn-dark"
         onClick={()=>setShowPopup(false)}>Close</button>
      </div>
    </div>
  )
}

export default CustomModal