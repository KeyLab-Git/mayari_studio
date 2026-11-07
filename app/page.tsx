import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollIndicator from "@/components/ScrollIndicator";
import OurGames from "@/components/OurGames";
import MadeIn from "@/components/MadeIn";
import Trailers from "@/components/Trailers";
import WhereToPlay from "@/components/WhereToPlay";
import Footer from "@/components/Footer";
import StreamerPlays from "@/components/StreamerPlays";

export default function Home() {
  const totalSections = 6;

  return (
    <>
      <Header />
      <Hero />
      <ScrollIndicator totalSections={totalSections} />
      <OurGames />
      <MadeIn />
      <Trailers />
      <StreamerPlays />
      <WhereToPlay />
      <Footer />
    </>
  );
}
