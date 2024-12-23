import React, { useState, useEffect } from "react";
import "./styles/Message.css";
import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import { auth } from "../../firebase";
import FadeIn from "../Animation/FadeIn";

function Message() {
    const [messages, setMessages] = useState([]);
    const [userMessages, setUserMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const db = getFirestore();
        const q = query(collection(db, "messages"), orderBy("timestamp"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messageData = snapshot.docs.map((doc) => doc.data());
            setMessages(messageData);
        });

        return () => unsubscribe();
    }, []);

    const handleMessageSubmit = async (e) => {
        e.preventDefault();

        if (newMessage.trim() === "") {
            return;
        }

        const db = getFirestore();
        const { currentUser } = auth;

        try {
            const newDocRef = await addDoc(collection(db, "messages"), {
                message: newMessage,
                timestamp: new Date(),
                userId: currentUser ? currentUser.uid : "",
            });

            const newMessageData = {
                id: newDocRef.id,
                message: newMessage,
                timestamp: new Date(),
                userId: currentUser ? currentUser.uid : "",
            };

            setMessages((prevMessages) => [...prevMessages, newMessageData]);
            setNewMessage("");
        } catch (error) {
            console.error("Error adding message: ", error);
        }
    };

    return (
      
        <div id="message">
              <FadeIn>
            <div className="message-title">
                <h1>MESSAGE BOARD</h1>
                <p>Welcome to leave suggestions and blessings!</p>
            </div>

            <div className="message-container">
          
                <div className="message-board">
                    <div className="message-list">
                        {messages.map((message) => (
                            <div
                                key={message.timestamp}
                                className="message-item"
                            >
                                <p>{message.message}</p>
                                <span>{new Date(message.timestamp).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleMessageSubmit} className="message-form">
                        <textarea
                            placeholder="Leave a message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <button type="submit">SEND</button>
                    </form>
                </div>

                <div className="user-messages">
                    <div className="user-message-list">
                        {userMessages.map((message) => (
                            <div key={message.id} className="user-message-item">
                                <p>{message.message}</p>
                                <span>{new Date(message.timestamp).toLocaleString()}</span>
                            </div>
                        ))}

                    </div>
                    
                </div>
            
            </div>
            </FadeIn>
        </div>
        
    );
}

export default Message;
