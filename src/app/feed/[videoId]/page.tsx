

interface PageProps{
    params:Promise<{videoId:string}>;
}

const Page = async ({params}:PageProps) => {
    const {videoId} = await params;
    console.log("where i am rendering")
  return (
    <div>The video id is {videoId} </div>
  )
}

export default Page


// this is for the server componet 
//use client for client side and doesn't have async
//server rendering makin db call and render the component and fast
//https://nextjs.org/docs/messages/sync-dynamic-apis : refer for dynamic route