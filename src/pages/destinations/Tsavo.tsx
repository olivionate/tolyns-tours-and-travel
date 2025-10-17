import DestinationDetail from "@/components/DestinationDetail";
import heroImage from "@/assets/tsavo-red-elephants.jpg";
import waterhole from "@/assets/destinations/tsavo-red-elephants-waterhole.jpg";
import mzima from "@/assets/destinations/tsavo-mzima-springs.jpg";

const Tsavo = () => {
  return (
    <DestinationDetail
      name="Tsavo National Parks"
      location="Eastern and Coastal Kenya"
      description="Explore Kenya's largest protected wilderness, home to the legendary red elephants, diverse habitats, and rich history from the Man-Eaters of Tsavo."
      heroImage={heroImage}
      gallery={[waterhole, mzima, heroImage, waterhole]}
      highlights={[
        "Famous red elephants dusting in laterite soil",
        "Mzima Springs with underwater viewing chamber",
        "Lugard Falls on Galana River",
        "Man-Eaters of Tsavo historical sites",
        "Vast wilderness landscapes",
        "Excellent bird watching opportunities"
      ]}
      duration="2-4 Days"
      difficulty="Moderate"
      bestTime="June - October & January - February"
      rating={4.4}
      overview="Tsavo National Park, Kenya's largest protected area at nearly 22,000 square kilometers, is divided into Tsavo East and Tsavo West, each offering distinct landscapes and wildlife experiences. Tsavo East, the larger section, presents vast open plains and semi-arid scrubland dominated by red volcanic soil that stains the park's famous elephant herds, creating the iconic 'red elephants of Tsavo.' The Yatta Plateau, the world's longest lava flow, stretches across the landscape, while the Galana River creates verdant ribbons of vegetation attracting abundant wildlife. Tsavo West features more varied topography with rolling hills, extinct volcanic cones, and lush vegetation fed by natural springs. Mzima Springs, producing 50 million gallons of crystal-clear water daily from underground rivers flowing from the Chyulu Hills, features an underwater observation chamber where visitors can watch hippos and fish. Tsavo's history includes the legendary Man-Eaters of Tsavo - two maneless male lions that terrorized railway workers in 1898, killing an estimated 35-135 people during the construction of the Kenya-Uganda railway. Today, the parks protect significant elephant populations, estimated at over 12,000 individuals, along with lions, leopards, cheetahs, rhinos, buffalo, and over 500 bird species. The wilderness character of Tsavo offers a more rugged, authentic safari experience compared to more popular parks, with the reward of fewer crowds and vast, unspoiled landscapes."
      wildlife={[
        "Red Elephants",
        "Lions & Leopards",
        "Cheetahs",
        "Black Rhinos",
        "Buffalo",
        "Hippos & Crocodiles",
        "Giraffes",
        "Zebras",
        "Lesser Kudus",
        "Gerenuk Antelopes",
        "Over 500 Bird Species"
      ]}
      activities={[
        "Game drives in open 4x4 safari vehicles",
        "Visit Mzima Springs underwater observation",
        "Scenic walks at designated areas",
        "Viewing Lugard Falls and rock formations",
        "Photography safaris focusing on landscapes",
        "Bird watching expeditions",
        "Historical sites related to Man-Eaters of Tsavo",
        "Night game drives (in conservancies)",
        "Rock climbing at Roaring Rocks (Tsavo West)",
        "Visits to Ngulia Rhino Sanctuary"
      ]}
      accommodation={[
        "Safari lodges with infinity pools",
        "Luxury tented camps near waterholes",
        "Budget campsites within the parks",
        "Historic lodges with colonial charm",
        "Eco-camps in wilderness areas"
      ]}
      gettingThere="Tsavo National Parks straddle the Nairobi-Mombasa highway, making them easily accessible from both cities. Tsavo East is located approximately 325 kilometers southeast of Nairobi (5 hours drive) or 150 kilometers northwest of Mombasa (2.5 hours). Multiple gates provide access: Bachuma and Sala Gates from Mombasa highway, Voi Gate from Voi town, and Manyani Gate from Nairobi direction. Tsavo West is closer to Mombasa at 240 kilometers northwest (4 hours drive) and has several gates including Tsavo Gate, Mtito Andei Gate, and Chyulu Gate. Both parks have airstrips (Voi Airstrip in Tsavo East, Kamboyo and Kilaguni Airstrips in Tsavo West) receiving charter flights from Nairobi and coastal towns. The parks' location between Kenya's two main cities makes them popular stops on safari circuits. Roads within the parks are mostly graded earth, requiring 4x4 vehicles during rainy seasons."
      tips={[
        "Combine Tsavo East and West for complete experience",
        "Visit Mzima Springs early morning for best hippo viewing",
        "Bring plenty of water - climate can be very hot and dry",
        "Best elephant sightings at waterholes during dry season",
        "Allow extra time for game viewing - parks are vast",
        "Red dust is everywhere - protect camera equipment",
        "Stay in your vehicle except at designated areas",
        "Consider Tsavo as addition to Amboseli circuit",
        "Visit Ngulia Rhino Sanctuary for guaranteed rhino sightings",
        "Book accommodations inside parks to maximize game viewing time"
      ]}
    />
  );
};

export default Tsavo;
