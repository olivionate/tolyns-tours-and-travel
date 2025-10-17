import ServiceDetail from "@/components/ServiceDetail";
import { Plane } from "lucide-react";
import travelLogisticsImage from "@/assets/travel-logistics.jpg";

const TravelLogistics = () => {
  return (
    <ServiceDetail
      icon={Plane}
      title="Travel Logistics"
      description="Complete travel arrangements including flights, transfers, and documentation."
      image={travelLogisticsImage}
      features={["Flight Bookings", "Airport Transfers", "Visa Processing", "Travel Insurance"]}
      price="Service Based"
      fullDescription="Take the stress out of travel planning with our comprehensive logistics services. We handle all aspects of your journey from booking flights at competitive rates to arranging seamless airport transfers. Our visa processing service guides you through documentation requirements and application procedures, ensuring smooth entry into Kenya and other East African countries. We offer travel insurance options tailored to your activities, whether you're on safari, climbing mountains, or relaxing at the beach. Our 24/7 support means you're never alone during your travels. From the moment you decide to visit Kenya until you arrive safely home, we manage every logistical detail so you can focus on enjoying your adventure."
      included={[
        "Flight booking and ticketing services",
        "Airport meet and greet",
        "Private airport transfers",
        "Visa application assistance",
        "Travel insurance arrangements",
        "Accommodation bookings",
        "Car rental services",
        "Tour and activity reservations",
        "24/7 emergency support",
        "Travel documentation guidance",
      ]}
    />
  );
};

export default TravelLogistics;
