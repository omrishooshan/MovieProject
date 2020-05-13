///this BL was designed to fill inside members in members collections-> only for the first activation
const MembersApiDAL = require('./../DAL/MembersApiDAL')


exports.GetMembers = async()=>{
    let Members = await MembersApiDAL.GetMembers()
    let rewMembers = Members.data
    let NewMember={ Name : String,
        Email : String,
        City: String
    }
    let MembersArray=[]
    rewMembers.forEach(m=>{
        NewMember.Name = m.name;
            NewMember.Email = m.email;
            NewMember.City = m.address.city;
  console.log("new member==>",NewMember)  
  MembersArray.push(NewMember)})
return MembersArray
}
