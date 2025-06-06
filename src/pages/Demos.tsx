import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Demos = () => {
  const demos = [
    {
      title: "Elite Response Hub",
      description:
        "A sophisticated emergency response management system for elite security teams.",
      url: "https://elite-response-hub.lovable.app/",
      features: [
        "Real-time incident tracking",
        "Team coordination",
        "Resource management",
      ],
    },
    {
      title: "Velaris Fleet View",
      description:
        "Advanced fleet management and tracking solution for modern transportation.",
      url: "https://velaris-fleet-view.lovable.app/",
      features: [
        "Live vehicle tracking",
        "Route optimization",
        "Fleet analytics",
      ],
    },
    {
      title: "Zenith VIP Reserve",
      description:
        "Exclusive reservation system for high-end VIP services and experiences.",
      url: "https://zenith-vip-reserve.lovable.app/",
      features: [
        "Luxury booking system",
        "VIP management",
        "Premium service scheduling",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gradient-to-b from-background to-muted/20 pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Web App Demos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of modern web applications showcasing
              different use cases and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo, index) => (
              <Card
                key={index}
                className="flex flex-col bg-card/50 backdrop-blur-sm border-muted/50 hover:border-muted/80 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {demo.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {demo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {demo.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-muted-foreground"
                      >
                        <span className="mr-2 text-orange-400">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-orange-400 to-yellow-300 hover:from-orange-500 hover:to-yellow-400 text-black font-semibold"
                    variant="default"
                  >
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      View Demo
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demos;
