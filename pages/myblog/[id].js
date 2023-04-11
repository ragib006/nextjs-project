function BlogDetails({data}){

   return(
    
    <>
       
       <h3>{data.title}</h3>

       <p>{data.body}</p>
    
    
    </>


   )


}


export async function getStaticProps(context) {

    const {params} = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const posts = await res.json()

    return {
      props: {
       
        data:posts


      }, // will be passed to the page component as props
    }
  }



  
export async function getStaticPaths() {
    // When this is true (in preview environments) don't
    // prerender any static pages
    // (faster builds, but slower initial page load)
   // if (process.env.SKIP_BUILD_STATIC_GENERATION) {
     // return {
     //   paths: [],
     //   fallback: 'blocking',
    //  }
    //}
  
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths = posts.map((post) => ({
      params: { id: `${post.id}` },
    }))
  
    // { fallback: false } means other routes should 404
    return { paths, fallback: false }
  }




export default BlogDetails;