import { Card, CardContent } from "@/components/ui/card";

export default function StatsCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: number | string;
  hint?: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-sm text-slate-500">{label}</p>
        <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        {hint && <p className="mt-2 text-sm text-slate-400">{hint}</p>}
      </CardContent>
    </Card>
  );
}
