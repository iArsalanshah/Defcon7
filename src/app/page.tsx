import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Disc } from "lucide-react"; // Changed Discord to Disc based on error message

const teamMembers = [
  {
    name: "Ghost",
    description: "Expert at finding promising memecoins and making top calls.",
  },
  {
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
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Defcon7</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Your ultimate source for memecoin insights and top trader leaderboards.
        </p>
        <Button>
          <Disc className="mr-2 h-4 w-4" /> {/* Changed Discord to Disc */}
          Join Our Discord
        </Button>
      </section>

      {/* Top Memecoin Calls */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Top Memecoin Calls</h2>
        {/* Placeholder content - replace with actual data fetching and display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Coin Name {i}</CardTitle>
                <CardDescription>Caller: Caller Name</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">+{(Math.random() * 1000).toFixed(0)}%</p>
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
          <h3 className="text-xl font-semibold mb-3">Meet the Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
