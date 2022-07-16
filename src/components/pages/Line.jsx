import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import { db } from "../../firebase.js";
import SendMessage from "./SendMessage";

function Line() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("message")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div>
      Lineです。
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

export default Line;
