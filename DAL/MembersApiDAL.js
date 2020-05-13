let axios = require('axios')

exports.GetMembers = async()=>{
   return await axios.get('https://jsonplaceholder.typicode.com/users')
  
}

