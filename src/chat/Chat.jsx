import { useState } from "react";
import axios from "axios";
import { MdMessage } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { IoMdSend } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import "./chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;

  const urlInput = 'http://localhost:3000/api/chats/chat';

  const handleUserInput = async () => {
    if (input.trim() === "" || charCount > maxChars) {
      return;
    }

    const currentTime = new Date().toLocaleTimeString();

    try {
      const response = await axios.post(urlInput, { message: input });
      const responseData = response.data;
      const newChatHistory = [...chatHistory, { role: "user", content: input, time: currentTime }];

      if (responseData && responseData.response) {
        newChatHistory.push({ role: "system", content: responseData.response, time: currentTime });
      }

      setChatHistory(newChatHistory);
      setInput("");
      setCharCount(0);
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al enviar el mensaje. Por favor, inténtalo nuevamente.");
    }
  };

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= maxChars) {
      setInput(inputText);
      setCharCount(inputText.length);
    }
  };

  const toggleChat = () => {
    setExpanded(!expanded);
    const chatContainer = document.querySelector(".chat-container");
    chatContainer.classList.toggle("show");
  };

  return (
      <div className={`chat-container ${expanded ? 'show' : ''}`}>
        <div className="chat-bubble" onClick={toggleChat}>
          {expanded ? (
            <CgClose className="chat-icon" />
          ) : (
            <MdMessage className="chat-icon" />
          )}
        </div>
        <div className="chat-header">
          <h2>Chat Bot</h2>
        </div>
        <div className="chat-history">
          {chatHistory.map((message, index) => (
            <div key={index} className={`message ${message.role}`}>

              {message.role === "user" ? (
                <>
                  <div className="message-content user-content">
                    <div>{message.content}</div>
                    <div className="message-time">{message.time}</div>
                  </div>
                  <FaRegUserCircle className="icon-user" />
                </>
              ) : (
                <>
                  <div className="message-content bot-content">
                    <div>{message.content}</div>
                    <div className="message-time">{message.time}</div>
                  </div>
                  <FaRobot className="icon-bot" />
                </>
              )}
            </div>
          ))}
        </div>
        <div className="chat-input-wrapper">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Escribe un mensaje..."
            className="chat-input"
          />
          <div className="char-counter">{charCount}/{maxChars}</div>
          <button className="send" onClick={handleUserInput} disabled={input.trim() === ""}>
            <IoMdSend />
          </button>
        </div>
      </div>
  );
}

export default Chat;