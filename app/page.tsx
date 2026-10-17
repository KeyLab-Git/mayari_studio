import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const totalSections = 6;

  return (
    <>
      <Header />
      <Hero />
      <ScrollIndicator totalSections={totalSections} />
    </>
  );
}
