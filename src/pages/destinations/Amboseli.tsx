import DestinationDetail from "@/components/DestinationDetail";
import heroImage from "@/assets/amboseli-elephants.jpg";
import kilimanjaro from "@/assets/destinations/amboseli-kilimanjaro.jpg";
import herd from "@/assets/destinations/amboseli-elephants-herd.jpg";

const Amboseli = () => {
  return (
    <DestinationDetail
      name="Amboseli National Park"
      location="Kajiado County, Southern Kenya"
      description="Experience close encounters with giant elephant herds against the breathtaking backdrop of Africa's highest peak, Mount Kilimanjaro."
      heroImage={heroImage}
      gallery={[kilimanjaro, herd, heroImage, kilimanjaro]}
      highlights={[
        "Spectacular views of Mount Kilimanjaro",
        "Kenya's largest elephant populations",
        "Five distinct wildlife habitats",
        "Over 400 bird species",
        "Traditional Maasai communities",
        "Observation Hill panoramic viewpoint"
      ]}
      duration="2-4 Days"
      difficulty="Easy"
      bestTime="June - October & January - February"
      rating={4.8}
      overview="Amboseli National Park, spanning 392 square kilometers, offers one of Africa's most iconic landscapes - massive elephant herds wandering across golden plains with the snow-capped summit of Mount Kilimanjaro dominating the horizon. The park's name derives from the Maasai word 'Empusel,' meaning 'salty dust,' reflecting its ancient lakebed origins. Amboseli is renowned for having one of Kenya's highest concentrations of elephants, with over 1,600 individuals roaming freely. These gentle giants, often covered in the park's distinctive white dust, provide unparalleled photographic opportunities as they traverse between acacia woodlands and swamps. The park's diverse habitats support an impressive array of wildlife including lions, cheetahs, buffalo, giraffes, zebras, and wildebeest. Observation Hill offers 360-degree views of the entire park, while Enkongo Narok Swamp attracts large concentrations of wildlife during dry seasons. The park is also a birdwatcher's paradise with over 400 species recorded, including numerous water birds in the swamps and wetlands."
      wildlife={[
        "African Elephants",
        "Lions",
        "Cheetahs",
        "Buffalo",
        "Giraffes",
        "Zebras",
        "Wildebeest",
        "Hyenas",
        "Jackals",
        "Warthogs",
        "Hippos",
        "Pelicans & Flamingos"
      ]}
      activities={[
        "Game drives with Kilimanjaro views",
        "Nature walks in designated areas",
        "Bird watching expeditions",
        "Visit Observation Hill for panoramic views",
        "Maasai village cultural experiences",
        "Photography safaris specializing in elephants",
        "Sunrise and sunset game drives",
        "Visit Amboseli Elephant Research Project"
      ]}
      accommodation={[
        "Luxury lodges with Kilimanjaro views",
        "Tented camps near swamps",
        "Budget campsites within the park",
        "Eco-lodges in surrounding conservancies",
        "Private houses for groups"
      ]}
      gettingThere="Amboseli National Park is located 240 kilometers southeast of Nairobi. By road, the journey takes approximately 4 hours via Namanga Road, with well-maintained tarmac for most of the route. The park has two main gates: Meshanani Gate (main entrance) and Iremito Gate. By air, scheduled and charter flights operate from Nairobi's Wilson Airport to Amboseli Airstrip, with flight times of about 40 minutes. The park's proximity to the Tanzanian border makes it a popular addition to circuits combining Kenyan and Tanzanian destinations. Roads within the park are mostly graded earth suitable for regular safari vehicles."
      tips={[
        "Best Kilimanjaro views are early morning before clouds form",
        "Bring dust protection for cameras and electronics",
        "Book lodges on park's east for best mountain views",
        "Visit during dry season for concentrated wildlife",
        "Yellow fever vaccination required if coming from endemic areas",
        "Respect elephant herds - maintain 30-meter distance",
        "Carry sunscreen and hat - minimal shade available",
        "Consider combining with Tsavo for extended safari"
      ]}
    />
  );
};

export default Amboseli;
