import { useEffect } from "react"



function Recommendation(){


    const [movieName, setMoviewName] = useState("")
    const [description, setDescription] = useState("")
    const [recommendListData, setRecommendListData] = useState([])

    function handlingSubmittion(event){
        event.preventDefault()
        const recomData = {
            name: movieName,
            description: description

        }

        fetch ("http://.......................", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json", 
            },
            body: JSON.stringify(recomData),
        })
            .then (res => res.json)
            .then((movieData) => {
                console.log(movieData);
             })
            .catch((err) => {
                console.log(err.message);
            });

    }

    useEffect(() => {
        fetch('http:....recommenList')
          .then((r) => r.json())
          .then((data) => setRecommendListData(data))
    
      }, [])

    return (
        <>
        <form className ="RecommendationForm" onSubmit = {handlingSubmittion}>
            <input type = "text" name = "name" value = {movieName} onChange = {(event) => setMoviewName(event.target.value)}/>
            <input type = "text" name = "description" value = {description} onChange = {(event) => setDescription(event.target.value)}/>
        </form>
        <div>
            <h2>{recommendListData.name}</h2>
            <p>{recommendListData.description}</p>
        </div>
        </>
    )
}

export default Recommendation;