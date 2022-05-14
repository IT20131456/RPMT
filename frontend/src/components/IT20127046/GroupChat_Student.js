import "./css/GroupChat.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./GroupChat";

const socket = io.connect("http://localhost:3001");

export default function GroupChatStudent() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="groupChatBoxHeader">
        <div className="row">
          <i className="fa fa-comments-o fa-2x chatIocn" aria-hidden="true">&nbsp;&nbsp;Group Chat</i>
        </div>
      </div>

      <div className="container chatBox">
        <div className="row text-center groupSeletePanal">
          <div className="col-3 bg-dark text-white detailsPanel"><br/>
            <h5>Group ID</h5>
            <p>RGroup_22</p><br/>

            <h5>Group Members</h5>
            <p>Nimal</p>
            <p>Kumara</p>
            <p>Saman</p>
            <p>Siril</p>
          </div>
          <div className="col-9 p-3 mb-2 bg-light text-dark">
            <div className="d-flex justify-content-center chatBoxAlign">
              {!showChat ? (
                <div className="chatInput"><br/><br/><br/>
                  <h3>Join A Group Chat</h3><br/>
                  <input
                    type="text"
                    placeholder="Name"
                    class="form-control"
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  /><br/>
                  <input
                    type="text"
                    placeholder="Group ID"
                    class="form-control"
                    onChange={(event) => {
                      setRoom(event.target.value);
                    }}
                  /><br/>
                  <button onClick={joinRoom} class="btn btn-outline-info">Join with Group</button>
                </div>
              ) : (
                <Chat socket={socket} username={username} room={room} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="groupChatBoxFooter"></div>
      
    </div>
  );
}
