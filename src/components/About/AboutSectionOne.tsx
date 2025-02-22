import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Testimonials from "../Testimonials";
import SingleTestimonial from "../Testimonials/SingleTestimonial";
import { Testimonial } from "@/types/testimonial";

// const checkIcon = (
//   <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
//     <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
//   </svg>
// );

const AboutSectionOne = () => {
  const testimonialData: Testimonial[] = [
    {
      id: 1,
      name: "أحمد سامى منصف",
      designation: "مدير ادارة الشارق للخدمات",
      content:
        "تتميز هذة الشركة بعدد كبير من المبرمجيين المحترفين والذين يقدمون الخدمات البرمجية والتقنية على درجة عاليه من الاحترافية",
      image: "/images/testimonials/auth-01.png",
      star: 3,
    },
    {
      id: 2,
      name: "أحمد سامى منصف",
      designation: "مدير ادارة الشارق للخدمات",
      content:
        "تتميز هذة الشركة بعدد كبير من المبرمجيين المحترفين والذين يقدمون الخدمات البرمجية والتقنية على درجة عاليه من الاحترافية",
      image: "/images/testimonials/auth-02.png",
      star: 5,
    },
    {
      id: 3,
      name: "أحمد سامى منصف",
      designation: "مدير ادارة الشارق للخدمات",
      content:
        "تتميز هذة الشركة بعدد كبير من المبرمجيين المحترفين والذين يقدمون الخدمات البرمجية والتقنية على درجة عاليه من الاحترافية",
      image: "/images/testimonials/auth-03.png",
      star: 5,
    },
    {
        id: 4,
        name: "محمد عبد الرحمن",
        designation: "مدير شركة التقنية المتطورة",
        content: "شركة متميزة في تقديم الحلول البرمجية، يتميز فريقها بالاحترافية وسرعة الاستجابة.",
        image: "/images/testimonials/auth-01.png",
        star: 5
      },
      {
        id: 5,
        name: "نجلاء مصطفى",
        designation: "رئيس قسم تكنولوجيا المعلومات - الشارقة",
        content: "فريق عمل رائع وخدمة عملاء ممتازة. تعامل احترافي وسرعة في التنفيذ.",
        image: "/images/testimonials/auth-02.png",
        star: 4
      },
      {
        id: 6,
        name: "أحمد سامى منصف",
        designation: "مدير ادارة الشارق للخدمات",
        content: "تتميز هذه الشركة بعدد كبير من المبرمجين المحترفين الذين يقدمون الخدمات البرمجية والتقنية بدرجة عالية من الاحترافية.",
        image: "/images/testimonials/auth-03.png",
        star: 5
      },
      {
        id: 7,
        name: "ليلى خالد",
        designation: "مسؤولة المشاريع الرقمية - شركة الإبداع",
        content: "الشركة تقدم حلولًا تقنية متكاملة تناسب احتياجات عملائنا. فريق الدعم متعاون جدًا.",
        image: "/images/testimonials/auth-02.png",
        star: 5
      },
      {
        id: 8,
        name: "سامي محمود",
        designation: "مدير العمليات - مؤسسة المستقبل",
        content: "تعامل احترافي وخدمات برمجية عالية الجودة. أنصح بالتعامل معهم.",
        image: "/images/testimonials/auth-02.png",
        star: 4
      },
       {
        id: 9,
        name: "أحمد سامى منصف",
        designation: "مدير ادارة الشارق للخدمات",
        content:
          "الشركة تقدم حلولًا تقنية متكاملة تناسب احتياجات عملائنا. فريق الدعم متعاون جدًا",
        image: "/images/testimonials/auth-02.png",
        star: 5,
      },
    
    
  ];
  // const List = ({ text }) => (
  //   <p className="mb-5 flex items-center text-lg font-medium text-body-color">
  //     <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
  //       {checkIcon}
  //     </span>
  //     {text}
  //   </p>
  // );

  return (
    // <section id="about" className="pt-16 md:pt-20 lg:pt-28">
    //   <div className="container">
    //     <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
    //       <div className="-mx-4 flex flex-wrap items-center">
    //         <div className="w-full px-4 lg:w-1/2">
    //           <SectionTitle
    //             title="Crafted for Startup, SaaS and Business Sites."
    //             paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
    //             mb="44px"
    //           />

    //           <div
    //             className="mb-12 max-w-[570px] lg:mb-0"
    //             data-wow-delay=".15s"
    //           >
    //             <div className="mx-[-12px] flex flex-wrap">
    //               <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
    //                 <List text="Premium quality" />
    //                 <List text="Tailwind CSS" />
    //                 <List text="Use for lifetime" />
    //               </div>

    //               <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
    //                 <List text="Next.js" />
    //                 <List text="Rich documentation" />
    //                 <List text="Developer friendly" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="w-full px-4 lg:w-1/2">
    //           <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
    //             <Image
    //               src="/images/about/about-image.svg"
    //               alt="about-image"
    //               fill
    //               className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
    //             />
    //             <Image
    //               src="/images/about/about-image-dark.svg"
    //               alt="about-image"
    //               fill
    //               className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // <Testimonials/>
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="رأى العملاء عن الشركة"
          paragraph="ان اراء العملاء الايجابيه هى غايتنا وهدفنا الاساسى لتحقيق النفع للعميل ونيل رضاهم"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
      </section>
      );
};

      export default AboutSectionOne;
