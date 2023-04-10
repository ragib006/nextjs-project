import { useRouter } from "next/router";

function Commentdetails(){

    const router = useRouter();

    const {blogid, commentid} = router.query;

    return(
 
      <>  
        
        <h1>Blog id {blogid} and {commentid} number comment details page</h1>
        
    
      
      </>
 
 
    )
 
 
 }
 
 
 export default Commentdetails;