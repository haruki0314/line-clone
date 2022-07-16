import React from "react";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";

// import SendIcon from "@mui/material"

function SignIn() {
  function singWithGoogle() {
    // function singWithGoogle(this: any) {
    // const { user } = this.state;
    // alert("login");
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    // alert("ログインに成功しました！");
  }
  return (
    <div>
      <Button
        variant="contained"
        disableElevation
        // endIcon={<SendIcon />}
        onClick={singWithGoogle}
        style={{ margin: 30 }}
      >
        Googleにログインしてチャットを開始
      </Button>
      {/* <Button>login</Button> */}
    </div>
  );
}

export default SignIn;
