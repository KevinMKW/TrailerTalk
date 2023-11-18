import React, { useEffect, useState } from 'react';

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

    console.log(movies[0])

    return (
        <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${movies[1]?.poster_path})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"400px",width:"100%"}}>
        </div>
    );
}

export default Navbar;
