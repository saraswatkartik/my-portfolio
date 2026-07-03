import ContactCTA from "../components/ContactPage/ContactCTA/ContactCTA";
import ContactHero from "../components/ContactPage/ContactHero/ContactHero";
import ContactSection from "../components/ContactPage/ContactSection/ContactSection";
import FAQSection from "../components/ContactPage/FAQSection/FAQSection";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
};

export default Contact;