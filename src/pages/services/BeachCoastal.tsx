import ServiceDetail from "@/components/ServiceDetail";
import { Waves } from "lucide-react";
import beachImage from "@/assets/beach-diani.jpg";

const BeachCoastal = () => {
  return (
    <ServiceDetail
      icon={Waves}
      title="Beach & Coastal"
      description="Relax on pristine white sand beaches and explore the rich marine life of the Indian Ocean."
      image={beachImage}
      features={["Diani Beach", "Watamu", "Lamu", "Malindi"]}
      price="From $800"
      fullDescription="Discover the stunning beauty of Kenya's Indian Ocean coastline. Our beach and coastal experiences offer the perfect blend of relaxation and adventure. Sink your toes into the powdery white sands of Diani Beach, explore the vibrant coral reefs of Watamu Marine National Park, wander through the UNESCO World Heritage Site of Lamu Old Town, and experience the exotic blend of Swahili and Arabic culture in Malindi. Whether you're snorkeling, diving, dhow sailing, or simply relaxing under palm trees, our coastal packages offer paradise on earth."
      included={[
        "Beachfront accommodation",
        "Daily breakfast and dinner",
        "Snorkeling equipment",
        "Dhow sailing excursion",
        "Marine park entrance fees",
        "Airport transfers",
        "Beach activities and water sports",
        "Cultural tours",
      ]}
      itinerary={[
        "Arrival and transfer to beach resort in Diani",
        "Relaxation day with beach activities and snorkeling",
        "Full day snorkeling and diving at Kisite-Mpunguti Marine Park",
        "Cultural excursion to local villages and markets",
        "Sunset dhow cruise with fresh seafood dinner",
        "Optional day trip to Shimba Hills National Reserve",
        "Departure transfer",
      ]}
    />
  );
};

export default BeachCoastal;
