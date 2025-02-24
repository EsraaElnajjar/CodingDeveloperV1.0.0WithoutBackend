"use client";



const Location = () => {
  return (
    <div style={{marginTop:"50px"}} className="flex flex-col items-center justify-center min-h-screen  p-4">
      <h1 className="text-3xl font-bold text-center mb-4">موقعنا الحالى</h1>
      <div className="w-full max-w-4xl h-96 border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093705!2d31.1816275!3d30.4730438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzAlNDcnNTMuMSJOIDMxJzEwJzU0LjEiRQ!5e0!3m2!1sen!2sus!4v1614135585795!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-6 text-center">
        <p className="text-lg font-medium">: زوروا موقعنا</p>
        <p className="text-gray-700">بنها الجديدة ش سعد الشهير بالفلاحين ومتفرع من شارع المرور</p>
      </div>
    </div>
  );
};

export default Location;