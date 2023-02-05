import {useState,useEffect} from 'react'
import bus from '../api/bus'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import styles from './Message.module.css'

import {BiError} from 'react-icons/bi'
import {HiEmojiSad} from 'react-icons/hi'
import {HiEmojiHappy} from 'react-icons/hi'

function Message(){
    const [visibility,setVisibility] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    useEffect(()=>{
        bus.addListener('flash',({message,type})=>{
            setVisibility(true)
            setMessage(message)
            setType(type)
            setTimeout(()=>{
                setVisibility(false)
            },4000)
        })
    },[])
    if(type.error){
        console.log(type.error)
    }

    return(
       

       visibility &&(
        <>

            <div id='div-msg' className={`${styles.message} ${styles[type]}`}>
            <span id='emoji-sad'>
                <HiEmojiSad  />
                </span>
                <span2 id='emoji-happy'>
                    <HiEmojiHappy />
                </span2>
                <Alert.Heading>
               
                    {message}
                </Alert.Heading>
            </div>
         
            </>
            )

            
    )
}

export default Message