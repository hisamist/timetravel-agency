import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Destinations } from "@/components/destinations";
import { Contact } from "@/components/contact";
import { Chatbot } from "@/components/chatbot";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Destinations />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
