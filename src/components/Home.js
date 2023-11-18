import React, { useEffect } from 'react';

const Home = () => {

    const getMovies = () => {
        try{
            fetch("https://api.themoviedb.org/3/discover/movie?api_key=769ee3e8678ca9401b066ed3ef16424a")
            .then(res => res.json())
            .then(json => console.log(json.results))
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(()=>{getMovies()},[])

    return (
        <div>
            Home
        </div>
    );
}

export default Home;
