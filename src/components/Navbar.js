import React, { useEffect, useState } from 'react';
import netflix from '../images/netflix_logo.png'
import { Button } from '@mui/material';

const Navbar = () => {

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

    useEffect(()=>{getMovies()},[])

    return (
        <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movies[1]?.poster_path})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"500px",width:"100%"}}>
            <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
                <img alt='Netflix logo' style={{width:"90px",height:"70px"}} src={netflix}/>
                <Button color='error' variant='contained' sx={{height:'40px'}}>SignIn</Button>
            </div>
            <div style={{padding:'20px'}}>
                <h1 style={{color:"#f1f1f1", fontSize:'70px',fontFamily:'initial'}}>{movies[1]?.original_title}</h1>
                <h4 style={{color:'#f1f1f1'}}>{movies[1]?.overview}</h4>
            </div>
            <Button variant='contained' sx={{color:'black',bgcolor:'white'}}>View Trailer</Button>
        </div>
    );
}

export default Navbar;
