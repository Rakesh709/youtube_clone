"use client"

import { useEffect } from "react";

function Page() {
    
    useEffect(()=>{
        console.log("Where im rendering");
    },[])
  return (
    <div>This is Feed Page</div>
  )
}

export default Page;

// useEffect excusively run on client 