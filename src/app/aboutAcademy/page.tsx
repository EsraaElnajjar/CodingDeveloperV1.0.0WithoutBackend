import AboutSectionOne from "@/components/AboutAcademy/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "اراء العملاء",
  description: "Coding Developer",
  // other metadata
};

const AboutAcademy = () => {
  return (
    <>
      <Breadcrumb
        pageName="عن الاكاديمية"
        description="كل ما يخص الأكاديمية بالاضافه للاراء الخاصة بالطلبة "
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutAcademy;
