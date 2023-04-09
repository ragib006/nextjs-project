import { useRouter } from "next/router";


function Blogdetails(){

    const router = useRouter();

    const myblogid = router.query.blogid;

    return(
  
      <>
      
        <h1>This is {myblogid} number Blog details Page</h1>
  
       
      
      
      </>
  
  
  
    )
  
  
  
  }
  
  
  export default Blogdetails;