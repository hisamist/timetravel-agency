import { Header } from "@/components/header";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";

export default function BookingPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Booking />
      </div>
      <Footer />
    </main>
  );
}
