import { ContactButton } from '../buttons/ContactButton';

export default function ExpertiseSectionPMModalContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-default">
      <div className="col-span-1 flex flex-col h-full w-3/4">
        <h3 className="text-5xl font-semibold font-dm-sans text-[var(--black)] mb-4">
          About my work
        </h3>
        <div className=" flex items-center justify-start gap-4 font-bold mt-auto ">
          <ContactButton />
        </div>
      </div>
      <div className="col-span-2  text-base ">
        <div className="mb-6">
          <h3 className="font-dm-sans font-semibold text-[var(--black)] mb-2">
            Highlighted Experience
          </h3>
          <ul className="list-disc pl-6 text-[var(--dark-gray)] space-y-2">
            <li>
              Coordinated cross-functional teams to ensure efficient workflows
              and timely deliveries.
            </li>
            <li>
              Handled project negotiations with stakeholders and led the
              implementation of continuous improvements.
            </li>
            <li>
              Managed projects for both private and public sectors, including
              database management and DevOps integrations.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold font-dm-sans text-[var(--black)] mb-2">
            Skills and Methodologies
          </h3>
          <ul className="list-disc pl-6 text-[var(--dark-gray)] space-y-2">
            <li>
              Proficient in Agile frameworks, particularly SCRUM, with
              experience in organizing sprints and managing tasks.
            </li>
            <li>
              Expert in removing blockers and ensuring smooth team productivity.
            </li>
            <li>
              Focused on quality control, risk management, and maintaining
              strong client relationships.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold font-dm-sans text-[var(--black)] mb-2">
            Key Results
          </h3>
          <ul className="list-disc pl-6 text-[var(--dark-gray)] space-y-2">
            <li>
              Successfully managed the deployment of innovative solutions on
              time and within budget.
            </li>
            <li>
              Presented progress reports and project results to high-level
              executives and government officials.
            </li>
            <li>
              Ensured all projects met client expectations with a focus on
              quality and compliance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
