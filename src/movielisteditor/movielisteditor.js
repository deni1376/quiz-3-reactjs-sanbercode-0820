import React, {useState, useEffect} from "react"
import axios from "axios"
import "./movielisteditor.css"

const MovieListEditor = () => {  
  const [daftarMovies, setDaftarMovies] =  useState(null)
  const [input, setInput]  =  useState({title: "", description: "", year:2020,duration:120,genre:"",rating:0,image:"", id: null})

  useEffect( () => {
    if (daftarMovies === null){
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
      .then(res => {
        setDaftarMovies(res.data.map(el=>{ return {
            id: el.id, 
            title: el.title, 
            description: el.description, 
            year:el.year, 
            duration:el.duration,
             genre: el.genre, 
            rating:el.rating,
            image:el.image}} ))
      })
    }
  }, [daftarMovies])
  
  const handleDelete = (event) => {
    let idDataMovies = parseInt(event.target.value)

    let newdaftarMovies = daftarMovies.filter(el => el.id !== idDataMovies)

    axios.delete(`http://backendexample.sanbercloud.com/api/movies/{ID_MOVIES}`)
    .then(res => {
      console.log(res)
    })
          
    setDaftarMovies([...newdaftarMovies])
    
  }
  
  const handleEdit = (event) =>{
    let idDataMovies = parseInt(event.target.value)
    let dataMovies = daftarMovies.find(x=> x.id === idDataMovies)
    setInput({title: dataMovies.title, 
             description: dataMovies.description,
              year: dataMovies.year,
              duration: dataMovies.duration,
              genre:dataMovies.genre,
              rating:dataMovies.rating,
              image:dataMovies.image,
               id: idDataMovies})
  }

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
      case "year":
      {
        setInput({...input, year: event.target.value});
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
    let year = input.year.toString()
    let duration = input.duration.toString()
    let genre= input.genre
    let rating = input.rating.toString()
    let image= input.image
    

    if (input.id === null){        
      axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title, description, year,duration,genre,rating,image})
      .then(res => {
          setDaftarMovies([
            ...daftarMovies, 
            { id: res.data.id, 
              title,
              description,
              year,
              duration,
              genre,
              rating,
              image, 
            }])
      })
    }else{
      axios.put(`http://backendexample.sanbercloud.com/api/movies/{ID_MOVIES}`, {title, description,year,duration,genre,rating,image})
      .then(() => {
          let dataMovies = daftarMovies.find(el=> el.id === input.id)
          dataMovies.title = title
          dataMovies.description = description
          dataMovies.year = year
          dataMovies.duration = duration
          dataMovies.genre = genre
          dataMovies.rating = rating
          dataMovies.image = image
          setDaftarMovies([...daftarMovies])
      })
    }

    // reset input form to default
    setInput({title: "", description: "", year: 0, duration:0,genre:"",rating:"",image:"", id: null})

  }

  return(
    <section>
      <h1>Daftar Film</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
              daftarMovies !== null && daftarMovies.map((item, index)=>{
                return(                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.year}</td>
                    <td>{item.duration}</td>
                    <td>{item.genre}</td>
                    <td>{item.rating}</td>
                    <td>
                      <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
      {/* Form */}
      <h1>Movie Form</h1>

      <div style={{width: "50%", margin: "0 auto", display: "block"}}>
        <div style={{border: "1px solid #aaa", padding: "20px",backgroundColor:"white"}}>
          <form onSubmit={handleSubmit}>
            <label style={{float: "left"}}>
              Title:
            </label>
            <input style={{float: "right"}} type="text" required title="title" value={input.title} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Description:
            </label>
            <textarea style={{float: "right"}} type="text" required description="description" value={input.description} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Year:
            </label>
            <input style={{float: "right"}} type="number"  required year="year" value={input.year} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Duration:
            </label>
            <input style={{float: "right"}} type="number" required duration="duration" value={input.duration} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Genre:
            </label>
            <input style={{float: "right"}} type="text" required genre="genre" value={input.genre} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Rating:
            </label>
            <input style={{float: "right"}} type="number" required rating="rating" value={input.rating} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Image Url:
            </label>
            <textarea style={{float: "right",width:"250px", height:"24px"}} type="text" required image="image" value={input.image} onChange={handleChange}/>
            <br/>
            <br/>
            <div style={{width: "100%", paddingBottom: "20px"}}>
              <button style={{ float: "center",fontSize:"15px"}}>submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}



export default  MovieListEditor