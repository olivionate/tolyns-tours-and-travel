import ServiceDetail from "@/components/ServiceDetail";
import { Mountain } from "lucide-react";
import mountainImage from "@/assets/mount-kenya.jpg";

const MountainClimbing = () => {
  return (
    <ServiceDetail
      icon={Mountain}
      title="Mountain Climbing"
      description="Conquer Africa's highest peaks with our expert guides and comprehensive support."
      image={mountainImage}
      features={["Mount Kenya", "Kilimanjaro", "Mount Longonot", "Aberdares"]}
      price="From $1,500"
      fullDescription="Challenge yourself with an unforgettable mountain climbing adventure in East Africa. Scale Mount Kenya, Africa's second-highest peak, through diverse ecological zones from tropical forest to alpine desert. Conquer Mount Kilimanjaro, the roof of Africa, with experienced guides who ensure your safety and success. For day adventures, hike the volcanic crater of Mount Longonot or explore the mysterious moorlands of the Aberdare Range. Our climbing expeditions cater to all fitness levels, from beginner-friendly hikes to technical ascents requiring mountaineering skills."
      included={[
        "Experienced mountain guides and porters",
        "All camping equipment and sleeping bags",
        "Three meals daily on the mountain",
        "Park fees and camping permits",
        "Emergency oxygen and first aid",
        "Pre-climb briefing and equipment check",
        "Summit certificate",
        "Transportation to and from the mountain",
      ]}
      itinerary={[
        "Arrival in Nairobi, equipment check, and pre-climb briefing",
        "Drive to Sirimon Gate, trek to Old Moses Camp (3,300m)",
        "Acclimatization hike to Shipton's Camp (4,200m)",
        "Early morning summit attempt of Point Lenana (4,985m), descend to Shipton's",
        "Trek down to Met Station and return to Nairobi",
      ]}
    />
  );
};

export default MountainClimbing;
