import React from 'react'
import { deleteAllUsers } from './store/Slice/UserSlice'
import { useDispatch } from 'react-redux'

const DeleteAllUser = () => {
  const dispatch=useDispatch();
  const HandelDeletedAll=()=>{
     dispatch(deleteAllUsers())
  }
  return (
    <>
    <button onClick={()=>HandelDeletedAll()} style={{padding: "5px",margin:"6px 0px",float:"right"}}>All Clear</button>
    </>
  )
}

export default DeleteAllUser