import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import './Header.css';
import { useNavigate } from 'react-router-dom';


function Header() {
 
  const user = useSelector((state) => state.auth.user);
  console.log("User in Dashboard:", user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Header mounted or user changed:", user);
    if (user) {
        alert(`Welcome back, ${user.name}!`);
    }else {
           navigate('/');  
    }
  }, [user]);

  return (
    <div className="HeaderContainer">
        <div>RS</div>
        <div className='profileContaiber'>
            <div><img src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=1024x1024&w=is&k=20&c=oGqYHhfkz_ifeE6-dID6aM7bLz38C6vQTy1YcbgZfx8=" alt="profile" width={33} height={33} style={{borderRadius:"50%"}}/></div>
            <div>
                <div>{user?.name}</div>
                <div>{user?.email}</div>
            </div>
          
        </div>
    </div>
  )
}

export default Header
