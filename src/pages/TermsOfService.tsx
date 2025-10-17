import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, AlertTriangle, CheckCircle, Scale } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
              <p className="text-xl text-primary-foreground/90">
                Please read these terms carefully before using our services
              </p>
              <p className="text-sm mt-4 text-primary-foreground/70">
                Last Updated: October 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your use of Tolyns Tours & Travel's services 
                and website. By booking with us or using our website, you agree to be bound by these Terms. 
                Please read them carefully.
              </p>
            </div>

            {/* Agreement to Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">Agreement to Terms</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                By accessing or using our services, you acknowledge that you have read, understood, and 
                agree to be bound by these Terms and our Privacy Policy. If you do not agree with these 
                Terms, please do not use our services.
              </p>
              <p className="text-muted-foreground">
                Tolyns Tours & Travel is a licensed tour operator registered with the Tourism Regulatory 
                Authority (TRA) of Kenya and a member of the Kenya Association of Tour Operators (KATO).
              </p>
            </div>

            {/* Booking and Reservations */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Booking and Reservations</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Making a Booking</h3>
              <p className="text-muted-foreground mb-4">
                All bookings are subject to availability and confirmation. A booking is confirmed only 
                when we issue a written confirmation (email or booking confirmation document) and receive 
                the required deposit or full payment.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Deposit and Payment</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>A deposit of 30% of the total tour cost is required at the time of booking</li>
                <li>The balance must be paid at least 30 days before the tour departure date</li>
                <li>Bookings made within 30 days of departure require full payment</li>
                <li>We accept payment via bank transfer, credit card, and mobile money (M-Pesa)</li>
                <li>All prices are quoted in USD unless otherwise stated</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Prices</h3>
              <p className="text-muted-foreground mb-4">
                Prices are subject to change until a booking is confirmed and deposit received. We reserve 
                the right to adjust prices due to changes in taxes, park fees, fuel costs, or currency fluctuations.
              </p>
            </div>

            {/* Cancellation Policy */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">Cancellation and Refund Policy</h2>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Cancellation by Client</h3>
              <p className="text-muted-foreground mb-4">
                Cancellation charges apply as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>60+ days before departure:</strong> 10% of total tour cost</li>
                <li><strong>30-59 days before departure:</strong> 50% of total tour cost</li>
                <li><strong>15-29 days before departure:</strong> 75% of total tour cost</li>
                <li><strong>Less than 15 days before departure:</strong> 100% of total tour cost (no refund)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Cancellations must be communicated in writing via email. The cancellation date is when we receive your written notice.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cancellation by Tolyns Tours & Travel</h3>
              <p className="text-muted-foreground mb-4">
                We reserve the right to cancel or modify tours due to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Insufficient bookings to operate the tour economically</li>
                <li>Force majeure events (natural disasters, political instability, pandemic)</li>
                <li>Safety concerns or government travel advisories</li>
                <li>Operational reasons beyond our control</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                In such cases, you will receive a full refund or the option to transfer to an alternative tour.
              </p>
            </div>

            {/* Travel Documents */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Travel Documents and Requirements</h2>
              <p className="text-muted-foreground mb-4">
                It is your responsibility to ensure you have:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>A valid passport with at least 6 months validity from the date of travel</li>
                <li>Appropriate visas for Kenya and any transit countries</li>
                <li>Required vaccinations (Yellow Fever certificate may be required)</li>
                <li>Travel insurance covering medical expenses, evacuation, and trip cancellation</li>
                <li>Any other documents required for your specific itinerary</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We are not responsible for any costs incurred due to invalid or missing travel documents.
              </p>
            </div>

            {/* Travel Insurance */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Travel Insurance</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Travel insurance is mandatory for all our tours.</strong> Your insurance policy must cover:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Medical expenses and emergency evacuation</li>
                <li>Trip cancellation and interruption</li>
                <li>Lost or damaged baggage</li>
                <li>Personal liability</li>
                <li>Adventure activities (if applicable to your tour)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We can assist you in obtaining appropriate travel insurance if needed.
              </p>
            </div>

            {/* Health and Safety */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">Health and Safety</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                You must inform us of any medical conditions, dietary requirements, or disabilities at the 
                time of booking. We will make reasonable efforts to accommodate your needs, but some 
                activities may not be suitable for certain health conditions.
              </p>
              <p className="text-muted-foreground mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Obtaining medical advice regarding vaccinations and health precautions</li>
                <li>Bringing necessary medications and prescriptions</li>
                <li>Following safety guidelines provided by our guides and partners</li>
                <li>Behaving responsibly and not endangering yourself or others</li>
              </ul>
            </div>

            {/* Liability and Disclaimer */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Liability and Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                Tolyns Tours & Travel acts as an agent for various service providers including hotels, 
                airlines, transport companies, and activity operators. We are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Acts or omissions of third-party service providers</li>
                <li>Accidents, injuries, illness, or death during the tour</li>
                <li>Loss or damage to personal property</li>
                <li>Delays, cancellations, or changes by airlines or other service providers</li>
                <li>Force majeure events beyond our reasonable control</li>
                <li>Wildlife behavior or encounters during safaris</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Our liability is limited to the total amount paid for your tour. We strongly recommend 
                comprehensive travel insurance to cover these risks.
              </p>
            </div>

            {/* Conduct and Behavior */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Conduct and Behavior</h2>
              <p className="text-muted-foreground mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Respect local customs, cultures, and laws</li>
                <li>Follow wildlife viewing guidelines and conservation rules</li>
                <li>Treat guides, staff, and fellow travelers with respect</li>
                <li>Not engage in illegal activities or behavior that endangers others</li>
                <li>Arrive on time for scheduled activities and departures</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We reserve the right to terminate your tour immediately if your behavior is deemed 
                inappropriate, illegal, or dangerous. No refund will be provided in such cases.
              </p>
            </div>

            {/* Photography and Media */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Photography and Media</h2>
              <p className="text-muted-foreground">
                We may take photographs or videos during tours for marketing purposes. By booking with us, 
                you consent to the use of such media on our website, social media, and promotional materials. 
                If you do not wish to be photographed, please inform us in writing before the tour.
              </p>
            </div>

            {/* Changes to Itinerary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Changes to Itinerary</h2>
              <p className="text-muted-foreground mb-4">
                While we make every effort to operate tours as described, we reserve the right to modify 
                itineraries due to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Weather conditions or road accessibility</li>
                <li>Wildlife movements and park regulations</li>
                <li>Accommodation availability</li>
                <li>Safety concerns or unforeseen circumstances</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We will provide suitable alternatives where possible, but no compensation or refund is 
                due for necessary itinerary changes.
              </p>
            </div>

            {/* Complaints */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Complaints and Disputes</h2>
              <p className="text-muted-foreground mb-4">
                If you have a complaint during your tour, please notify your guide or contact our office 
                immediately so we can attempt to resolve the issue. Written complaints must be submitted 
                within 30 days of tour completion to privacy@tolynstours.co.ke.
              </p>
              <p className="text-muted-foreground">
                Any disputes will be governed by the laws of Kenya and subject to the exclusive jurisdiction 
                of Kenyan courts.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on our website, including text, images, logos, and itineraries, is the property 
                of Tolyns Tours & Travel and protected by copyright laws. You may not reproduce, distribute, 
                or use our content without written permission.
              </p>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Privacy and Data Protection</h2>
              <p className="text-muted-foreground">
                We collect and process your personal information in accordance with our Privacy Policy and 
                the Kenya Data Protection Act, 2019. Please review our Privacy Policy to understand how we 
                handle your data.
              </p>
            </div>

            {/* Amendments */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Amendments to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. Changes will be posted on our 
                website with an updated "Last Updated" date. Your continued use of our services after 
                changes constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining 
                provisions will continue in full force and effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-3">
                <p><strong>Tolyns Tours & Travel</strong></p>
                <p className="text-muted-foreground">Suite 305, Prestige Plaza, Ngong Road, Nairobi, Kenya</p>
                <p className="text-muted-foreground">Email: info@tolynstours.co.ke</p>
                <p className="text-muted-foreground">Phone: +254725252412</p>
                <p className="text-muted-foreground">WhatsApp: +254725252412</p>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  <strong>Licensing Information:</strong><br />
                  Tourism Regulatory Authority (TRA) License No.: [License Number]<br />
                  Kenya Association of Tour Operators (KATO) Member
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;