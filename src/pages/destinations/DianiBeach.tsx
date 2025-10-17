import DestinationDetail from "@/components/DestinationDetail";
import heroImage from "@/assets/diani-beach-paradise.jpg";
import aerial from "@/assets/destinations/diani-beach-aerial.jpg";
import reef from "@/assets/destinations/diani-coral-reef.jpg";

const DianiBeach = () => {
  return (
    <DestinationDetail
      name="Diani Beach"
      location="South Coast, Kwale County, Kenya"
      description="Relax on one of Africa's most beautiful beaches, with pristine white sands, turquoise waters, and vibrant coral reefs perfect for snorkeling and diving."
      heroImage={heroImage}
      gallery={[aerial, reef, heroImage, aerial]}
      highlights={[
        "17km of pristine white sand beaches",
        "Crystal-clear turquoise waters",
        "Vibrant coral reefs for diving",
        "Kisite-Mpunguti Marine Park",
        "Colobus monkeys in coastal forests",
        "Year-round tropical climate"
      ]}
      duration="4-7 Days"
      difficulty="Relaxing"
      bestTime="December - March & July - October"
      rating={4.7}
      overview="Diani Beach, consistently rated among Africa's finest beaches, stretches for 17 kilometers along Kenya's south coast, offering an idyllic tropical paradise of powder-white coral sand and warm turquoise waters of the Indian Ocean. Protected by coral reefs that create calm lagoons perfect for swimming, Diani combines natural beauty with adventure opportunities. The beach is backed by dense coastal forests home to rare Angolan colobus monkeys and other wildlife, creating a unique ecosystem where tropical forest meets ocean. The offshore coral reefs of the Kisite-Mpunguti Marine National Park teem with colorful tropical fish, sea turtles, dolphins, and during season, whale sharks. Diani offers the perfect post-safari relaxation destination, with numerous water sports, dhow sailing excursions, and world-class diving sites. The cosmopolitan atmosphere features excellent restaurants serving fresh seafood, beach bars with sunset views, and a mix of luxury resorts and intimate boutique hotels. The area maintains a laid-back charm despite its popularity, with local Swahili culture evident in nearby villages and markets."
      wildlife={[
        "Angolan Colobus Monkeys",
        "Dolphins",
        "Green Sea Turtles",
        "Whale Sharks (seasonal)",
        "Tropical Reef Fish",
        "Manta Rays",
        "Blue-spotted Stingrays",
        "Bushbabies"
      ]}
      activities={[
        "Snorkeling and scuba diving at coral reefs",
        "Kite surfing and windsurfing",
        "Deep sea fishing expeditions",
        "Dolphin watching tours",
        "Traditional dhow sailing cruises",
        "Stand-up paddleboarding and kayaking",
        "Colobus monkey sanctuary visits",
        "Wasini Island day trips",
        "Shimba Hills National Reserve safari",
        "Spice farm and cultural village tours",
        "Beach horseback riding",
        "Skydiving over the Indian Ocean"
      ]}
      accommodation={[
        "All-inclusive beachfront resorts",
        "Boutique beach hotels",
        "Private beach villas with staff",
        "Eco-lodges in coastal forest",
        "Budget guesthouses near the beach"
      ]}
      gettingThere="Diani Beach is located 35 kilometers south of Mombasa. By air, Ukunda Airstrip (5km from Diani Beach) receives daily flights from Nairobi's Wilson Airport (1 hour) and connections from major safari parks. From Mombasa, travelers can take the Likoni Ferry (free for vehicles, pedestrians pay nominal fee) followed by a 30-minute drive south on a well-maintained highway. Private transfers and taxis are readily available. For those combining with Nairobi, direct road transfer takes approximately 6-7 hours. Within Diani, tuk-tuks, boda-bodas (motorcycle taxis), and regular taxis provide local transportation, while many hotels offer shuttle services."
      tips={[
        "Apply reef-safe sunscreen to protect coral ecosystems",
        "Bring water shoes for walking on coral beaches",
        "Book diving and snorkeling trips through certified operators",
        "Visit Colobus Conservation between 9am-4:30pm",
        "Bargain politely with beach vendors",
        "Respect local customs - modest dress away from beach areas",
        "Check tide times for best swimming and beach activities",
        "Try fresh seafood at Ali Barbour's Cave Restaurant",
        "Combine with safari for complete Kenya experience"
      ]}
    />
  );
};

export default DianiBeach;
