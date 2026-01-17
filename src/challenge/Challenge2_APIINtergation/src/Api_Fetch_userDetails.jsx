import React, { useEffect, useState } from "react";
import "./Api_Fetch_userDetails.css";

const Api_userDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [usernameFilter, setUsernameFilter] = useState("");
  const [entriesLimit, setEntriesLimit] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUserDetails(data);
        setAllUsers(data);
        console.log("api data", data);
      })
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  // Apply filter and limit whenever they change
  useEffect(() => {
    let filtered = allUsers;

    // Apply search filter if exists
    if (usernameFilter !== "") {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(usernameFilter.toLowerCase()) ||
        user.username.toLowerCase().includes(usernameFilter.toLowerCase())
      );
    }

    // Apply entries limit
    const limited = filtered.slice(0, entriesLimit);
    setUserDetails(limited);
  }, [usernameFilter, entriesLimit, allUsers]);

  const handelsearch = (e) => {
    const filterValue = e.target.value;
    console.log("filterValue", filterValue);
    setUsernameFilter(filterValue);
  };

  const handelEntries = (e) => {
    console.log("selected entries", e.target.value);
    const entries = parseInt(e.target.value, 10);
    setEntriesLimit(entries);
  };

   const totalPages = Math.ceil(allUsers.length / entriesLimit);
   console.log("totalPages", totalPages);
  

  return (
    <>
      <div className="API_userDetails_container">
        <h1>User Details Component</h1>
        <h3>Total Users: {userDetails.length}</h3>
        <div>
          <span>Show </span>
          <select onChange={handelEntries} value={entriesLimit}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <span> entries</span>
        </div>

        <input 
          type="text" 
          placeholder="Search by name or username" 
          onChange={handelsearch}
          value={usernameFilter}
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Api_userDetails;