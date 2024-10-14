import { Age } from "./age";
import { Weight } from "./weight";
import { Height } from "./height";
import { ActivityLevel } from "./activityLevel";
import { DaysHours } from "./daysHours";
import { Objective } from "./objective";
import { Pathophysiological } from "./pathophysiological";
import { HowLongTraining } from "./howLongTraining";
import { MuscleFocus } from "./muscleFocus";
import { Gender } from "./gender";
import { SkillsPractice } from "./skillsPractice";

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
  activityLevel: {
    title: "Personal Information",
    component: ActivityLevel,
  },
  Objective: {
    title: "Personal Information",
    component: Objective,
  },
  MuscleFocus:{
    title: "Personal Information",
    component: MuscleFocus,
  },
  HowLongTraining: {
    title: "Personal Information",
    component: HowLongTraining,
  },
  Pathophysiological: {
    title: "Personal Information",
    component: Pathophysiological,
  },
  DaysHours: {
    title: "Personal Information",
    component: DaysHours,
  },
  Gender:{
    title: "Personal Information",
    component: Gender,
  },
  SkillsPractice:{
    title: "Personal Information",
    component: SkillsPractice
  },
  NextPage:{
    title: "NextPage",
    component: SkillsPractice
  },
};

export default stepsConfig;
