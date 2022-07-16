import React from "react";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import CallIcon from "@mui/icons-material/Call";
import { auth } from "../../firebase";

function SignOut() {
  return (
    <div className="header">
      <Button
        style={{ color: "white", fontsize: "10px", fontFamily: "sans-serif" }}
        onClick={() => auth.signOut()}
      >
        サインアウト
      </Button>
      <h3
        style={{ color: "white", fontsize: "10px", fontFamily: "sans-serif" }}
      >
        {auth.currentUser.displayName}
      </h3>
      <CallIcon
        style={{ color: "white", fontsize: "10px", fontFamily: "sans-serif" }}
      />
    </div>
  );
}

export default SignOut;
