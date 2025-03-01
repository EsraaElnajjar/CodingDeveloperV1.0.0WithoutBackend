
"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useState } from "react";
import Academy from "@/components/Academy";
//import { Metadata } from "next";
import HeroAcademy from "@/components/HeroAcademy";
import dynamic from "next/dynamic";
import Blog from "@/components/Blog";
import Features from "@/components/Features";
import BlogAcademy from "@/components/BlogAcademy";
import React from "react";
import Testimonials from "@/components/Testimonials";




const AcademyPage = () => {
 
  
  
  return (
    <>
      {/* <Breadcrumb
        pageName="تواصل معنا"
        description="نتيح لك خدمة التواصل مع الفريق الخاص بالشركة لتسهيل تبادل المعلومات"
      /> */}

      <HeroAcademy/>
      
      
      {/* <Features/> */}
     
          <BlogAcademy/>
          {/* <Features /> */}
      
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
    </>
  );
};

export default AcademyPage;
