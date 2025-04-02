import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GList from "@/app/(app)/app/glist/glist";

export default function Page() {
  return (
    <div>
      {/* TODO: verify why block is not removing all the spaces from header */}
      <Card className="flex block">
        <CardHeader>
          <CardTitle>List of Groceries</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <GList />
        </CardContent>
      </Card>
    </div>
  );
}
