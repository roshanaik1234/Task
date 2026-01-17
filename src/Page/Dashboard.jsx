import { useSelector } from "react-redux";

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  console.log("User in Dashboard:", user);

  return <h2>Welcome {user?.name}</h2>;
}

export default Dashboard;
