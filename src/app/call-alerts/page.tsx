
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const callAlertsData = [
  {
    coinName: "DOGE",
    gain: 12.5,
    callerName: "CryptoWhale",
    timestamp: "2024-07-24T10:30:00Z",
  },
  {
    coinName: "SHIB",
    gain: 8.2,
    callerName: "MemeLord",
    timestamp: "2024-07-24T09:15:00Z",
  },
  {
    coinName: "PEPE",
    gain: 15.7,
    callerName: "PumpKing",
    timestamp: "2024-07-24T08:00:00Z",
  },
];

export default function CallAlerts() {
  return (
    <div className="container mx-auto py-10">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Call Alerts</h1>
        <p className="text-md text-muted-foreground">
          Searchable and filterable list of recent calls.
        </p>
      </section>

      <section className="mb-6">
        <Input type="text" placeholder="Search coin..." className="max-w-md mx-auto" />
      </section>

      <section className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Coin Name</TableHead>
              <TableHead className="text-left">% Gain</TableHead>
              <TableHead className="text-left">Caller Name</TableHead>
              <TableHead className="text-left">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {callAlertsData.map((alert, index) => (
              <TableRow key={index}>
                <TableCell>{alert.coinName}</TableCell>
                <TableCell>{alert.gain}%</TableCell>
                <TableCell>{alert.callerName}</TableCell>
                <TableCell>{new Date(alert.timestamp).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
