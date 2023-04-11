function Product({posts}){

   return(

      <>

   
<div class="blog">

{posts.map((post) => (
        
        <div class="post">
        
          <h3>{post.title}</h3>
          <span>{post.body}</span>
        
        </div>
     
      ))}


</div>
    
      </>


   )


}


export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }


export default Product;