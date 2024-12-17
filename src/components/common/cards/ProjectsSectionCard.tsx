/* eslint-disable tailwindcss/migration-from-tailwind-2 */
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
  const handleOpenLink = () => {
    window.open(link, '_blank');
  };

  return (
    <div
      className="bg-cover bg-center p-24 "
      style={{ backgroundImage: `url(${image})`, height: '100vh' }}
    >
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--black)] to-transparent px-24 py-12">
        <h3 className="font-dm-sans  w-3/4 text-[3rem] font-bold leading-tight text-[var(--white)]">
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
