"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * 상단 네비게이션바
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50;
      
      setIsScrolled(currentScrollY > scrollThreshold);
      
      if (isHomePage) {
        // 홈페이지: 스크롤하면 나타나고, 최상단으로 가면 페이드아웃
        // 페이드아웃을 위한 추가 임계값 설정
        if (currentScrollY > scrollThreshold) {
          setIsVisible(true);
        } else if (currentScrollY <= scrollThreshold && currentScrollY > 20) {
          // 20px ~ 50px 사이에서는 페이드아웃 시작
          setIsVisible(false);
        } else {
          // 20px 이하에서는 완전히 숨김
          setIsVisible(false);
        }
      } else {
        // 다른 페이지: 위로 스크롤하면 나타나고, 아래로 스크롤하면 사라짐
        if (currentScrollY < lastScrollY && currentScrollY > scrollThreshold) {
          // 위로 스크롤 중이고 스크롤 임계값을 넘었을 때
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
          // 아래로 스크롤 중일 때
          setIsVisible(false);
        } else if (currentScrollY <= scrollThreshold) {
          // 최상단 근처에서는 항상 보임
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isHomePage]);

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    } bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl mx-6 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* 로고/브랜드 */}
          <div className="text-xl font-Mediasansextended tracking-wider">
            <a 
              href={process.env.NODE_ENV === "production" ? 'https://qorbaxk.github.io/findsy/':'/'} 
              className="text-black hover:opacity-70 transition-opacity duration-300"
            >
              find seungyeon
            </a>
          </div>
          
          {/* 메뉴 */}
          <div className="flex flex-row gap-8 text-sm">
            {MENULIST.map((item, idx) => (
              <Menu key={`navigation_menu_list_${idx}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

/**
 * 들어갈 메뉴리스트
 */
const MENULIST = [
  { href:  process.env.NODE_ENV === "production" ? 'https://qorbaxk.github.io/findsy/':'/', name: "Home" },
  { href: `/projects`, name: "Projects" },
  { href: `/contact`, name: "Contact" },
];

/**
 * 개별 메뉴
 * @param {string} href - 이동할 하이퍼링크
 * @param {string} name - 표시할 명칭
 */
const Menu = ({ href, name }: { href: string; name: string }) => {
  return (
    <span className="relative group">
      <Link
        href={href}
        className="text-gray-700 hover:text-black transition-colors duration-300 font-medium tracking-wide"
      >
        {name}
        <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </span>
  );
};

export default Navbar;
