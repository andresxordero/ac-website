import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseSharp } from 'react-icons/io5';
import { DynamicButton } from '../buttons/DynamicButton';
import { FaCode, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';
import { FaProjectDiagram } from 'react-icons/fa';
import { ExpertiseContactSection } from '@components/home/ExpertiseContactSection';
import { GrDocumentPerformance } from 'react-icons/gr';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  // const [selectedHelp, setSelectedHelp] = useState<string[]>([]);
  // const [otherHelp, setOtherHelp] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: Record<string, unknown> | undefined) => {
    // if (selectedHelp.length === 0) {
    //   toast.error('Please select at least one option.', {
    //     position: 'bottom-left',
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'light',
    //     transition: Bounce,
    //   });
    //   return;
    // }

    const serviceId = 'service_4tnvqx8';
    const templateId = 'template_jsty4d9';
    const userId = 'UFG_EnlAJMQC_VCCO';

    const emailData = {
      fullName: data?.fullName || '',
      mailAddress: data?.mailAddress || '',
      message: data?.message || '',
      // selectedHelp:
      //   selectedHelp.length > 0 ? selectedHelp.join(', ') : 'Not specified',
      // otherHelp: otherHelp || 'No additional details provided',
    };

    emailjs.send(serviceId, templateId, emailData, userId).then(
      () => {
        reset();
        toast.success('Mail sent:', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      },
      () => {
        toast.error('Error sending mail:', {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      },
    );
  };

  // const handleHelpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setSelectedHelp((prevSelectedHelp) =>
  //     prevSelectedHelp.includes(value)
  //       ? prevSelectedHelp.filter((item) => item !== value)
  //       : [...prevSelectedHelp, value],
  //   );
  // };

  // const handleOtherHelpChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   setOtherHelp(event.target.value);
  // };

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
                <div className="absolute right-4 top-4" onClick={onClose}>
                  <DynamicButton
                    style="WHITE"
                    name="Close"
                    icon={IoCloseSharp}
                    type="icon-only"
                  />
                </div>
                <div className="flex items-center gap-0 pb-8">
                  <img
                    src="/assets/ac-website-icon-alt.svg"
                    alt="icon"
                    className="h-12"
                  />
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
                        window.open('https://t.me/corderoandres', '_blank')
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
                Tell me more about yourself and what&apos;s on your mind
              </p>
              <div>
                <ToastContainer />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Your name"
                      className="font-dm-sans w-full border-b bg-none px-3 py-2 bg-[var(--black)] focus:outline-none"
                      {...register('fullName', {
                        required: 'This field is required',
                      })}
                    />
                    {errors.fullName && (
                      <p className="text-sm font-syne font-semibold mt-2 text-red-500">
                        {errors.fullName.message as React.ReactNode}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <input
                      id="mailAddress"
                      type="email"
                      placeholder="you@mail.com"
                      className="font-dm-sans w-full border-b bg-none px-3 py-2 bg-[var(--black)] focus:outline-none"
                      {...register('mailAddress', {
                        required: 'Email is mandatory',
                        pattern: {
                          value:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          message: 'Enter a valid email address',
                        },
                      })}
                    />
                    {errors.mailAddress && (
                      <p className="text-sm font-syne font-semibold mt-2 text-red-500">
                        {errors.mailAddress.message as React.ReactNode}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <p className="font-syne text-var[--white]">
                      Tell me a little about your project
                    </p>
                    <textarea
                      id="message"
                      placeholder="Explain a little..."
                      className="font-dm-sans w-full border rounded-lg bg-none px-3 py-2 bg-[var(--black)] focus:outline-none"
                      rows={3}
                      {...register('message')}
                    />
                  </div>

                  {/* <div className="mb-12">
                    <p className="font-syne text-var[--white]">
                      How can I help?
                    </p>
                    <div className="flex gap-4">
                      {[
                        'Project Management',
                        'Software Development',
                        'Business Analysis',
                        'Front-End Development',
                        'Branding',
                        'Other',
                      ].map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 text-sm"
                        >
                          <input
                            type="checkbox"
                            value={option}
                            onChange={handleHelpChange}
                            checked={selectedHelp.includes(option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    {selectedHelp.includes('Other') && (
                      <div className="mt-4">
                        <input
                          type="text"
                          placeholder="Please specify"
                          value={otherHelp}
                          onChange={handleOtherHelpChange}
                          className="font-dm-sans w-full border-b bg-none px-3 py-2 bg-[var(--black)] focus:outline-none"
                        />
                      </div>
                    )}
                  </div> */}

                  <button
                    type="submit"
                    className="w-full animate-gradient-random font-syne inline-block rounded-full bg-[var(--soft-light-gray)] bg-opacity-50 bg-gradient-to-r from-[var(--deep-navy-blue)] via-[var(--vibrant-sky-blue)] to-[var(--magenta-pink)] p-4 px-4 text-base font-semibold text-[var(--white)]"
                  >
                    Let&apos;s get started!
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
