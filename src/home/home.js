import React, {useState, useEffect} from "react"
import axios from "axios"

const Home = () => {  
  const [daftarMovies, setDaftarMovies] =  useState(null)
  const [input, setInput]  =  useState({title: "", description: "",duration:0,genre:"",rating:0,image:"", id: null})

  useEffect( () => {
    if (daftarMovies === null){
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
      .then(res => {
        setDaftarMovies(res.data.map(el=>{ return {
            id: el.id, 
            title: el.title, 
            description: el.description, 
            duration:el.duration,
             genre: el.genre, 
            rating:el.rating,
            image:el.image}} ))
      })
    }
  }, [daftarMovies])
  
  
  

  const handleChange = (event) =>{
    let typeOfInput = event.target.title

    switch (typeOfInput){
      case "title":
      {
        setInput({...input, title: event.target.value});
        break
      }
      case "description":
      {
        setInput({...input, description: event.target.value});
        break
      }
      case "duration":
      {
        setInput({...input, duration: event.target.value});
        break
      }
      case "genre":
      {
        setInput({...input, genre: event.target.value});
        break
      }
      case "rating":
      {
        setInput({...input, rating: event.target.value});
        break
      }
      case "image":
      {
        setInput({...input, image: event.target.value});
        break
      }
    default:
      {break;}
    }
  }

  const handleSubmit = (event) =>{
    // menahan submit
    event.preventDefault()

    let title = input.title
    let description= input.description
    let duration = input.duration.toString()
    let genre= input.genre
    let rating = input.rating.toString()
    let image= input.image.urlToImage
    

    if (input.id === null){        
      axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title, description,duration,genre,rating,image})
      .then(res => {
          setDaftarMovies([
            ...daftarMovies, 
            { id: res.data.id, 
              title,
              description,
              duration,
              genre,
              rating,
              image, 
            }])
      })
    }else{
      axios.put(`http://backendexample.sanbercloud.com/api/movies/{ID_MOVIES}`, {title, description,duration,genre,rating,image})
      .then(() => {
          let dataMovies = daftarMovies.find(el=> el.id === input.id)
          dataMovies.title = title
          dataMovies.description = description
          dataMovies.duration = duration
          dataMovies.genre = genre
          dataMovies.rating = rating
          dataMovies.image = image
          setDaftarMovies([...daftarMovies])
      })
    }

    // reset input form to default
    setInput({title: "", description: "", duration:0,genre:"",rating:"",image:"", id: null})

  }

  return(
    <section>
      <h1>Daftar Film-Film Terbaik</h1>
        <div>
            {
              daftarMovies !== null && daftarMovies.map((item, index)=>{
                return(                    
                  <tr key={index}>
                    <td>{item.title}</td>
                    <img src={item.image}></img>
                    <td>{item.rating}</td>
                    <td>{item.duration}</td>
                    <td>{item.genre}</td>
                    <td>{item.description}</td>
                  </tr>
                )
              })
            }
        </div>
    </section>
  )
}


export default  Home