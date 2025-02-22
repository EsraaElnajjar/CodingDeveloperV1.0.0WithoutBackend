

import Breadcrumb from "@/components/Common/Breadcrumb";
import { useState } from "react";
import Academy from "@/components/Academy";
import { Metadata } from "next";
import HeroAcademy from "@/components/HeroAcademy";
import Blog from "@/components/Blog";
import Features from "@/components/Features";
import BlogAcademy from "@/components/BlogAcademy";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "Coding Developer ",
  // other metadata
};

const AcademyPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="تواصل معنا"
        description="نتيح لك خدمة التواصل مع الفريق الخاص بالشركة لتسهيل تبادل المعلومات"
      /> */}

      <HeroAcademy/>
      <BlogAcademy/>
      {/* <Features/> */}
    </>
  );
};

export default AcademyPage;
