import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 4,
    title: "الأكاديمية",
    newTab: false,
    submenu: [
      {
        id: 48,
        title: "الأكاديمية",
        path: "/academy",
        newTab: false,
      },
      {
        id: 41,
        title: "موقع الأكاديمية",
        path: "/location",
        newTab: false,
      },
      {
        id: 42,
        title: "تواصل معنا",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "حجز الدبلومات",
        path: "/enrollCourse",
        newTab: false,
      },
      {
        id: 44,
        title: "أراء الطلاب",
        path: "/aboutAcademy",
        newTab: false,
      },
      {
        id: 45,
        title: "محاضرى الأكاديمية",
        path: "/enrollCourse",
        newTab: false,
      },
      {
        id: 46,
        title: "الشهادات فى الأكاديمية",
        path: "/enrollCourse",
        newTab: false,
      },
      {
        id: 47,
        title: "معرض الطلبة",
        path: "/gallery",
        newTab: false,
      },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
 
 
  {
    id: 3,
    title: "تواصل معنا",
    path: "/contact",
    newTab: false,
  },
  
  {
    id: 2,
    title: "اراء العملاء",
    path: "/about",
    newTab: false,
  },
   
  {
    id: 33,
    title: "الخدمات",
    path: "/blog",
    newTab: false,
  },
  {
    id: 1,
    title: "الرئيسية",
    path: "/",
    newTab: false,
  },
];
export default menuData;
