import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
const caseStudies = [{
  title: "Yoma (Youth Agency Marketplace)",
  challenge: "Youth unemployment is a systemic challenge across Africa. Millions of young people lack access to opportunities, while governments, NGOs, and employers struggle to coordinate efforts at scale. Traditional top-down programs excluded many of the very youth they aimed to serve.",
  approach: ["Distribute power – positioned young people not as beneficiaries, but as agents with control over their own skills and opportunities.", "Tech as enabler - Youth ownership was translated literacy, with a decentralized blockchain and wallet credentialing systems built on unique digital identities.", "Experiment over prediction – incubated a series of pilots with NGO's, training institutions and employers, to test base assumptions about the workforce market failure.", "Redefine success – focused on agency and employability gains for youth, not just platform growth metrics.", "Change is shared – built Yoma as an ecosystem, with UNICEF, corporates, startups, and young people all co-creating value."],
  outcome: ["A live platform with 1M+ youth profiles, offering skills-building, work opportunities, and income-generation across multiple countries.", "Verified learning and impact credentials powered by blockchain—enhancing trust and transparency.", "Rapidly expanding partnerships to include the public and private sector, ensuring sustainability and ecosystem-wide adoption."]
}, {
  title: "African Coding Network",
  challenge: "Across Africa, demand for digital skills far outpaces traditional training pathways. Employers need job-ready developers, yet education systems remain slow, centralized, and disconnected from real-world needs.",
  approach: ["Power at the edges – partnered directly with grassroots coding schools and learners.", "Experiment over prediction – piloted modular programs across different contexts instead of committing to one rigid model.", "Every voice counts – co-designed learning pathways with educators, employers, and learners to ensure relevance and adoption.", "Tech as enabler – developed Tila, an open-source learning management system tailored to distributed networks of training providers for remote first coding instruction."],
  outcome: ["A distributed model that scaled across African coding schools, creating a pan-African developer pipeline without imposing a single centralized standard.", "Tilda LMS enabled transparency and shared ownership—allowing local schools to adapt or add to the open source project, while maintaining interoperability across the network.", "Thousands of learners gained access to coding pathways built for resilience, with programs continuing to grow organically."]
}, {
  title: "Akoranga",
  challenge: "After a 2025 education policy shift, teachers in New Zealand needed custom decodable books aligned with the phonics-based literacy curriculum. Existing materials were scarce, expensive or not locally and culturally relevant, often couldn't meet the diverse needs of learners—making it difficult to deliver consistent, evidence-based literacy support.",
  approach: ["Every voice counts – co-designed the platform with teachers, parents and literacy experts to ensure it fits real classroom needs.", "Experiment over prediction – piloted AI-generated books through low tech early prototypes testing with parents and teachers- and of course - children.", "Tech as enabler – leveraged AI to create custom materials only, while keeping pedagogical decisions in human hands.", "Start with the smallest unit – focused on individual student profiles, phonics stages, and learning sequences to maximize relevance and learning progress."],
  outcome: ["Teachers can now create personalized, curriculum-aligned decodable books in minutes, saving time and effort.", "Students receive reading materials tailored to their learning stage and interests, improving confidence and literacy progress.", "Akoranga demonstrates how human-centered AI can amplify educator impact while maintaining inclusion, adaptability, and sustainable outcomes."]
}, {
  title: "Bloom",
  challenge: "Approximately 1 in 100 children worldwide are diagnosed with autism spectrum disorder. While professional support is critical for development, it represents only a small fraction of a child's week. The reality is that meaningful progress happens daily—during mealtimes, playtime, and the countless small moments that make up family life. Parents need practical guidance they can apply in these everyday situations.",
  approach: ["Every voice counts – built by parents, therapists and technology specialists who understand both the challenges families face and the proven approaches that make a difference.", "Start with the smallest unit – focused on everyday moments at home where children spend most of their time, translating professional expertise into practical daily support.", "Tech as enabler – created digital tools for development benchmarks, personalized activity recommendations, and progress tracking while keeping therapeutic decisions in expert hands.", "Change is shared – combined clinical expertise with the unique insight and dedication that only parents can provide, ensuring families have access to professional-grade support at home."],
  outcome: ["Parents can now track their child's development through routine benchmarks and see meaningful progress over time.", "Personalized activity recommendations help families apply evidence-based strategies with confidence in their daily routines.", "Simple habit-building and task management tools help parents stay consistent, while progress insights reveal what makes the biggest difference for their child."]
}];
export const CaseStudies = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return <section className="bg-background py-[76px]">
      <div className="container-narrow">
        <h2 className="heading-lg mb-16 text-center">Case Studies</h2>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current 
                  ? "bg-primary w-6" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto" setApi={setApi}>
          <CarouselContent>
            {caseStudies.map((study, index) => <CarouselItem key={index}>
                <Card className="border-border/20">
                  <CardContent className="p-8 md:p-12">
                    <h3 className="heading-md mb-8 text-foreground">
                      Case Study: {study.title}
                    </h3>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-medium mb-4 text-foreground">Challenge</h4>
                        <p className="body-md text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-4 text-foreground">Smaller Approach</h4>
                        <div className="space-y-3">
                          {study.approach.map((item, i) => <p key={i} className="body-sm text-muted-foreground leading-relaxed">
                              {item}
                            </p>)}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-4 text-foreground">Outcome</h4>
                        <div className="space-y-3">
                          {study.outcome.map((item, i) => <p key={i} className="body-sm text-muted-foreground leading-relaxed">
                              {item}
                            </p>)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>;
};