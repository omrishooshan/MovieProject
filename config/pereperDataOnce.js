const restApiBL= require('../BL/restApiBL')
const Member = require('../Model/membersModel')

exports.GetMembers=async ()=>{
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


