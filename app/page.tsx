import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InfiniteMovingCardsContainer } from "@/components/InfiniteMovingCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfiniteMovingCardsContainer />
      <Footer />
    </>
  );
}
