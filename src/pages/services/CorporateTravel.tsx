import ServiceDetail from "@/components/ServiceDetail";
import { Building } from "lucide-react";
import corporateImage from "@/assets/corporate-travel.jpg";

const CorporateTravel = () => {
  return (
    <ServiceDetail
      icon={Building}
      title="Corporate Travel"
      description="Professional services for business travel, conferences, and corporate team building."
      image={corporateImage}
      features={["Team Building", "Conferences", "Incentive Travel", "Group Tours"]}
      price="Custom Quote"
      fullDescription="Elevate your corporate events with our comprehensive business travel services. From intimate executive retreats to large-scale conferences, we handle every detail with professionalism and precision. Our team building programs combine adventure activities with strategic development exercises in Kenya's stunning natural settings. Reward your top performers with incentive travel packages that motivate and inspire. We provide dedicated event coordinators, handle all logistics including venue selection, accommodation, transportation, and activities. Whether it's a board meeting in a luxury lodge overlooking the Mara or a team building safari, we ensure your corporate event achieves its objectives while providing an unforgettable African experience."
      included={[
        "Dedicated corporate event coordinator",
        "Venue selection and booking",
        "Airport meet and greet services",
        "Private transportation fleet",
        "Conference facilities and equipment",
        "Accommodation arrangements",
        "Team building activities and facilitators",
        "Catering services",
        "VIP airport lounge access",
        "24/7 support throughout the event",
      ]}
      itinerary={[
        "Airport VIP meet and greet, transfer to conference venue",
        "Morning conference sessions, afternoon team building activities",
        "Full day safari experience with networking opportunities",
        "Strategic planning session at luxury lodge",
        "Optional recreational activities: golf, spa, cultural tours",
        "Gala dinner and awards ceremony",
        "Departure transfers with smooth check-in assistance",
      ]}
    />
  );
};

export default CorporateTravel;
