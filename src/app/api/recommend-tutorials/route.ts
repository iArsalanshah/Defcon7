import { recommendTutorial } from "@/ai/flows/tutorial-recommendation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    // Execute the Genkit flow on the server
    const recommendations = await recommendTutorial({ query });

    return NextResponse.json(recommendations);
  } catch (error) {
    console.error("API Error:", error);
    // Don't expose detailed errors to the client
    return NextResponse.json({ error: "Failed to get recommendations" }, { status: 500 });
  }
}
