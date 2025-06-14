import { Droplet, CheckCircle, Shield, Award, Clock, ThumbsUp } from 'lucide-react';

const Icon = ({ icon }: { icon: string }) => {
    switch (icon) {
      case "Droplet":
        return <Droplet className="h-5 w-5 text-blue-600 mr-2" />
      case "CheckCircle":
        return <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
      case "Shield":
        return <Shield className="h-5 w-5 text-blue-600 mr-2" />
      case "Award":
        return <Award className="h-5 w-5 text-blue-600 mr-2" />
      case "Clock":
        return <Clock className="h-5 w-5 text-blue-600 mr-2" />
      case "ThumbsUp":
        return <ThumbsUp className="h-5 w-5 text-blue-600 mr-2" />
      default:
        return null;
    }
  }

export default Icon;