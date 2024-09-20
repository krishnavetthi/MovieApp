import React from "react";


const Movie = ({details}) =>{
 
    return (
      <>
        <h2> Movie Title : {details.Title}</h2>
        <h3> Released Year : {details.Year}</h3>
        <h3> Language : {details.Language}</h3>
        <h3> Writer : {details.Writer}</h3>
        <h3>Director : {details.Director}</h3>
        <h3> IMDB Rating : {details.imdbRating}</h3>
      </>
    );
  
}
  export default Movie;
