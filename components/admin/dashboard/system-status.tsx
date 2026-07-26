import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SystemStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Status</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        <p>Database: 🟢 Connected</p>
        <p>CMS: 🟢 Online</p>
        <p>Storage: 🟢 Ready</p>
      </CardContent>
    </Card>
  );
}
