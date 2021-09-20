
import PropTypes  from "react";
import React from "react";



function Profile ({fullname,bio,profission,handlename,children}) {
     


    return(
  <div>

  {children}

      <p  style = {{color:"grey" , fontSize:"70px" }}   >{fullname}</p>
      <p  style=    {{color:"grey" , fontSize:"70px" }}       >{bio}</p>
      <p  style={{color:"grey" , fontSize:"70px" }} >{profission}</p>
    
<button style={{ border:"none" , 
 backgroundColor:"grey" , color:"orange"
 ,pading:"90px 40px" , textAlign:"center" ,
 display:"inline-block" , fontSize:"30px"

}} 
         onClick={()=>handlename(fullname)}>  who am i ? </button>;

  </div>
    );
};







export default Profile;


Profile.defaultProps = {
  fullName:"unknown",
  bio:"no bio :(",
  profession:"unknown",
  children:"no profile pic"
}

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};