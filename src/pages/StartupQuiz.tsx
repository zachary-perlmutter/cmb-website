import { useEffect } from "react";

const StartupQuiz = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://form.jotform.com/jsform/251624718666061";
    script.type = "text/javascript";

    // Add script to the document
    document.getElementById("jotform-embed")?.appendChild(script);

    // Cleanup
    return () => {
      document.getElementById("jotform-embed")?.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">
            Discover Your Startup's Secret Advantage!
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Take our quick quiz to find out where your biggest growth
            opportunities lie.
            <br />
            <br />
            Answer a few simple questions and get personalized insights for your
            startup journey.
            <br />
            <br />
            Ready to level up?
            <br />
            <br />
            Let's go!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div id="jotform-embed" />
        </div>
      </div>
    </div>
  );
};

export default StartupQuiz;
