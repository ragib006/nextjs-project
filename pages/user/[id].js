function Userdetails({userinfo}){

   return(
        
    <>
    
       <h3>{userinfo.name}</h3>
        <p>{userinfo.email}</p>
    
    
    
    
    </>




   )




}



export async function getServerSideProps(context) {

     const {params} = context;

         
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()


    return {
      props: {

        userinfo:data

      }, // will be passed to the page component as props
    }
  }


export default Userdetails;