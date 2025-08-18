export const Approach = () => {
  const principles = [
    {
      title: "Smaller problems, not bigger business.",
      description: "Impact means agency, resilience, and sustainability- not just profit."
    },
    {
      title: "Power at the edges.",
      description: "Control shift from the center to those closest to the problem being empowered"
    },
    {
      title: "The Smallest unit- the human experience.",
      description: "Solutions are built with people, not for them."
    },
    {
      title: "Experiment over prediction.",
      description: "Small tests beat big promises."
    },
    {
      title: "Technology that enables.",
      description: "Tools should amplify human agency, not replace it."
    },
    {
      title: "Change is shared.",
      description: "Collaboration, not concentration, drives systemic breakthroughs."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-narrow">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="heading-lg mb-6">A Smaller Approach</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <div 
                key={index} 
                className="group p-6 bg-card border border-border/20 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-accent/30 hover:bg-accent/5 cursor-pointer"
              >
                <h3 className="heading-md mb-4 group-hover:text-accent-foreground transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="body-md text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};