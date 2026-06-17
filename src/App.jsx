import Caring from "./componets/Caring"
import Client from "./componets/Client"
import Design from "./componets/Design"
import Eu from "./componets/Eu"
import Foooter from "./componets/Foooter"
import Header from "./componets/Header"
import Helping from "./componets/Helping"
import Mange from "./componets/Mange"
import Three from "./componets/Three"
import Tim from "./componets/Tim"


function App() {
 return(
  <div className="overflow-hidden">

    <Header/>
     <Client />
     <Mange />
     <Three />
    <Helping/>
    
   
    
     
    <Design/>
    <Tim/>
    
    <Caring/>
     <Eu />
    <Foooter/>
    
  </div>
 )
}

export default App
