
"use client";

import { recommendTutorial } from "@/ai/flows/tutorial-recommendation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function TutorialRecommendation() {
  const [query, setQuery] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    const result = await recommendTutorial({ query });
    setRecommendations(result);
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto py-10">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Tutorial Recommendation</h1>
        <p className="text-md text-muted-foreground">
          Get AI-powered tutorial recommendations based on your search query.
        </p>
      </section>

      <section className="mb-6 flex justify-center gap-4">
        <Input
          type="text"
          placeholder="Enter your query..."
          className="max-w-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </section>

      {recommendations.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((tutorial, index) => (
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
        </section>
      )}
    </div>
  );
}
