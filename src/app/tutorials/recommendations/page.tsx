"use client";

// Removed direct import of the flow
// import { recommendTutorial } from "@/ai/flows/tutorial-recommendation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function TutorialRecommendation() {
  const [query, setQuery] = useState("");
  // Initialize recommendations as an empty array, consider adding type definition
  const [recommendations, setRecommendations] = useState<any[]>([]); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // State for error handling

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null); // Clear previous errors
    try {
      // Call the new API route
      const response = await fetch("/api/recommend-tutorials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        throw new Error(errorData.error || `Request failed with status ${response.status}`);
      }

      const result = await response.json();
      setRecommendations(result);
    } catch (err: any) {
      console.error("Failed to fetch recommendations:", err);
      setError(err.message || "An unexpected error occurred");
      setRecommendations([]); // Clear recommendations on error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Tutorial Recommendation</h1>
        <p className="text-md text-muted-foreground">
          Get AI-powered tutorial recommendations based on your search query.
        </p>
      </section>

      <section className="mb-6 flex justify-center items-start gap-4">
        <div className="flex-grow max-w-md">
          <Input
            type="text"
            placeholder="Enter your query..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // Trigger search on Enter key press
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>} 
        </div>
        <Button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </section>

      {/* Only show the recommendations section if not loading and there are recommendations */}
      {!isLoading && recommendations.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((tutorial, index) => (
              <Card key={index}>
                <CardHeader>
                  {/* Use a more specific type if possible or check for existence */}
                  <CardTitle>{tutorial?.title || "Untitled"}</CardTitle>
                  <CardDescription>{tutorial?.description || "No description"}</CardDescription>
                </CardHeader>
                <CardContent>
                  {tutorial?.thumbnailUrl && (
                    <img
                      src={tutorial.thumbnailUrl}
                      alt={tutorial?.title || "Tutorial thumbnail"}
                      className="rounded-md mb-4 w-full aspect-video object-cover"
                    />
                  )}
                  {tutorial?.videoId ? (
                    <a
                      href={`https://www.youtube.com/watch?v=${tutorial.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Watch on YouTube
                    </a>
                  ) : (
                    <p className="text-muted-foreground">No video link available</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
