///this BL was designed to fill inside members in members collections-> only for the first activation
const MembersApiDAL = require('./../DAL/MembersApiDAL')
const MoviesApiDAL = require('./../DAL/MoviesApiDAL')

exports.GetMembers = async ()=>{
    let Members = await MembersApiDAL.GetMembers()
    let rewMembers = Members.data
  
    
    let MembersArray=[]
      
      rewMembers.forEach(m=>{

      })



    rewMembers.forEach((m)=>{

        let NewMember={ Name : m.name,  
                     Email : m.email,
           City : m.address.city}

  MembersArray.push(NewMember)}
  )
  
return  MembersArray
}


exports.GetMovies = async()=>{
    let rewMoviesData = await MoviesApiDAL.GetMovies()
     let movies = rewMoviesData.data
moviesArray =[]
movies.forEach(m=>{
    let newMovie={
        Name : m.name,
        Genres : m.genres,
        Image : m.url,
        Permiered : m.premiered
    }
    moviesArray.push(newMovie)
})
return moviesArray
}
