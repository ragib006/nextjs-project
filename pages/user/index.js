import Link from "next/link";

function User({myuser}){

   return(

      <>


      {myuser.map((user) =>(   

        <div className="myuser">

        
        <Link href={`/user/${user.id}`}>
        <h3>{user.name}</h3>
        
        </Link>
         
         <p>{user.email}</p>

        </div>



      ))}
      
  
      
      
      </>


   )

}


export async function getServerSideProps(context) {
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()
    

    return {
      props: {

        myuser:data


      }, // will be passed to the page component as props
    }
  }


export default User;