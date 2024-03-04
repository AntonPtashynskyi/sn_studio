import React from "react";
import { HeroSection } from "@/components/Hero/HeroSection";
import { Contact } from "@/components/Contact/Contact";
import { Section } from "@/components/Section/Section";
import { FAQ } from "@/components/FAQ/Faq";

const BrowsPage = () => {
  return (
    <>
      <HeroSection
        className="brows_page"
        title="Brows"
        h1Title="Szkolenia"
        description="Najlepszę szkolenie"
        h2Title="Szkolenia!"
      />
      <div className="main-section">
        <FAQ />
      </div>
      <Section title="Contact">
        <Contact />
      </Section>
    </>
  );
};

export default BrowsPage;
