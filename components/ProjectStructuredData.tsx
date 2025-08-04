'use client';

import Script from 'next/script';

export default function ProjectStructuredData() {
  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "프론트엔드 개발자 백승연의 프로젝트 포트폴리오",
    "description": "React, Next.js, TypeScript를 활용한 다양한 웹 개발 프로젝트 경험",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "강북삼성병원 웹예약 시스템",
          "description": "차세대 건강검진 예약 시스템 개발",
          "url": "https://qorbaxk.github.io/findsy/projects",
          "image": "https://qorbaxk.github.io/findsy/images/projects/kbsmc.webp",
          "dateCreated": "2024-06",
          "dateModified": "2025-03",
          "creator": {
            "@type": "Person",
            "name": "백승연"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "블랙뱃지 CRM",
          "description": "결혼정보회사 회원 관리 시스템 개발",
          "url": "https://qorbaxk.github.io/findsy/projects",
          "image": "https://qorbaxk.github.io/findsy/images/projects/blackbadge.webp",
          "dateCreated": "2024-03",
          "dateModified": "2024-06",
          "creator": {
            "@type": "Person",
            "name": "백승연"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "CreativeWork",
          "name": "공통 컴포넌트 자산화 프로젝트",
          "description": "모든 프로젝트의 빠른 개발을 위한 공통 컴포넌트 시스템 구축",
          "url": "https://qorbaxk.github.io/findsy/projects",
          "image": "https://qorbaxk.github.io/findsy/images/projects/commoncomponent.webp",
          "dateCreated": "2023-10",
          "dateModified": "2024-02",
          "creator": {
            "@type": "Person",
            "name": "백승연"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "CreativeWork",
          "name": "리즌마켓",
          "description": "친환경 쇼핑 플랫폼 개발",
          "url": "https://qorbaxk.github.io/findsy/projects",
          "image": "https://qorbaxk.github.io/findsy/images/projects/rezn.webp",
          "dateCreated": "2023-06",
          "dateModified": "2023-10",
          "creator": {
            "@type": "Person",
            "name": "백승연"
          }
        }
      }
    ]
  };

  return (
    <Script
      id="project-list-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(projectListSchema)
      }}
    />
  );
} 