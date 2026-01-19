import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeUser } from './store/Slice/UserSlice';

const DisplayUser = () => {
    const dispatch=useDispatch();
    const data =useSelector((state)=>{
        return state.users
    })

    const handelsepreatedDelete=(userId)=>{
        dispatch(removeUser(userId))
    }

      if (!data || data.length === 0) {
    return <p>No Data Found</p>;
  }

    console.log("data data",data)
  return (
    <div>
    {
        data.map((item,index)=>{
            return <p key={index} style={{display:"flex",justifyContent:"space-between"}}>{item} <span title='Delete' onClick={()=>handelsepreatedDelete(index)}>
                <RiDeleteBin6Line color={"red"}/></span></p>
        })
    }
    </div>
  )
}

export default DisplayUser