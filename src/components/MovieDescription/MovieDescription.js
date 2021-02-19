import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'; 


const MovieDescription = ({ match, moviesData}) => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        setMovie(moviesData.find((movie) => movie.id === +match.params.id));
      
    }, [])
    return (
        <div>
           <div>
              <h1>{movie.name}</h1>
              <h3>{movie.description}</h3>
           </div>
           <Link to="/">
             <Button variant="info">Go Back</Button>
           </Link> 
        </div>
    )
}

export default MovieDescription
