import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie, Settings, Eye, Shield } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Cookie className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
              <p className="text-xl text-primary-foreground/90">
                How we use cookies to improve your browsing experience
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                This Cookie Policy explains how Tolyns Tours & Travel ("we," "our," or "us") uses cookies 
                and similar tracking technologies on our website. By using our website, you consent to the 
                use of cookies as described in this policy.
              </p>
              <p className="text-muted-foreground">
                This policy should be read in conjunction with our Privacy Policy and Terms of Service.
              </p>
            </div>

            {/* What Are Cookies */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">What Are Cookies?</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit a website. They are widely used to make websites work more efficiently and provide 
                information to website owners.
              </p>
              <p className="text-muted-foreground">
                Cookies help us understand how visitors interact with our website, remember your preferences, 
                and improve your overall browsing experience.
              </p>
            </div>

            {/* Types of Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Types of Cookies We Use</h2>
              
              {/* Essential Cookies */}
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">Essential Cookies (Strictly Necessary)</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  These cookies are necessary for the website to function properly. They enable core 
                  functionality such as security, network management, and accessibility.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Purpose:</strong> Session management, security, basic website functionality
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> Session or up to 1 year
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Note:</strong> These cookies cannot be disabled as they are essential for the website to work.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">Analytics and Performance Cookies</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  These cookies collect information about how visitors use our website, such as which pages 
                  are visited most often and if error messages are received. This helps us improve how our 
                  website works.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-3">
                  <li>Google Analytics - tracks visitor behavior and traffic sources</li>
                  <li>Performance monitoring - measures page load times and technical performance</li>
                  <li>Error tracking - helps identify and fix technical issues</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> Up to 2 years
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">Functional Cookies</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  These cookies allow the website to remember choices you make (such as your language 
                  preference or currency) and provide enhanced, personalized features.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-3">
                  <li>Language preferences</li>
                  <li>Currency selection</li>
                  <li>Form data retention for convenience</li>
                  <li>Remember login status</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> Session or up to 1 year
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3">Marketing and Targeting Cookies</h3>
                <p className="text-muted-foreground mb-3">
                  These cookies track your browsing habits to deliver advertisements that are more relevant 
                  to you and your interests. They may also be used to limit the number of times you see an 
                  advertisement and measure the effectiveness of advertising campaigns.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Examples:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mb-3">
                  <li>Facebook Pixel - tracks conversions from Facebook ads</li>
                  <li>Google Ads - delivers targeted advertising</li>
                  <li>Retargeting cookies - show relevant ads on other websites</li>
                  <li>Social media cookies - allow sharing content on social platforms</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  <strong>Duration:</strong> Up to 2 years
                </p>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Some cookies on our website are set by third-party services that appear on our pages. 
                We use the following third-party services:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Google Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Helps us understand how visitors interact with our website by collecting and reporting 
                    information anonymously.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Social Media Platforms</h4>
                  <p className="text-sm text-muted-foreground">
                    Facebook, Instagram, Twitter, and LinkedIn cookies enable social sharing and may track 
                    your interactions with social media content on our site.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Payment Processors</h4>
                  <p className="text-sm text-muted-foreground">
                    Cookies from payment service providers ensure secure transaction processing.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-semibold mb-2">Booking Systems</h4>
                  <p className="text-sm text-muted-foreground">
                    Third-party booking and reservation systems may use cookies to manage your inquiries and bookings.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie Duration */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Cookie Duration</h2>
              <p className="text-muted-foreground mb-4">
                Cookies can be classified by how long they remain on your device:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Session Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Temporary cookies that are deleted when you close your browser. They are essential for 
                    browsing our website and completing bookings.
                  </p>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Persistent Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Remain on your device for a set period (or until you delete them). They help remember 
                    your preferences for future visits.
                  </p>
                </div>
              </div>
            </div>

            {/* Managing Cookies */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">How to Manage Cookies</h2>
              </div>
              
              <p className="text-muted-foreground mb-4">
                You have the right to decide whether to accept or reject cookies. You can manage your 
                cookie preferences in several ways:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Browser Settings</h3>
              <p className="text-muted-foreground mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your 
                browser to refuse cookies or delete certain cookies. Here's how:
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 rounded px-3 py-1 text-sm font-semibold mt-1">Chrome</div>
                  <p className="text-sm text-muted-foreground flex-1">
                    Settings → Privacy and security → Cookies and other site data
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 rounded px-3 py-1 text-sm font-semibold mt-1">Firefox</div>
                  <p className="text-sm text-muted-foreground flex-1">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 rounded px-3 py-1 text-sm font-semibold mt-1">Safari</div>
                  <p className="text-sm text-muted-foreground flex-1">
                    Preferences → Privacy → Cookies and website data
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-accent/20 rounded px-3 py-1 text-sm font-semibold mt-1">Edge</div>
                  <p className="text-sm text-muted-foreground flex-1">
                    Settings → Privacy, search, and services → Cookies and site permissions
                  </p>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground">
                  <strong>Please note:</strong> If you disable or refuse cookies, some parts of our website 
                  may not function properly, and you may not be able to complete bookings or access certain features.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Opt-Out Tools</h3>
              <p className="text-muted-foreground mb-3">
                You can opt out of targeted advertising from many ad networks:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Google Ads Settings: <a href="https://adssettings.google.com" className="text-accent hover:underline">adssettings.google.com</a></li>
                <li>Facebook Ad Preferences: <a href="https://www.facebook.com/ads/preferences" className="text-accent hover:underline">facebook.com/ads/preferences</a></li>
                <li>Digital Advertising Alliance: <a href="http://optout.aboutads.info" className="text-accent hover:underline">optout.aboutads.info</a></li>
                <li>Network Advertising Initiative: <a href="http://optout.networkadvertising.org" className="text-accent hover:underline">optout.networkadvertising.org</a></li>
              </ul>
            </div>

            {/* Do Not Track */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Do Not Track Signals</h2>
              <p className="text-muted-foreground">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not 
                want to have your online activities tracked. Currently, there is no uniform standard for 
                recognizing and implementing DNT signals, so our website does not respond to DNT browser signals.
              </p>
            </div>

            {/* Mobile Devices */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Mobile Devices</h2>
              <p className="text-muted-foreground mb-4">
                Mobile devices may have settings for cookies and tracking:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>iOS:</strong> Settings → Safari → Block All Cookies</li>
                <li><strong>Android:</strong> Browser Settings → Site Settings → Cookies</li>
              </ul>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Changes to This Cookie Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our practices or 
                for legal, regulatory, or operational reasons. We will notify you of any material changes by 
                posting the updated policy on our website with a new "Last Updated" date.
              </p>
            </div>

            {/* More Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">More Information About Cookies</h2>
              <p className="text-muted-foreground mb-4">
                To learn more about cookies and how they work, visit:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><a href="https://www.allaboutcookies.org" className="text-accent hover:underline">AllAboutCookies.org</a></li>
                <li><a href="https://www.youronlinechoices.com" className="text-accent hover:underline">YourOnlineChoices.com</a></li>
                <li><a href="https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies/" className="text-accent hover:underline">ICO Guide to Cookies</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Contact Us About Cookies</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              
              <div className="space-y-3">
                <p><strong>Tolyns Tours & Travel</strong></p>
                <p className="text-muted-foreground">Suite 305, Prestige Plaza, Ngong Road, Nairobi, Kenya</p>
                <p className="text-muted-foreground">Email: privacy@tolynstours.co.ke</p>
                <p className="text-muted-foreground">Phone: +254725252412</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;