"use client";
import { useState } from "react";
import Features from "../Features";
import ScrollUp from "../Common/ScrollUp";
import Hero from "../Hero";
import Blog from "@/app/blog/page";


const Academy = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
    <ScrollUp />
    <Hero/>
    <Blog />
    <Features/>
    </> 
    
        
       
  );
};

export default Academy;
