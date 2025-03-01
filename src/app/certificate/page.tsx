'use client';
import Image from 'next/image';

export default function CertificatePage() {
  return (
    <div className="ml-48 justify-center mt-20">
      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg max-w-3xl">
        <Image
          src="/images/logo/cer2.jpg" 
          alt="Company Certificate"
          width={1100}
          height={900}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
