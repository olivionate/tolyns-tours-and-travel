import ServiceDetail from "@/components/ServiceDetail";
import { Binoculars } from "lucide-react";
import wildlifeImage from "@/assets/wildlife-safari.jpg";

const WildlifeSafaris = () => {
  return (
    <ServiceDetail
      icon={Binoculars}
      title="Wildlife Safaris"
      description="Experience the Big Five and the Great Migration in Kenya's premier national parks and reserves."
      image={wildlifeImage}
      features={["Maasai Mara", "Amboseli", "Tsavo", "Samburu"]}
      price="From $1,200"
      fullDescription="Embark on an unforgettable journey through Kenya's most iconic wildlife destinations. Our wildlife safaris offer you the chance to witness the magnificent Big Five - lions, elephants, buffalo, leopards, and rhinos - in their natural habitat. Experience the Great Migration in the Maasai Mara, observe elephant herds against the backdrop of Mount Kilimanjaro in Amboseli, discover the unique red elephants of Tsavo, and explore the rugged beauty of Samburu National Reserve. Each safari is led by expert guides who share their deep knowledge of wildlife behavior and conservation."
      included={[
        "Professional safari guide",
        "4x4 safari vehicle with pop-up roof",
        "Park entrance fees",
        "Accommodation in lodges or tented camps",
        "All meals during the safari",
        "Bottled water during game drives",
        "Binoculars and field guides",
        "Airport transfers",
      ]}
      itinerary={[
        "Arrival at Nairobi Airport and transfer to your hotel",
        "Morning drive to Maasai Mara, afternoon game drive",
        "Full day game drive in Maasai Mara with picnic lunch",
        "Visit to a traditional Maasai village and evening game drive",
        "Transfer to Amboseli National Park with game drives en route",
        "Full day in Amboseli with views of Mount Kilimanjaro",
        "Return to Nairobi and departure",
      ]}
    />
  );
};

export default WildlifeSafaris;
