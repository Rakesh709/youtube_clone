"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image";


export default function Home() {
  return (
      <div>
        <Image src="/logo.svg" height={50} width={50} alt="logo"/>
        <p className="text-xl font-semibold">This is NewTube</p>
      </div>
    
  );
}
