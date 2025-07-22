import { IconProp } from '@/types/base';
import { Droplet, CheckCircle, Shield, Award, Clock, ThumbsUp } from 'lucide-react';

export type IconNames = "Droplet" | "CheckCircle" | "Shield" | "Award" | "Clock" | "ThumbsUp";

const Icon = ({ icon }: { icon: IconProp }) => {
  switch (icon.name) {
    case "Droplet":
      return <Droplet className="h-5 w-5 text-primary mr-2" />
    case "CheckCircle":
      return <CheckCircle className="h-5 w-5 text-primary mr-2" />
    case "Shield":
      return <Shield className="h-5 w-5 text-primary mr-2" />
    case "Award":
      return <Award className="h-5 w-5 text-primary mr-2" />
    case "Clock":
      return <Clock className="h-5 w-5 text-primary mr-2" />
    case "ThumbsUp":
      return <ThumbsUp className="h-5 w-5 text-primary mr-2" />
    default:
      return null;
  }
}

export default Icon;