
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const leaderboardData = [
  {
    rank: 1,
    traderName: "AlphaTrader",
    totalCalls: 150,
    averageGain: 55.2,
    badges: ["Top 10%", "Verified"],
  },
  {
    rank: 2,
    traderName: "MemeMaster",
    totalCalls: 140,
    averageGain: 48.9,
    badges: ["Top 10%"],
  },
  {
    rank: 3,
    traderName: "SolanaShark",
    totalCalls: 130,
    averageGain: 42.5,
    badges: ["Rising Star"],
  },
];

export default function Leaderboard() {
  return (
    <div className="container mx-auto py-10">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Trader Leaderboard</h1>
        <p className="text-md text-muted-foreground">
          Top performing traders, filterable by time period.
        </p>
      </section>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="justify-center">
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="allTime">All Time</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <LeaderboardTable data={leaderboardData} />
        </TabsContent>
        <TabsContent value="weekly">
          <LeaderboardTable data={leaderboardData} />
        </TabsContent>
        <TabsContent value="allTime">
          <LeaderboardTable data={leaderboardData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface LeaderboardEntry {
  rank: number;
  traderName: string;
  totalCalls: number;
  averageGain: number;
  badges: string[];
}

interface LeaderboardTableProps {
  data: LeaderboardEntry[];
}

function LeaderboardTable({ data }: LeaderboardTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-border">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Rank
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Trader Name
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Total Calls
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Average Gain %
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Badges
            </th>
          </tr>
        </thead>
        <tbody className="bg-background divide-y divide-border">
          {data.map((entry) => (
            <tr key={entry.traderName}>
              <td className="px-4 py-3 whitespace-nowrap">{entry.rank}</td>
              <td className="px-4 py-3 whitespace-nowrap">{entry.traderName}</td>
              <td className="px-4 py-3 whitespace-nowrap">{entry.totalCalls}</td>
              <td className="px-4 py-3 whitespace-nowrap">{entry.averageGain.toFixed(2)}%</td>
              <td className="px-4 py-3 whitespace-nowrap">
                {entry.badges.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
