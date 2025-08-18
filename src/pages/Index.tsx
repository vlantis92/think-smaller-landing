import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Approach } from "@/components/Approach";
import { Services } from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Philosophy />
      <Approach />
      <Services />
    </div>
  );
};

export default Index;
