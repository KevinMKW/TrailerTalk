import { Box, Card, CardContent, CardMedia, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Home = () => {

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
        <div>
            <Grid container spacing={2}>
                {movies.map((movie) => {
                return <Grid item xs={3}>
                    <Box>
                        <Card>
                            <CardMedia 
                            component="img"
                            height="140"
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>

                            </CardMedia>
                            <CardContent>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            })}
            </Grid>
            
        </div>
    );
}

export default Home;
