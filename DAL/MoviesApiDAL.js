const axios = require('axios')

exports.GetMovies=async ()=>{
   return await axios.get('https://api.tvmaze.com/shows')
 
}


