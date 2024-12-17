/* eslint-disable tailwindcss/no-custom-classname */
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { HiDocumentDownload } from 'react-icons/hi';
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';

import { DynamicButton } from './buttons/DynamicButton';
import { ContactButton } from './buttons/ContactButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[var(--white)] ">
      <div className="flex justify-between p-36 ">
        <div>
          <div className="pointer-events-none flex flex-col">
            <p className="font-dm-sans font-regular mb-4 text-4xl leading-snug">
              &quot;Make it happen. The best way to
              <br />
              predict the future is to create it.&quot;
            </p>
            <p className="font-syne text-start text-2xl font-bold text-[var(--gray)]">
              Peter Drucker
            </p>
          </div>

          <div className="flex gap-6 pt-16">
            <DynamicButton
              style="WHITE"
              type="full-dynamic"
              icon={FaGithub}
              name="Professional GitHub"
              onClick={() =>
                window.open('https://github.com/andrescordero-cbqa', '_blank')
              }
            />
            <DynamicButton
              style="WHITE"
              type="full-dynamic"
              icon={FaGithub}
              name="Personal GitHub"
              onClick={() =>
                window.open('https://github.com/andrescorderor', '_blank')
              }
            />
            <DynamicButton
              style="WHITE"
              type="full-dynamic"
              icon={FaLinkedinIn}
              name="LinkedIn"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/andresmcorderor/',
                  '_blank',
                )
              }
            />
            <DynamicButton
              style="WHITE"
              type="full-dynamic"
              icon={HiDocumentDownload}
              name="Download Resume"
              onClick={() => window.open('/assets/Resume.pdf', '_blank')}
            />
            <DynamicButton
              style="WHITE"
              type="full-dynamic"
              icon={IoMdMail}
              name="Email"
              onClick={() =>
                window.open('mailto:andresmcorderor@gmail.com', '_blank')
              }
            />
            <DynamicButton
              style="WHITE"
              type="full-dynamic"
              icon={IoLogoWhatsapp}
              name="WhatsApp"
              onClick={() =>
                window.open('https://wa.me/524777037913', '_blank')
              }
            />
            <DynamicButton
              style="WHITE"
              type="full-dynamic"
              icon={FaTelegramPlane}
              name="Telegram"
              onClick={() =>
                window.open('https://t.me/corderoandres', '_blank')
              }
            />
          </div>
        </div>
        <ContactButton />
      </div>
      <div className="animate-gradient-rotate h-1 w-full bg-gradient-to-r from-[var(--deep-navy-blue)] via-[var(--vibrant-sky-blue)] to-[var(--magenta-pink)]" />
      <p className="font-dm-sans pointer-events-none my-4 text-center text-sm text-[var(--black)] ">
        © Andrés Cordero {currentYear} • All rights reserved.
      </p>
    </footer>
  );
}
