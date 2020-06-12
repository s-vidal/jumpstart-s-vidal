import React, { useState, useEffect } from "react";
// import Button from 'react-bootstrap/button'
//import BuildProfile from "./BuildProfile";
import UserType from "./UserType"

function UserSignUp(props) {
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(true);

  return (
    <div>
      <UserType />
    </div>
  );
}

export default UserSignUp;
