import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "Coding Developer ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="تواصل معنا"
        description="نتيح لك خدمة التواصل مع الفريق الخاص بالشركة لتسهيل تبادل المعلومات"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
