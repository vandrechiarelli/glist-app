import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GItem from "@/app/(app)/app/gitem/gitem-list";

export default function Page() {
  return (
    <div>
      <Card className="flex block">
        <CardHeader>
          <CardTitle>List of Items</CardTitle>
          <CardDescription>Items to be added to a list</CardDescription>
        </CardHeader>
        <CardContent>
          <GItem />
        </CardContent>
      </Card>
    </div>
  );
}
