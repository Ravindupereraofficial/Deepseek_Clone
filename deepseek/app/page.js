
'use client';
import { assets } from "@/assets/assets";
import { useState } from "react";
import Image from "next/image";


export default function Home() {
  const [expand,setExpand] = useState(false)
  const [messages,setMessages] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  return (
   <div>
    <div className="flex h-screen">
    <div>
      <div>
        <Image className="rotate-180" src={assets.menu_icon} alt=""/>
        <Image className="opacity-70" src={assets.chat_icon} alt=""/>
      </div>
    </div>
    </div>
   </div>
  );
}
