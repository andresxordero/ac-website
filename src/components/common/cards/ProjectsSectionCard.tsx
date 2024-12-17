/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { useState } from 'react';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

import { DynamicButton } from '../buttons/DynamicButton';
import { ProjectsSectionCardProps } from '@mocks/ProjectsSectionMocks';

interface ProjectsSectionCardImage extends ProjectsSectionCardProps {
  image: string;
}

export default function ProjectsSectionCard({
  image,
  link,
  title,
}: ProjectsSectionCardImage) {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleOpenLink = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      className={`relative bg-cover bg-center p-24 ${
        isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      style={{
        backgroundImage: `linear-gradient(to top, var(--black), transparent), url(${image})`,
        height: '100vh',
      }}
      onMouseDown={() => setIsGrabbing(true)}
      onMouseUp={() => setIsGrabbing(false)}
      onMouseLeave={() => setIsGrabbing(false)}
    >
      <div className="absolute inset-x-0 bottom-0 px-24 py-12">
        <h3 className="font-dm-sans w-3/4 text-[3rem] font-bold leading-tight text-[var(--white)]">
          {title}
        </h3>

        <DynamicButton
          style="WHITE"
          type="full-static"
          icon={FaExternalLinkSquareAlt}
          name="View Project"
          onClick={handleOpenLink}
        />
      </div>
    </div>
  );
}
