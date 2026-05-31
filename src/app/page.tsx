import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Pain from "@/components/Pain";
import Offer from "@/components/Offer";
import ExampleWorkflows from "@/components/ExampleWorkflows";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clients />
        <ExampleWorkflows />
        <Pain />
        <Offer />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
