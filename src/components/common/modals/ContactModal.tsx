import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseSharp } from 'react-icons/io5';
import { DynamicButton } from '../buttons/DynamicButton';
import { FaCode, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';
import { FaProjectDiagram } from 'react-icons/fa';
import { ExpertiseContactSection } from '@components/home/ExpertiseContactSection';
import { GrDocumentPerformance } from 'react-icons/gr';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: '-50%', scale: 0.8 },
  visible: { opacity: 1, y: '0%', scale: 1 },
  exit: { opacity: 0, y: '50%', scale: 0.8 },
};

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
          onClick={onClose}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative flex w-[70%] shadow-lg bg-[var(--white)] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="flex-1 p-12">
              <div className="col-span-1 flex flex-col h-full">
                <div className="flex items-center gap-4 pb-8">
                  <img
                    src="/assets/ac-website-icon.svg"
                    alt="icon"
                    className="size-8"
                  />
                  <p className="font-dm-sans font-light text-lg">
                    andrés cordero
                  </p>
                </div>
                <ExpertiseContactSection
                  title="Project Management"
                  text="Efficient planning and coordination to ensure project success."
                  icon={FaProjectDiagram}
                />
                <ExpertiseContactSection
                  title="Software Development"
                  text="Custom software solutions tailored to your business needs."
                  icon={FaCode}
                />
                <ExpertiseContactSection
                  title="Quality Assurance"
                  text="Comprehensive QA strategies to maintain software excellence."
                  icon={GrDocumentPerformance}
                />

                <div className=" flex items-center justify-start gap-4  mt-auto ">
                  <div className="flex gap-6 pt-16">
                    <DynamicButton
                      style="WHITE"
                      type="icon-only"
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
                      type="icon-only"
                      icon={IoMdMail}
                      name="Email"
                      onClick={() =>
                        window.open(
                          'mailto:andresmcorderor@gmail.com',
                          '_blank',
                        )
                      }
                    />
                    <DynamicButton
                      style="WHITE"
                      type="icon-only"
                      icon={IoLogoWhatsapp}
                      name="WhatsApp"
                      onClick={() =>
                        window.open('https://wa.me/524777037913', '_blank')
                      }
                    />
                    <DynamicButton
                      style="WHITE"
                      type="icon-only"
                      icon={FaTelegramPlane}
                      name="Telegram"
                      onClick={() =>
                        window.open('https://wa.me/524777037913', '_blank')
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-[var(--black)] px-16 py-12 text-white w-[65%]">
              <div className="absolute right-4 top-4" onClick={onClose}>
                <DynamicButton
                  style="WHITE"
                  name="Close"
                  icon={IoCloseSharp}
                  type="icon-only"
                />
              </div>
              <div className="leading-tight text-[var(--white)] font-medium pb-4 font-dm-sans text-5xl cursor-default">
                <p>Got ideas? I&apos;ve got the skills.</p>
                <p>Let&apos;s team Up!</p>
              </div>
              <p className="font-inter pb-8 text-xl font-extralight text-[var(--gray)] break-words cursor-default">
                Tell me more about yourself and what's on your mind
              </p>
              <p>parrafo</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
