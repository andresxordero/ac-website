import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseSharp } from 'react-icons/io5';
import { DynamicButton } from '../buttons/DynamicButton';

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
            className="relative flex w-[80%] shadow-lg bg-[var(--white)] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="flex-1 p-12">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/ac-website-icon.svg"
                  alt="icon"
                  className="size-12"
                />
                <p className="font-syne font-bold text-xl">Andrés Cordero</p>
              </div>
            </div>

            <div className="flex flex-col bg-[var(--black)] px-16 py-12 text-white w-[70%]">
              <div className="absolute right-4 top-4" onClick={onClose}>
                <DynamicButton
                  style="WHITE"
                  name="Close"
                  icon={IoCloseSharp}
                  type="icon-only"
                />
              </div>
              <div className="text-[var(--white)] font-semibold pb-8 font-dm-sans text-5xl cursor-default">
                Title
              </div>
              <p className="font-inter text-base font-extralight text-[var(--gray)] break-words cursor-default">
                PAragrapg
              </p>
              parrafo
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
