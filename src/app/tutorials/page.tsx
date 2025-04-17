
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tutorialData = [
  {
    title: "How to trade Solana memecoins",
    description: "A tutorial on trading memecoins on Solana.",
    thumbnailUrl: "https://picsum.photos/300/200",
    videoId: "xxxxx",
  },
  {
    title: "How to use the GMGN bot for trading",
    description: "Learn how to automate your trading with the GMGN bot.",
    thumbnailUrl: "https://picsum.photos/300/200",
    videoId: "yyyyy",
  },
];

export default function Tutorials() {
  return (
    <div className="container mx-auto py-10">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Tutorials</h1>
        <p className="text-md text-muted-foreground">
          Curated list of essential YouTube videos for beginner traders.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorialData.map((tutorial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{tutorial.title}</CardTitle>
              <CardDescription>{tutorial.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={tutorial.thumbnailUrl}
                alt={tutorial.title}
                className="rounded-md mb-4"
              />
              <a
                href={`https://www.youtube.com/watch?v=${tutorial.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Watch on YouTube
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
