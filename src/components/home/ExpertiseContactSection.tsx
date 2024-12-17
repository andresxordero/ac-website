type ExpertiseContactSectionProps = {
  icon: React.ElementType;
  title: string;
  text: string;
};

export function ExpertiseContactSection({
  icon: Icon,
  title,
  text,
}: ExpertiseContactSectionProps) {
  return (
    <div className="relative flex h-full flex-col justify-between rounded-xl bg-[var(--white)] bg-cover bg-center py-6 px-4 text-[var(--black)] ">
      <div className="flex items-start gap-4">
        <Icon className="size-8 self-start" />
        <div>
          <h3 className="font-syne pb-2 text-lg font-bold leading-tight">
            {title}
          </h3>
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}
