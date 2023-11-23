import React from 'react';
import { useState } from 'react'


function Recommendation(){


    const [movieName, setMovieName] = useState("")
    const [description, setDescription] = useState("")
    const [moviePosterImage, setMoviePosterImage] = useState("")
    

    function handlingSubmittion(event){
        event.preventDefault()
        const recomData = {
            name: movieName,
            description: description,
            url:moviePosterImage

        }

        fetch ("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json", 
            },
            body: JSON.stringify(recomData),
        })
            .then (res => res.json())
            .then(movieData => {
                console.log(movieData);
             })
            .catch(err => {
                console.log(err.message);
            });

    }


    return (
        
        <form className ="RecommendationForm" onSubmit = {handlingSubmittion}>
            <input type = "text" name = "image" value = {moviePosterImage} placeholder = "Poster Image URL" onChange = {(event) => setMoviePosterImage(event.target.value)}/>
            <input type = "text" name = "name" value = {movieName} placeholder = "Movie Name" onChange = {(event) => setMovieName(event.target.value)}/>
            <input type = "text" name = "description" value = {description} placeholder ="Movie Description" onChange = {(event) => setDescription(event.target.value)}/>
            <button type ="submit">Submit</button>
        </form>
        
    );
}

export default Recommendation;