/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { useEffect, useState } from 'react';

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-opacity-20 backdrop-blur-xl transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-center px-8 py-4">
        <div className="flex items-center gap-4 text-xl font-bold">
          <img
            src="/assets/ac-website-icon.svg"
            alt="icon"
            className="size-12"
          />
          {/* <p className="font-dm-sans flex items-center text-base font-extralight">
            Andrés Cordero.
          </p> */}
        </div>
        {/* <DynamicButton type="full-static" name="Language" style="WHITE" /> */}
      </div>
    </nav>
  );
}
