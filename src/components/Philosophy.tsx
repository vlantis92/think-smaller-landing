import { Button } from "@/components/ui/button";

export const Philosophy = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="heading-lg mb-6">Our Philosophy – Why Smaller</h2>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="body-md text-muted-foreground">
              Today's biggest problems—climate change, inequality, fragile democracies—are rooted in 
              systems built on scale, centralization, and concentrated power. The same mindset of 
              "bigger and faster" that created these crises won't solve them.
            </p>
            
            <p className="body-md text-foreground font-medium">
              There's another way: Smaller by design.
            </p>
            
            <p className="body-md text-muted-foreground">
              By redistributing power and trust to the smallest units—individuals, communities, 
              ecosystems—and by testing incremental steps that compound over time, we create 
              solutions that are more resilient, inclusive, and sustainable.
            </p>
            
            <p className="body-md text-muted-foreground">
              Real change doesn't come from sweeping plans or distant experts. It comes from 
              smaller actions, shared ownership, and systemic shifts built from the ground up.
            </p>
          </div>
          
          <div className="text-center pt-8">
            <Button variant="outline" size="lg" className="btn-outline px-8 py-4">
              Read the Smaller manifesto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};