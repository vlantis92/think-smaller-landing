import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Approach } from "@/components/Approach";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Philosophy />
      <Approach />
      <Services />
      <CaseStudies />
    </div>
  );
};

export default Index;
