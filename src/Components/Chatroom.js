import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io.connect("http://localhost:8080");

export default function Chatroom() {
  // Use this to pull chatroom id to create room from url
  const [chatroomIndex, setChatroomIndex] = useState();
  // To replace with logged in user info after auth settled
  const [username, setUsername] = useState("");
  const [showChat, setShowChat] = useState(false);

  const params = useParams();
  if (chatroomIndex !== params.id) {
    setChatroomIndex(params.id);
  }

  socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

  const joinRoom = () => {
    if (username !== "") {
      socket.emit("join_room", chatroomIndex);
      setShowChat(true);
    }
  };

  const logout = () => {
    setUsername("");
    setShowChat(false);
  };

  return (
    <div>
      <div>Chatroom {chatroomIndex}</div>
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join a chat</h3>
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />

          <button onClick={joinRoom}>Join a room</button>
        </div>
      ) : (
        <>
          <div>
            <Chat
              socket={socket}
              username={username}
              chatroomIndex={chatroomIndex}
              logout={logout}
            />
          </div>
        </>
      )}
    </div>
  );
}
