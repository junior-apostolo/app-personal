import { Age } from "./age";
import { Weight } from "./weight";
import { Height } from "./height";

interface StepConfig {
  title: string;
  component: React.ComponentType<StepProps>;
}

interface StepProps {
  nextStep: () => void;
  prevStep?: () => void;
  submitForm?: () => void;
}

const stepsConfig: Record<string, StepConfig> = {
  personalInfo: {
    title: "Personal Information",
    component: Age,
  },
  contactDetails: {
    title: "Contact Details",
    component: Weight,
  },
  contactHeight: {
    title: "Contact Details",
    component: Height,
  },
};

export default stepsConfig;
