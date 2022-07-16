import React from "react";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";

function SignOut() {
  // function singWithGoogle() {
  //   // function singWithGoogle(this: any) {
  //   // const { user } = this.state;
  //   alert("login");
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   auth.signInWithPopup(provider);
  // }
  return (
    <div>
      <Button onClick={() => auth.signOut()}>サインアウト</Button>
    </div>
  );
}

export default SignOut;
