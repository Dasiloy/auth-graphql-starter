import React from "react";
import requireAuth from "../hocs/RequireAuth";

function Dashboard() {
  return <div>Dashboard</div>;
}

export default requireAuth(Dashboard);
