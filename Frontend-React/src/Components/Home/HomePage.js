
import React from 'react';


import { useHistory } from 'react-router-dom';

import '../../App.css';


//used to display homepage
const Homepage = () => {
   const history = useHistory();

   


   //used to handle Mouse Over Event
   const handleMouseOver = () => {

     

   };


   //used to Handle Mouse Out Event
   const handleMouseOut = () => {

      

   };

   return (



      <div >
         
         <h1>WELCOME TO SHARE RIDE</h1>
         
         
         
         <div className="taxi">
            {/* used to start the web page operations */}
            <button onClick={() => history.push("/nav")}>Naviagte to Home page</button>
         </div>
         
      </div>
   )

}
//exporting home page
export default Homepage;