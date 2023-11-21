import React from 'react';
import {signInWithPopup} from "firebase/auth"
import { Button } from '@mui/material';
import netflix from "../images/netflix_logo.png"
import { auth, googleAuth } from '../firebase/setup';

const Signin = () => {

    const googleSignin = async()=>{
        try{
            await signInWithPopup(auth,googleAuth)
        }catch(err){
            console.error(err)
        }
        
    }

    console.error(auth.currentUser)

    return (
        <div style={{backgroundColor:"#181818",height:"100vh",padding:"20px"}}>
            <img style={{width:"100px",height:"80px"}} alt='netflix logo' src={netflix}/>
            <div style={{position:"fixed",left:"45%",top:"35%"}}>
                <Button onClick={googleSignin} variant='contained' color='error'>SignIn</Button>
                <h2 style={{color:"#fff"}}>Let's start <br/>to explore movies<br/> from here</h2>
            </div>
            
        </div>
    );
}

export default Signin;
