import { useState } from 'react';
import { DynamicButton } from './DynamicButton';
import { FaArrowRight } from 'react-icons/fa';
import ContactModal from '../modals/ContactModal';

export function ContactButton() {
  const [, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsExpanded(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="font-syne flex items-center gap-4 font-bold">
        Let&apos;s get in contact
        <DynamicButton
          style="WHITE"
          name="Become a client"
          icon={FaArrowRight}
          type="icon-only"
          onClick={handleClick}
        />
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
