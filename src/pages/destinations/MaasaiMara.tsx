import DestinationDetail from "@/components/DestinationDetail";
import heroImage from "@/assets/maasai-mara.jpg";
import landscape from "@/assets/destinations/maasai-mara-landscape.jpg";
import lions from "@/assets/destinations/maasai-mara-lions.jpg";
import balloons from "@/assets/destinations/maasai-mara-balloons.jpg";

const MaasaiMara = () => {
  return (
    <DestinationDetail
      name="Maasai Mara National Reserve"
      location="Narok County, Southwestern Kenya"
      description="Witness the spectacular Great Migration and encounter Africa's iconic wildlife in one of the world's most famous game reserves."
      heroImage={heroImage}
      gallery={[landscape, lions, balloons, heroImage]}
      highlights={[
        "The Great Wildebeest Migration (July-October)",
        "Big Five game viewing year-round",
        "Hot air balloon safaris at sunrise",
        "Traditional Maasai cultural villages",
        "Mara River crossings",
        "World-class photography opportunities"
      ]}
      duration="3-5 Days"
      difficulty="Easy"
      bestTime="July - October"
      rating={4.9}
      overview="The Maasai Mara National Reserve stands as Kenya's crown jewel of wildlife destinations, offering an unparalleled safari experience in 1,510 square kilometers of pristine African wilderness. Named after the ancestral inhabitants, the Maasai people, and the Mara River that traverses it, this reserve forms part of the greater Serengeti-Mara ecosystem. The Mara is world-renowned for hosting the annual Great Migration, where over 1.5 million wildebeest, accompanied by hundreds of thousands of zebras and gazelles, cross from Tanzania's Serengeti in search of fresh grazing. This dramatic spectacle includes thrilling river crossings where massive crocodiles lurk beneath the surface. Beyond the migration, the Mara offers exceptional year-round game viewing with abundant populations of lions, leopards, elephants, buffalo, and both black and white rhinos. The reserve's golden grasslands, dotted with acacia trees, provide the quintessential African safari backdrop that has captivated travelers and filmmakers for generations."
      wildlife={[
        "Lions & Cheetahs",
        "African Elephants",
        "Black Rhinos",
        "Leopards",
        "Wildebeest",
        "Zebras",
        "Giraffes",
        "Hippos & Crocodiles",
        "Hyenas",
        "Buffalo",
        "Thomson's Gazelles",
        "Topi Antelopes"
      ]}
      activities={[
        "Morning and evening game drives in 4x4 safari vehicles",
        "Hot air balloon safaris with champagne breakfast",
        "Walking safaris with armed rangers",
        "Maasai village cultural visits and warrior experiences",
        "Sundowner cocktails on the savannah",
        "Photography tours with professional guidance",
        "Night game drives (in private conservancies)",
        "Bush dinners under the stars"
      ]}
      accommodation={[
        "Luxury tented camps with ensuite facilities",
        "Permanent lodges with swimming pools",
        "Mobile camping for authentic bush experience",
        "Eco-friendly conservancy camps",
        "Private villas for exclusive stays"
      ]}
      gettingThere="The Maasai Mara is accessible via multiple routes. By air, daily scheduled flights operate from Nairobi's Wilson Airport to various airstrips within the reserve (Keekorok, Mara Serena, Ol Kiombo, Musiara, and Kichwa Tembo), with flight times of approximately 45 minutes. By road, the journey from Nairobi takes 5-6 hours (250km) via Narok town, offering scenic views of the Great Rift Valley escarpment. The roads within the reserve are earth tracks best navigated with 4x4 vehicles, especially during rainy seasons. Most safari packages include transfers from Nairobi."
      tips={[
        "Book accommodations 6-12 months in advance for migration season",
        "Bring binoculars and a good camera with telephoto lens",
        "Pack neutral-colored clothing (khaki, beige, olive green)",
        "Carry warm layers for early morning game drives",
        "Respect wildlife by maintaining safe distances",
        "Tip your driver-guide who enhances your experience",
        "Malaria prophylaxis is recommended - consult your doctor",
        "Consider visiting conservancies for exclusive wildlife viewing"
      ]}
    />
  );
};

export default MaasaiMara;
