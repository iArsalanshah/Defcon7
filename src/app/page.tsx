"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Disc } from "lucide-react"; // Changed Discord to Disc based on error message

const memecoinImages = [
  "/images/top_memecoins/image1.webp",
  "/images/top_memecoins/image2.webp",
  "/images/top_memecoins/image3.webp",
];

const teamMembers = [
  {
    img: "/images/team/ghost.jpg",
    name: "Ghost",
    description: "Expert at finding promising memecoins and making top calls.",
  },
  {
    img: "/images/team/coach.jpg",
    name: "CoachCrypto",
    description: "Admin who handles community operations and creates helpful YouTube tutorials for new traders.",
  },
];

const features = [
  {
    icon: "🚀",
    title: "Real-time Alerts",
    description: "Stay ahead with instant notifications",
  },
  {
    icon: "🏆",
    title: "Community Leaderboards",
    description: "Compete and learn from the top traders",
  },
  {
    icon: "📈",
    title: "Performance Tracking",
    description: "Analyze your trading success over time",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Defcon7</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Your ultimate source for memecoin insights and top trader leaderboards.
        </p>
        <a href="https://discord.com/invite/RqFSuFsk6z" target="_blank" rel="noopener noreferrer">
          <Button>
            <Disc className="mr-2 h-4 w-4" />
            Join Our Discord
          </Button>
        </a>
      </section>

      {/* Top Memecoin Calls */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Top Memecoin Calls</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {memecoinImages.map((image, index) => (
            <Card key={index} className="p-0 overflow-hidden border rounded">
              <CardContent className="p-0">
                <img
                  src={image}
                  alt={`Memecoin ${index + 1}`}
                  className="w-full h-auto object-cover cursor-pointer"
                  onClick={() => openModal(image)}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Defcon7 Section */}
      <section className="text-center py-12 mb-12"> {/* Added mb-12 for spacing */}
        <h2 className="text-3xl font-bold mb-10">Why Defcon7?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-muted rounded-full p-4 inline-flex mb-4">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Optional CTA Button Placeholder */}
        {/* <div className="mt-10">
          <Button size="lg">Get Started</Button>
        </div> */}
      </section>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Defcon7</h2>
        <p className="text-md text-muted-foreground mb-6">
          Defcon7 is a community-driven platform focused on providing real-time insights into the memecoin market.
          We track top traders, recent call alerts, and curate educational resources to help you navigate the crypto world.
        </p>

        {/* Meet the Team */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="flex items-center p-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                <CardTitle className="mb-2">{member.name}</CardTitle>
                  <CardDescription>{member.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full-Screen Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={currentImage}
              alt="Full Screen"
              className="max-w-full max-h-full rounded"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
