import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, List, Flame, GraduationCap, BookOpen, Lightbulb, Terminal } from 'lucide-react';

// Updated tutorial data with categories
const tutorialData = {
  "Beginner's Corner": {
    icon: GraduationCap,
    tutorials: [
      {
        title: "What is Blockchain Technology? (Featured)",
        description: "A simple explanation of blockchain for beginners.",
        thumbnailUrl: "https://img.youtube.com/vi/your_beginner_video_id/hqdefault.jpg", // Replace with actual video ID
        videoId: "your_beginner_video_id", // Replace with actual video ID
        icon: BookOpen,
      },
      {
        title: "Understanding Cryptocurrency",
        description: "Learn the basics of digital currencies.",
        videoId: "your_crypto_basic_id", // Replace with actual video ID
        icon: BookOpen,
      },
      {
        title: "Setting up a Crypto Wallet",
        description: "Step-by-step guide to creating a secure crypto wallet.",
        videoId: "your_wallet_setup_id", // Replace with actual video ID
        icon: BookOpen,
      },
    ],
  },
  "Intermediate Tips": {
    icon: Flame,
    tutorials: [
      {
        title: "Trading Memecoins: Risks and Rewards (Featured)",
        description: "Understand the dynamics of memecoin trading.",
        thumbnailUrl: "https://img.youtube.com/vi/your_intermediate_video_id/hqdefault.jpg", // Replace with actual video ID
        videoId: "your_intermediate_video_id", // Replace with actual video ID
        icon: Lightbulb,
      },
      {
        title: "Identifying Promising Memecoins",
        description: "Learn how to spot potential winners in the memecoin market.",
        videoId: "your_memecoin_analysis_id", // Replace with actual video ID
        icon: Lightbulb,
      },
      {
        title: "Managing Risk in Memecoin Trading",
        description: "Strategies for minimizing losses when trading volatile memecoins.",
        videoId: "your_memecoin_risk_id", // Replace with actual video ID
        icon: Lightbulb,
      },
    ],
  },
  "Advanced Tools": {
    icon: Terminal,
    tutorials: [
      {
        title: "Automated Trading with GMGN Bot (Featured)",
        description: "A detailed tutorial on using the GMGN bot for automated trades.",
        thumbnailUrl: "https://img.youtube.com/vi/your_advanced_video_id/hqdefault.jpg", // Replace with actual video ID
        videoId: "your_advanced_video_id", // Replace with actual video ID
        icon: Terminal,
      },
      {
        title: "Configuring Auto-Snipers",
        description: "Set up auto-sniping tools for fast trade execution.",
        videoId: "your_autosniper_config_id", // Replace with actual video ID
        icon: Terminal,
      },
      {
        title: "Advanced GMGN Bot Strategies",
        description: "Explore advanced techniques for maximizing profits with the GMGN bot.",
        videoId: "your_advanced_gmgn_id", // Replace with actual video ID
        icon: Terminal,
      },
    ],
  },
};

export default function Tutorials() {
  return (
    <div className="container mx-auto py-10 bg-navy-900 text-white">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Tutorials</h1>
        <p className="text-md text-gray-400">Level up your crypto trading skills with our curated video tutorials.</p>
      </section>

      {Object.entries(tutorialData).map(([category, categoryData], categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            <categoryData.icon className="mr-2 h-5 w-5 text-red-500" />
            {category}
          </h2>

          {/* Tutorials Accordion */}
          <Accordion type="single" collapsible>
              <div className="md:grid md:grid-cols-2 md:gap-6">
                {categoryData.tutorials.map((tutorial, tutorialIndex) => (
                  <AccordionItem key={tutorialIndex} value={`item-${categoryIndex}-${tutorialIndex}`}>
                    <AccordionTrigger className="flex items-center">
                      <tutorial.icon className="mr-2 h-4 w-4 text-red-500" />
                      {tutorial.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {tutorial.description}
                      <div className="mt-4">
                        <a
                          href={`https://www.youtube.com/watch?v=${tutorial.videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-500 hover:underline"
                        >
                          Watch on YouTube
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
