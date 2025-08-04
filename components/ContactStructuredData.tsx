'use client';

import Script from 'next/script';

export default function ContactStructuredData() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "프론트엔드 개발자 백승연 연락처",
    "description": "프론트엔드 개발자 백승연과 연락하세요. React, Next.js, TypeScript 전문 개발자입니다.",
    "url": "https://qorbaxk.github.io/findsy/contact",
    "mainEntity": {
      "@type": "Person",
      "name": "백승연",
      "alternateName": "Seungyeon Baek",
      "jobTitle": "프론트엔드 개발자",
      "description": "React, Next.js, TypeScript를 활용한 프론트엔드 개발자",
      "email": "qorbaxk97@gmail.com",
      "image": "https://qorbaxk.github.io/findsy/images/me.webp",
      "knowsAbout": [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "웹 개발",
        "프론트엔드 개발"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "프리랜서"
      },
      "sameAs": [
        "https://github.com/qorbaxk"
      ]
    }
  };

  return (
    <Script
      id="contact-page-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(contactPageSchema)
      }}
    />
  );
} 