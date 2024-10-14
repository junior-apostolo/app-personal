import { Age } from "./age";
import { Weight } from "./weight";
import { Height } from "./height";
import { ActivityLevel } from "./activityLevel";
import { SelectDays } from "./selectDay";
import { Objective } from "./objective";
import { Pathophysiological } from "./pathophysiological";
import { HowLongTraining } from "./howLongTraining";
import { MuscleFocus } from "./muscleFocus";
import { Gender } from "./gender";
import { SkillsPractice } from "./skillsPractice";
import { SelectTime } from "./selectTime";
import { InterestInTraining } from "./interestInTraining";
import { SportsSelection } from "./sportsSelection";
import { FrequencySelection } from "./frequencySelection";

interface StepConfig {
  title: string;
  component: React.ComponentType<StepProps>;
}

interface StepProps {
  nextStep: () => void;
  prevStep?: () => void;
  submitForm?: () => void;
}
//vinicius.leal34@gmail.com
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
  SelectDays: {
    title: "Personal Information",
    component: SelectDays,
  },
  SelectTime: {
    title: "Personal Information",
    component: SelectTime,
  },
  InterestInTraining: {
    title: "Personal Information",
    component: InterestInTraining,
  },
  SportsSelection:{
    title: "Personal Information",
    component: SportsSelection
  },
  FrequencySelection:{
    title: "Personal Information",
    component: FrequencySelection
  },
  Gender:{
    title: "Personal Information",
    component: Gender,
  },
  NextPage:{
    title: "NextPage",
    component: Gender
  },
};
 
export default stepsConfig;
