import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExpertiseSectionImage } from '@mocks/ExpertiseSectionMocks';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

interface ExpertiseSectionModalHeaderProps {
  expertiseData: {
    images: ExpertiseSectionImage[];
  };
}

export default function ExpertiseSectionModalHeader({
  expertiseData,
}: ExpertiseSectionModalHeaderProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="w-full rounded-2xl shadow-md">
      <div
        className="text-[var(--white)] border-b border-[var(--gray)] py-4 cursor-pointer flex justify-between items-center"
        onClick={toggleExpand}
      >
        <h2 className="text-lg font-bold font-syne text-[var(--white)]">
          Knowledge
        </h2>
        <span>
          {isExpanded ? (
            <IoMdArrowDropup className="size-8" />
          ) : (
            <IoMdArrowDropdown className="size-8" />
          )}
        </span>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        {isExpanded && (
          <div className="flex justify-around items-center pt-8">
            {expertiseData.images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="size-16 "
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute mt-4 bg-[var(--white)] border border-[var(--gray)] text-[var(--black)] text-base font-syne font-bold rounded-full px-2 py-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {image.alt}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
