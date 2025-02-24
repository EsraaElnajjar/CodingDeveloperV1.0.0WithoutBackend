"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import Image from "next/image";

const EnrollCourse = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Create preview URL
    }
  };

  const handleEnroll = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    if (!selectedImage) {
      Swal.fire({
        title: "خطأ!",
        text: "يرجى رفع صورة الدفع الالكترونى قبل التسجيل",
        icon: "error",
        confirmButtonText: "حسنًا",
        background: isDarkMode ? "#2C303B" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        customClass: {
          popup: "dark:border-gray-600 dark:bg-gray-800 dark:text-white",
          title: "dark:text-white",
          confirmButton: "dark:bg-gray-700 dark:text-white dark:border-gray-500",
        },
      });
      return;
    }



    Swal.fire({
      title: "تم التسجيل بنجاح!",
      text: "لقد تم حجز الكورس بنجاح، سنتواصل معك قريبًا.",
      icon: "success",
      confirmButtonText: "حسنًا",
      background: isDarkMode ? "#2C303B" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      customClass: {
        popup: "dark:border-gray-600 dark:bg-gray-800 dark:text-white",
        title: "dark:text-white",
        confirmButton: "dark:bg-gray-700 dark:text-white dark:border-gray-500",
      },
    });
  };

  return (
    <section
      style={{ direction: "rtl" }}
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28"
    >
      <div style={{ marginTop: "30px" }} className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12 xl:w-6/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                تسجيل في الدورة التدريبية
              </h2>
              <p className="mb-6 text-base font-medium text-body-color">
                يرجى ملء النموذج التالي للتسجيل في الدورة التدريبية
              </p>

              <form>
                <div className="-mx-4 flex flex-wrap">
                  {/* Fixed Course Name */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                        اسم الدورة
                      </label>
                      <input
                        type="text"
                        value="كورس FullStack"
                        readOnly
                        className="border-stroke w-full cursor-not-allowed rounded-sm border bg-gray-200 px-4 py-3 text-base text-body-color outline-none dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Name Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-dark dark:text-white"
                      >
                        الاسم
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="أدخل اسمك"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-dark dark:text-white"
                      >
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Number Field */}
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-dark dark:text-white"
                      >
                        رقم الهاتف
                      </label>
                      <input
                        style={{ direction: "rtl" }}
                        type="tel"
                        id="phone"
                        placeholder="أدخل رقم هاتفك"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  {/* Upload Image Field */}
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="imageUpload"
                        className="mb-2 block text-sm font-medium text-dark dark:text-white"
                      >
                        رفع صورة
                      </label>
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none focus:border-primary dark:bg-[#2C303B] dark:text-white"
                      />
                      {selectedImage && (
                        <div className="w-full px-4 md:w-1/2">
                          <div className="mb-6">
                           
                            
                          </div>
                        </div>

                      )}
                    </div>
                  </div>

                  {/* Button in the right */}
                  <div className="w-full px-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleEnroll}
                      className="rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      تسجيل
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollCourse;
