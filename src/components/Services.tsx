import { Button } from "@/components/ui/button";

export const Services = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-narrow">
        <div className="space-y-16">
          {/* Strategy Services */}
          <div className="space-y-6">
            <h2 className="heading-lg">Strategy Services</h2>
            <p className="body-md text-muted-foreground max-w-4xl">
              Let us help support your mission, making the big problems you're tackling– smaller– 
              one step at a time. We'll use the Smaller approach to help you find clarity within 
              increasingly complex environments- with flexible consulting packages from hourly rate, 
              workshop through to embedded team support. No excessive documentation or slide deck- 
              we share your drive for making a tangible difference.
            </p>
          </div>

          {/* Product Lab */}
          <div className="space-y-6">
            <h2 className="heading-lg">Product Lab</h2>
            <p className="body-md text-muted-foreground max-w-4xl">
              The Smaller lab is our in house product studio- bringing to life ideas that have high 
              potential to be impactful. Smaller by design, we start with focused experiments, shaped 
              through real-world testing, and refined into solutions that deliver measurable impact. 
              We prioritise human experience, sustainable business models, and intentional growth to 
              ensure every product creates lasting value.
            </p>
          </div>

          {/* Final CTA */}
          <div className="text-center pt-8">
            <Button size="lg" className="btn-accent px-8 py-4 text-lg">
              Let's make a problem smaller
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};