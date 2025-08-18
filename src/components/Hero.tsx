import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
export const Hero = () => {
  return <section className="py-12 md:py-20">
      <div className="container-narrow">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>
          
          <div className="space-y-6">
            <h1 className="heading-xl">
              Today's wicked problems, made smaller.
            </h1>
            
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">Smaller is a product and strategy partner helping mission-led organisations think Smaller. By putting values and people at the center, we use technology to unlock access, foster inclusion, and create systemic impact in small. incremental. steps.</p>
          </div>
          
          <div className="pt-4">
            <Button 
              size="lg" 
              className="btn-accent px-8 py-4 text-lg"
              onClick={() => window.location.href = "mailto:warwick@smallerby.design"}
            >
              Let's make a problem smaller
            </Button>
          </div>
        </div>
      </div>
    </section>;
};