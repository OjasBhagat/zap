import { AppBar } from "@/components/AppBar";
import { Hero } from "@/components/Hero";
import { HeroVideo } from "@/components/HeroVideo";


export default function Home() {
  return (
    <main className="pb-40 ">
      <AppBar/>
      <Hero />
      <div className="pt-8"></div>
      <HeroVideo />
    </main>
  );
}
