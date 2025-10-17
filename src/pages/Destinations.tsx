import Header from "@/components/Header";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32">
        <Destinations />
      </div>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
