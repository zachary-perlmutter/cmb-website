import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MVPFunding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">
              We'll Help Build Your MVP
              <br className="mb-8" />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                And Fund Half of It
              </span>
            </h1>

            <div className="space-y-8 text-lg">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  Here's How It Works:
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      We partner with{" "}
                      <a
                        href="https://www.gtnllc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-400 hover:text-orange-500"
                      >
                        Global Tech Network
                      </a>{" "}
                      to help bring your idea to life
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      We'll fund 50% of your MVP (that's your first working
                      version of your product)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      In return, we take a small piece of your company (the
                      exact amount is up for discussion)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-400 mr-2">•</span>
                    <span>
                      We can also help with additional funding if you need it
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  Want to Learn More?
                </h2>
                <p className="mb-6">
                  The best way to understand how this works is to have a chat
                  with us. We'll explain everything in detail and answer all
                  your questions.
                </p>
                <div className="flex justify-center">
                  <Link to="/book">
                    <Button className="bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-semibold hover:from-orange-500 hover:to-yellow-400">
                      Book a Call
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MVPFunding;
