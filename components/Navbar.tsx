"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * 상단 네비게이션바
 */
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50;
      
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
    <nav className={`fixed top-2 sm:top-4 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    } bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl mx-3 sm:mx-6 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* 로고/브랜드 */}
          <div className="text-lg sm:text-xl font-Mediasansextended tracking-wider">
            <a 
              href={process.env.NODE_ENV === "production" ? 'https://qorbaxk.github.io/findsy/':'/'} 
              className="text-black hover:opacity-70 transition-opacity duration-300"
            >
              find seungyeon
            </a>
          </div>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex flex-row gap-8 text-sm">
            {MENULIST.map((item, idx) => (
              <Menu key={`navigation_menu_list_${idx}`} {...item} />
            ))}
          </div>

          {/* 모바일 햄버거 메뉴 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:opacity-70 transition-opacity duration-300 p-2"
              aria-label="메뉴 열기/닫기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/30">
            <div className="flex flex-col gap-4">
              {MENULIST.map((item, idx) => (
                <MobileMenu 
                  key={`mobile_navigation_menu_list_${idx}`} 
                  {...item} 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </div>
          </div>
        )}
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
 * 개별 메뉴 (데스크톱)
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

/**
 * 모바일 메뉴
 * @param {string} href - 이동할 하이퍼링크
 * @param {string} name - 표시할 명칭
 * @param {function} onClick - 클릭 시 실행할 함수
 */
const MobileMenu = ({ href, name, onClick }: { href: string; name: string; onClick: () => void }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-gray-700 hover:text-black transition-colors duration-300 font-medium tracking-wide py-2"
    >
      {name}
    </Link>
  );
};

export default Navbar;
