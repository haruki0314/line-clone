import React from "react";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";

function SignOut() {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>サインアウト</Button>
    </div>
  );
}

export default SignOut;
