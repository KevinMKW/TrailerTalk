import React, { useEffect, useState } from 'react';
import netflix from '../images/netflix_logo.png'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()

    const [movies,setMovies] = useState([]);

    const getMovies = () => {
        try{
            fetch("https://api.themoviedb.org/3/discover/movie?api_key=769ee3e8678ca9401b066ed3ef16424a")
            .then(res => res.json())
            .then(json => setMovies(json.results))
        } catch(err) {
            console.log(err)
        }
    }

    const signinClick = ()=>{
        navigate("/signin")
    }

    useEffect(()=>{getMovies()},[])

    return (
        <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movies[6]?.poster_path})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover", height:'100%',width:"100%"}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',margin:"0px",padding:'20px'}}>
                <img alt='Netflix logo' style={{width:"70px",height:"70px"}} src={netflix}/>
                <Button onClick={signinClick} color='error' variant='contained' sx={{height:'30px'}}>SignIn</Button>
            </div>
            <div style={{padding:'20px'}}>
                <h1 style={{color:"#f1f1f1", fontSize:'70px',fontFamily:'initial'}}>{movies[6]?.original_title}</h1>
                <h4 style={{color:'#f1f1f1'}}>{movies[1]?.overview}</h4>

                <Button onChange={signinClick} variant='contained' sx={{color:'black',bgcolor:'white',fontWeight:'bold'}}>View Trailer</Button>
            </div>
            
        </div>
    );
}

export default Navbar;
