import DestinationDetail from "@/components/DestinationDetail";
import heroImage from "@/assets/lamu-old-town.jpg";
import street from "@/assets/destinations/lamu-old-town-street.jpg";
import dhow from "@/assets/destinations/lamu-dhow-sailing.jpg";

const LamuIsland = () => {
  return (
    <DestinationDetail
      name="Lamu Island"
      location="Lamu Archipelago, North Coast Kenya"
      description="Step back in time in this UNESCO World Heritage Site, where donkeys outnumber cars and Swahili culture thrives in winding stone streets."
      heroImage={heroImage}
      gallery={[street, dhow, heroImage, street]}
      highlights={[
        "UNESCO World Heritage Old Town",
        "13th-century Swahili architecture",
        "Traditional dhow sailing",
        "Intricately carved wooden doors",
        "Pristine unspoiled beaches",
        "Vibrant cultural festivals"
      ]}
      duration="3-5 Days"
      difficulty="Easy & Relaxing"
      bestTime="December - March & July - October"
      rating={4.5}
      overview="Lamu Island, Kenya's oldest continually inhabited town and a UNESCO World Heritage Site, offers a unique journey into East Africa's Swahili past. Founded in the 14th century, Lamu Old Town is the best-preserved Swahili settlement in East Africa, with architecture reflecting centuries of Arab, Persian, Indian, and European influences. The island maintains its medieval charm - narrow winding streets too small for cars, donkeys serving as the primary transport, and traditional dhow vessels plying the waters as they have for centuries. Magnificent Swahili houses feature elaborately carved wooden doors, coral stone walls, and inner courtyards, exemplifying Islamic architectural principles adapted to tropical coastal living. The island's relaxed, timeless atmosphere provides a stark contrast to Kenya's bustling cities. Lamu Town's waterfront is lined with historic buildings housing atmospheric cafes, art galleries, and craft shops. Beyond the town, pristine beaches stretch along the eastern shore, while nearby islands like Manda and Pate offer additional historical sites and secluded shores. The island hosts colorful cultural festivals including the famous Lamu Cultural Festival celebrating Swahili heritage through traditional dhow races, donkey races, henna painting, and Taarab music performances. Lamu's cuisine reflects its cosmopolitan history, with Swahili dishes incorporating Arabic and Indian spices."
      wildlife={[
        "Sea Turtles",
        "Dolphins",
        "Various Reef Fish",
        "Monkeys",
        "Tropical Birds",
        "Donkeys (cultural)"
      ]}
      activities={[
        "Walking tours of Lamu Old Town",
        "Traditional dhow sailing excursions",
        "Visits to Lamu Museum and Swahili House Museum",
        "Exploring historic mosques and forts",
        "Photographing intricately carved doors",
        "Shela Beach relaxation and water sports",
        "Sunset cruises with sundowners",
        "Day trips to Manda and Pate Islands",
        "Snorkeling at Kiunga Marine Reserve",
        "Learning traditional Swahili cooking",
        "Shopping for local crafts and antiques",
        "Attending cultural festivals (seasonal)"
      ]}
      accommodation={[
        "Historic boutique hotels in renovated Swahili houses",
        "Luxury beachfront resorts in Shela village",
        "Traditional guesthouses with rooftop terraces",
        "Eco-lodges on secluded beaches",
        "Private rental houses with local staff"
      ]}
      gettingThere="Lamu is located approximately 341 kilometers northeast of Mombasa. By air is the preferred route: daily flights operate from Nairobi (Wilson Airport) to Manda Airport on Manda Island, taking approximately 1 hour 15 minutes. From Manda Airport, a short boat transfer (5-10 minutes) crosses the channel to Lamu Island - boats meet all flights. Alternatively, from Mombasa, travelers can fly to Malindi (30 minutes) then take a road transfer to Lamu (2-3 hours), though this route is less common. Road access from Nairobi via Garsen is possible but takes 10-12 hours on challenging roads. Once on Lamu Island, all transport is by foot, donkey, or boat - no motorized vehicles exist within Lamu Old Town."
      tips={[
        "Dress modestly out of respect for local Muslim culture",
        "Remove shoes when entering mosques and homes",
        "Negotiate dhow prices before departure",
        "Visit Lamu Museum for historical context before exploring",
        "Try Swahili coffee and fresh coconut juice from street vendors",
        "Bring cash - few places accept cards",
        "Best time to visit beaches is afternoon when tide is high",
        "Hire local guide for deeper cultural understanding",
        "Attend Maulidi Festival (Prophet's birthday) for authentic celebrations",
        "Protect yourself from strong sun - minimal shade in town"
      ]}
    />
  );
};

export default LamuIsland;
