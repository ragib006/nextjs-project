import { useRouter } from "next/router";

function Blogdetails(){

    const router = useRouter();

    const {blogid} = router.query;

    return(
 
      <>  
        
        <h1>This is {blogid} Number Blog Details Page</h1>
        
    
      
      </>
 
 
    )
 
 
 }
 
 
 export default Blogdetails;