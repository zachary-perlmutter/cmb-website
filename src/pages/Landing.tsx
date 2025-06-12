import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-black">
              Get Control, Clarity, Speed
              <br />
              Freedom and Confidence
              <br />
              All in One Software.
            </h1>
          </div>

          {/* Dashboard Image */}
          <div className="w-full max-w-4xl mx-auto">
            <img
              src="/images/landing-page-dashboard.png"
              alt="Software Dashboard Preview"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
