
import './App.css';
import Profile from './components/ProfileComponenet';

function App() {


const handlename = (fullname) => alert(fullname);

  return (
    <div    style = {{backgroundColor:"black"}}  className="App">
     <h2  style= {{color:'orange'}}>react-props-checkpoint </h2>
   
  
     
     
     <Profile
     


     handlename={handlename}

     fullname="firas" 
     
     bio="gomycode"

     profission="full stack dev"
     
     >
   
      <img src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="img"   /> 

     </Profile>

     


    </div>
  );
}


export default App;
