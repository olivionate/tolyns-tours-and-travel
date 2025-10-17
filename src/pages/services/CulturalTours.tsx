import ServiceDetail from "@/components/ServiceDetail";
import { Users } from "lucide-react";
import culturalImage from "@/assets/cultural-maasai.jpg";

const CulturalTours = () => {
  return (
    <ServiceDetail
      icon={Users}
      title="Cultural Tours"
      description="Immerse yourself in Kenya's rich cultural heritage with authentic community experiences."
      image={culturalImage}
      features={["Maasai Villages", "Lamu Culture", "Bomas of Kenya", "Historical Sites"]}
      price="From $600"
      fullDescription="Experience the vibrant tapestry of Kenyan culture through authentic interactions with local communities. Visit traditional Maasai villages and learn about their ancient pastoralist traditions, participate in cultural ceremonies, and understand their unique way of life. Explore the Swahili culture of Lamu, where time seems to stand still in narrow winding streets. Visit the Bomas of Kenya to witness traditional dances and music from different ethnic groups. Our cultural tours provide meaningful connections with Kenya's diverse peoples while supporting community-based tourism initiatives that directly benefit local populations."
      included={[
        "Knowledgeable cultural guide",
        "Village visits and community interactions",
        "Traditional meal experiences",
        "Cultural performances and demonstrations",
        "Handicraft shopping opportunities",
        "Photography opportunities",
        "Transportation",
        "Entrance fees to cultural sites",
      ]}
      itinerary={[
        "Nairobi city tour including museums and historical sites",
        "Visit to Maasai village with traditional welcome ceremony",
        "Participate in daily activities: beadwork, herding, fire-making",
        "Traditional Maasai lunch and storytelling session",
        "Visit to Bomas of Kenya for multicultural performances",
        "Shopping at local markets and craft cooperatives",
        "Farewell dinner with cultural entertainment",
      ]}
    />
  );
};

export default CulturalTours;
