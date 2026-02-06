import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Destinations } from "@/components/destinations";
import { Experiences } from "@/components/experiences";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Chatbot } from "@/components/chatbot";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <Destinations />
      <Experiences />
      <About />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
