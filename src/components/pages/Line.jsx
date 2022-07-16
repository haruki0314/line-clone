import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import { db } from "../../firebase.js";

function Line() {
  const [messages, setMessages] = useState();
  useEffect(() => {
    db.collection("message")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapShot) => {
        setMessages(snapShot.docs.map((doc) => doc.data()));
        // setMessages(snapShot.docs.map((doc) => doc.data()));
      }, []);
  }, []);
  return (
    <div>
      Lineです。
      {console.log(messages)}
      <SignOut />
      {/* <div className="msgs">
        {messages.map(({ id, text, photoURL }) => (
          <div key="id">
            <img src={photoURL} alt=""></img>
            <p>{text}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Line;
