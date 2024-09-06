import Image from "next/image";
import Hero from "./components/hero/Hero";
import Cards from "./components/cards/Cards";
import Marketing from "./components/marketing/Marketing";

export default function Home() {
  return (
    <main className="flex bg-primary/20 min-h-screen flex-col items-center">
      <Hero />
      <Cards />
      <Marketing />
    </main>
  );
}
