'use client';

import Script from 'next/script';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "백승연",
    "alternateName": "Seungyeon Baek",
    "jobTitle": "프론트엔드 개발자",
    "description": "React, Next.js, TypeScript를 활용한 프론트엔드 개발자",
    "url": "https://qorbaxk.github.io/findsy/",
    "image": "https://qorbaxk.github.io/findsy/images/me.webp",
    "email": "qorbaxk97@gmail.com",
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
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "프론트엔드 개발자 백승연 포트폴리오",
    "url": "https://qorbaxk.github.io/findsy/",
    "description": "프론트엔드 개발자 백승연의 포트폴리오 사이트",
    "author": {
      "@type": "Person",
      "name": "백승연"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://qorbaxk.github.io/findsy/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  );
} 