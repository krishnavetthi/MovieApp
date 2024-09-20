import React,{ useState } from "react";

import './App.css'
import Movie from "./features/movie"
import Error from "./features/error";

function App() {

  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchDetails = async () => {
  const moviename = document.getElementById("moviename");
  const movievalue = moviename.value;

  try{
    setIsLoading(true);
    setDetails(null);
    setError('');
    const fetchData = await fetch(
      `https://www.omdbapi.com/?t=${movievalue}&apikey=3313609d`);

    const data = await fetchData.json();
    console.log(data);
    if(data.Error){
      console.log(data, data.Error)
      const error = data;
      setError(error) 
    }else{
      const details = data;
      setDetails(details)
    } 
  }catch(err){
    setError(err)
  }finally{
    setIsLoading(false);
  }
}

  return (
    <div className='align'>
    <h1>Movie App</h1>
    <h2 className="col"> Enter any movie name, to get details</h2>
    <input id="moviename" type="text" className="inputbox" placeholder="Enter the movie name"></input><br/><br/>
    <button onClick={fetchDetails}> Click</button>
    {/* {isLoading ? <>Loading ....</>: error?<>{error} </> : details ? <Movie details={details} /> :<></>}   */}
    {isLoading ? <>Loading ....</>: error?<><Error error={error}></Error> </> : details ? <Movie details={details} /> :<></>}
    </div>
  ) 
}

export default App
