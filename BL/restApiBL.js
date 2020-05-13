///this BL was designed to fill inside members in members collections-> only for the first activation
const MembersApiDAL = require('./../DAL/MembersApiDAL')


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
