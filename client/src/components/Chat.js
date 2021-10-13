import {useState} from 'react'
import './scss/Chat.scss'
import Panel from './Panel'
import Messages from './Messages';
import useChat from '../hooks/useChat';

export default function Chat (props){

    const {data} = props.location;
    const {name} = data;
    const [message,setMessage] = useState("");
    const {text, sendMessage, setText} = useChat(name);

    const handleSubmit = e =>{
        e.preventDefault()
        let newMessage = name+': '+message+'\n';
        let newText = text+newMessage;
      sendMessage(newText, newMessage)
      document.getElementById("input-mess").value = ""
    }

    const handleChange = e =>{
        
        setMessage(e.target.value)
        console.log(e.target.value)    
    }

        return (
            <div className="chat-panel">
                <div className="row">
                    <h1 className="text-center">Interactuando como {name}</h1>
                    <Panel  text = {text} />
                    <Messages 
                    onChange = {handleChange}
                    onSubmit = {handleSubmit}
                    />
                </div>
            </div>
        );
    
}