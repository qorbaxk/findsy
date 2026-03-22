"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * 상단 네비게이션바
 */
const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollYRef = useRef(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // 스크롤 위치를 먼저 읽기 (Layout Thrashing 방지)
      const currentScrollY = window.scrollY;

      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollThreshold = 50;
          let newIsVisible = isVisible;
          
          if (isHomePage) {
            // 홈페이지 로직
            if (currentScrollY > scrollThreshold) {
              newIsVisible = true;
            } else if (currentScrollY <= scrollThreshold && currentScrollY > 20) {
              newIsVisible = false;
            } else {
              newIsVisible = false;
            }
          } else {
            // 다른 페이지 로직
            if (currentScrollY < lastScrollYRef.current && currentScrollY > scrollThreshold) {
              newIsVisible = true;
            } else if (currentScrollY > lastScrollYRef.current && currentScrollY > scrollThreshold) {
              newIsVisible = false;
            } else if (currentScrollY <= scrollThreshold) {
              newIsVisible = true;
            }
          }
          
          // 상태가 다를 때만 업데이트
          setIsVisible(prev => (prev !== newIsVisible ? newIsVisible : prev));
          
          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // passive옵션: 브라우저가 스크롤이 끝날때까지 기다리지않고 바로 처리함.
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // 컴포넌트 마운트 시 초기 위치가 최상단이 아니면 보이게 설정 (새로고침 시)
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, isVisible]);

  return (
    <nav className={`fixed top-2 sm:top-4 left-0 right-0 z-50 transition-all duration-300 ease-out will-change-transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[120%]'
    } bg-white/70 backdrop-blur-[4px] border border-white/40 rounded-2xl mx-3 sm:mx-6 shadow-md`}>
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
