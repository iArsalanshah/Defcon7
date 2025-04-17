import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Discord } from "lucide-react";

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

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Defcon7 Tracker</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Your ultimate source for memecoin insights and top trader leaderboards.
        </p>
        <Button>
          <Discord className="mr-2 h-4 w-4" />
          Join Our Discord
        </Button>
      </section>

      {/* Top Memecoin Calls */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Top Memecoin Calls</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Coin Name</CardTitle>
              <CardDescription>Caller: Caller Name</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">+999%</p>
            </CardContent>
          </Card>
             <Card>
            <CardHeader>
              <CardTitle>Coin Name</CardTitle>
              <CardDescription>Caller: Caller Name</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">+999%</p>
            </CardContent>
          </Card>
             <Card>
            <CardHeader>
              <CardTitle>Coin Name</CardTitle>
              <CardDescription>Caller: Caller Name</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">+999%</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section>
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
