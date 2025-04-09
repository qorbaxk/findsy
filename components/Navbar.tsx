"use client";

import Link from "next/link";

/**
 * 상단 네비게이션바
 */
const Navbar = () => {
  return (
    <nav className="fixed top-4 right-4 flex flex-row gap-4 text-sm z-10">
      {MENULIST.map((item, idx) => (
        <Menu key={`navigation_menu_list_${idx}`} {...item} />
      ))}
    </nav>
  );
};

/**
 * 들어갈 메뉴리스트
 */
const MENULIST = [
  { href: "/", name: "Home" },
  { href: "/projects", name: "Projects" },
  { href: "/contact", name: "Contact" },
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
        className="group-hover:text-black transition-colors duration-300 font-Mediasansextended"
      >
        {name}
        <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </span>
  );
};

export default Navbar;
