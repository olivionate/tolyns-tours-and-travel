import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, Mail, Phone } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-xl text-primary-foreground/90">
                Your privacy and data security are our top priorities
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
                Tolyns Tours & Travel ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our travel services. Please read this policy carefully.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Make a booking or inquiry for our travel services</li>
                <li>Register for an account on our website</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Contact us via phone, email, or contact forms</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              
              <p className="text-muted-foreground mt-4">
                This information may include: name, email address, phone number, passport details, 
                date of birth, nationality, physical address, payment information, dietary requirements, 
                medical information relevant to travel, and emergency contact details.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">How We Use Your Information</h2>
              </div>
              
              <p className="text-muted-foreground mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Process and manage your travel bookings and reservations</li>
                <li>Communicate with you about your trips, bookings, and inquiries</li>
                <li>Provide customer support and respond to your requests</li>
                <li>Send you booking confirmations, itineraries, and travel documents</li>
                <li>Process payments and prevent fraudulent transactions</li>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Send promotional materials and newsletters (with your consent)</li>
                <li>Improve our services and website functionality</li>
                <li>Conduct market research and analytics</li>
                <li>Ensure your safety and security during travel</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">Information Sharing and Disclosure</h2>
              </div>
              
              <p className="text-muted-foreground mb-4">
                We may share your information with:
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Service Providers</h3>
              <p className="text-muted-foreground mb-4">
                Hotels, lodges, airlines, transport providers, tour operators, and other travel service 
                providers necessary to fulfill your booking.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Business Partners</h3>
              <p className="text-muted-foreground mb-4">
                Insurance companies, payment processors, and other partners who assist in delivering our services.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Legal Authorities</h3>
              <p className="text-muted-foreground mb-4">
                Government agencies, law enforcement, or regulatory bodies when required by law or to protect our rights.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">National Parks and Conservation Authorities</h3>
              <p className="text-muted-foreground mb-4">
                Kenya Wildlife Service (KWS), Kenya Forest Service (KFS), and other conservation authorities 
                for permit processing and park entry.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational security measures to protect your 
                personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Secure servers and databases with restricted access</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection and privacy</li>
                <li>Compliance with Kenya's Data Protection Act, 2019</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">
                Under the Kenya Data Protection Act, 2019, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal data we hold about you</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time (where processing is based on consent)</li>
                <li>Lodge a complaint with the Office of the Data Protection Commissioner</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise any of these rights, please contact our Data Protection Officer using the details below.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and personalize content. You can control cookies through your 
                browser settings. For more information, please see our Cookie Policy.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and 
                enforce our agreements. Booking records are typically retained for 7 years in accordance 
                with Kenyan tax and financial regulations.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and processed in countries outside Kenya, including 
                countries where our service providers are located. We ensure that appropriate safeguards 
                are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed to individuals under the age of 18. We do not knowingly 
                collect personal information from children without parental consent. If you believe we 
                have collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
                We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">privacy@tolynstours.co.ke</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+254725252412</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      Suite 305, Prestige Plaza, Ngong Road<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  <strong>Office of the Data Protection Commissioner:</strong><br />
                  If you are not satisfied with our response, you may lodge a complaint with the 
                  Office of the Data Protection Commissioner of Kenya at{" "}
                  <a href="https://www.odpc.go.ke" className="text-accent hover:underline">www.odpc.go.ke</a>
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

export default PrivacyPolicy;