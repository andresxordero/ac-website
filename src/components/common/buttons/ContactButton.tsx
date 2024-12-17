import { DynamicButton } from './DynamicButton';
import { FaArrowRight } from 'react-icons/fa';

export function ContactButton() {
  return (
    <div className="font-syne flex items-center gap-4 font-bold">
      Let&apos;s get in contact
      <DynamicButton
        style="WHITE"
        name="Become a client"
        icon={FaArrowRight}
        type="icon-only"
      />
    </div>
  );
}
