import { cn } from "@/utils/utils";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = (props: SectionContainerProps) => {
  const { children, className } = props;
  return <div className={cn("h-[90vh]", className)}>{children}</div>;
};

export default SectionContainer;
