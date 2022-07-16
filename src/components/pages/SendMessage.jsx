import React, { useEffect, useState } from "react";
import { db, auth } from "./../../firebase";
import firebase from "firebase/compat/app";
import SendIcon from "@mui/icons-material/Send";
import { Input } from "@mui/material";

function SendMessage() {
  const inputArgs = document.getElementById("inputMessage");
  const [message, setMessage] = useState("");
  function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    db.collection("message").add({
      text: message,
      photoURL,
      uid,
      // createdAt: firebase.firestore.serverTimestamp(),
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            id="inputMessage"
            placeholder="メッセージを入力してください"
            type="text"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            style={{
              width: "78%",
              fontSize: "10px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
          />
          <SendIcon
            onClicked={sendMessage}
            style={{ color: "#7AC2FF", marginLeft: "20px" }}
          />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
