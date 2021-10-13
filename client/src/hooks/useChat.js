import {useEffect, useState, useRef} from 'react'
import socketClient from 'socket.io-client'

const SERVER = "http://localhost:3500";


const useChat = (name) =>{
   
    const socketRef = useRef();
    const [text, setText] = useState("");

    useEffect(()=>{
        socketRef.current = socketClient(SERVER ,{
            withCredentials : true,
            query : name
        })

        socketRef.current.on("message:get", (res)=>{
            setText(text+res);
        })
    },[name])

    const sendMessage = (newText, newMessage)=>{
        
        const ident = socketRef.current.id
        socketRef.current.emit("message:send", {
            body : { newText, newMessage, "id" : ident},
            senderId: socketRef.current.id
        });
    };

    return {text , sendMessage, setText};
}

export default useChat;