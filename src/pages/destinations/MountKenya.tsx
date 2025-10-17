import DestinationDetail from "@/components/DestinationDetail";
import heroImage from "@/assets/mount-kenya-summit.jpg";
import peak from "@/assets/destinations/mount-kenya-peak.jpg";
import flora from "@/assets/destinations/mount-kenya-flora.jpg";

const MountKenya = () => {
  return (
    <DestinationDetail
      name="Mount Kenya"
      location="Central Kenya, Straddling the Equator"
      description="Challenge yourself to climb Africa's second-highest mountain, traversing through five distinct vegetation zones from tropical forest to glacial peaks."
      heroImage={heroImage}
      gallery={[peak, flora, heroImage, peak]}
      highlights={[
        "Point Lenana summit at 4,985 meters",
        "Unique afro-alpine vegetation",
        "Giant groundsels and lobelia plants",
        "Lewis Glacier viewpoints",
        "UNESCO World Heritage Site",
        "Technical rock climbing routes"
      ]}
      duration="4-6 Days"
      difficulty="Challenging"
      bestTime="January - February & August - September"
      rating={4.6}
      overview="Mount Kenya, Africa's second-highest mountain at 5,199 meters, is an extinct volcano that last erupted over 2.5 million years ago. The mountain features three main peaks: Batian (5,199m) and Nelion (5,188m), which require technical climbing skills, and Point Lenana (4,985m), accessible to fit trekkers without mountaineering experience. Mount Kenya offers one of the world's most spectacular high-altitude trekking experiences, traversing through five distinct ecological zones. Climbers begin in dense bamboo and cloud forests inhabited by elephants and buffalo, ascend through giant heather and afro-alpine moorlands featuring bizarre giant groundsels and lobelia plants found nowhere else on earth, before reaching the dramatic glacial zone with permanent snow fields. The mountain holds deep spiritual significance for the Kikuyu people, who call it 'Kirinyaga' (where God dwells). As a UNESCO World Heritage Site, Mount Kenya protects unique ecosystems and rare species including rock hyraxes, Mount Kenya mole rats, and various sunbird species. Several routes of varying difficulty lead to Point Lenana, with Sirimon-Chogoria traverse offering the most scenic variation. The climb requires proper acclimatization, with most routes taking 4-6 days to safely reach the summit and return."
      wildlife={[
        "Mountain Elephants",
        "Buffalo",
        "Black & White Colobus Monkeys",
        "Rock Hyraxes",
        "Duikers",
        "Leopards",
        "Sunbirds",
        "Eagles",
        "Mount Kenya Mole Rats"
      ]}
      activities={[
        "Point Lenana summit trekking (4,985m)",
        "Technical rock climbing on Batian and Nelion",
        "Wildlife viewing in lower forest zones",
        "Glacier viewing and photography",
        "Afro-alpine flora observation",
        "High-altitude camping experiences",
        "Mountain photography expeditions",
        "Exploring Teleki Valley and glacial tarns"
      ]}
      accommodation={[
        "Mountain huts along trekking routes",
        "Full-service camping with porters and cooks",
        "Self-catering mountain cabins",
        "Luxury lodges at mountain base",
        "Bunk houses at higher elevations"
      ]}
      gettingThere="Mount Kenya is located approximately 175 kilometers north of Nairobi. The three main approach routes have different starting points: Sirimon Route starts at Sirimon Gate (2,650m) near Nanyuki town, accessible via a 3-4 hour drive from Nairobi. Chogoria Route begins at Chogoria town on the eastern side, while Naro Moru Route starts from Naro Moru town directly west of the mountain. All towns are accessible by public transport (matatus) from Nairobi, though most trekkers arrange private transfers. Nanyuki Airstrip receives charter flights from Nairobi (35 minutes). Within Mount Kenya National Park, 4x4 vehicles are required for the rough forest tracks leading to trailheads. Most tour operators include all transfers in their packages."
      tips={[
        "Proper acclimatization crucial - avoid rapid ascent",
        "Train physically for 6-8 weeks before the climb",
        "Pack for extreme temperature variations (-10°C to 25°C)",
        "Bring high-quality sleeping bag rated to -10°C",
        "Hire experienced guides familiar with altitude sickness",
        "Start summit push at 3am to reach before clouds",
        "Carry water purification tablets or filter",
        "Book huts in advance during peak season",
        "Consider Diamox for altitude sickness prevention (consult doctor)",
        "Travel insurance covering high-altitude trekking essential"
      ]}
    />
  );
};

export default MountKenya;
