const restApiBL= require('../BL/restApiBL')
const Member = require('../Model/membersModel')
const Movie = require('../Model/moviesModel')
const axios = require('axios')


//check if empty movies db
let check_isempty_MoviesDB=async()=>{
let count= await axios.get('http://localhost:8000/api/movies/count')
let number =count.data
return number
}


//chek if empty members db
let check_isempty_MembersDB = async()=>{
    let count = await axios.get('http://localhost:8000/api/members/count')
    let number =count.data
    return number
}

exports.GetMembers=async ()=>{
let count=await check_isempty_MembersDB()

    if(count==0){
let members =await restApiBL.GetMembers()

members.forEach(m=>{
    let NewMember=new Member({ Name : m.Name,
        Email : m.Email,
        City: m.City
    })
    NewMember.save(function(err){
        if(err){
            console.log(err)
        }
        else{
            console.log('data saved!')
        }
    })
   
})
    }
}

exports.GetMovies=async()=>{
    let count =await check_isempty_MoviesDB()
    
    if(count == 0){
    let movies =await restApiBL.GetMovies()
    movies.forEach(m=>{
        let newMovie = new Movie({
            Name : m.Name,
            Genres : m.Genres,
            Image : m.Image,
            Permiered : m.Permiered
        })
        newMovie.save(function(err){
            if (err){
                console.log(err)
            }
            else{
                console.log("movie saved")
            }
        })
    })
}
}





