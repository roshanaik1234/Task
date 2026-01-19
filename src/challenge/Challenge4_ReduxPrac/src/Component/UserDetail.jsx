import React from 'react'
import DeleteAllUser from './DeleteAllUser';
import { userFackdata } from '../Api';
import { useDispatch } from 'react-redux';
import { addUser } from './store/Slice/UserSlice';
import DisplayUser from './DisplayUser';

const UserDetail = () => {
    const dispatch= useDispatch();

    const HandelNewUser=(payload)=>{
  console.log("payload",payload)
  dispatch(addUser(payload))
    }
  return (
    <>
    <div>
        <div className="container" style={{width:"30%",margin:"10px auto"}}>
            <div className="admin_Table" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div className="admin_subtitle">
                    List of User Details
                </div>
                <button onClick={()=>HandelNewUser(userFackdata())} style={{padding: "5px",margin:"6px 0px"}}>Add New Users</button>
            </div>
            <hr />
           <DisplayUser />
            <hr />
            <DeleteAllUser/>
        </div>
    </div>
    </>
  )
}

export default UserDetail