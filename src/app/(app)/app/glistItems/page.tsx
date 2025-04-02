import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GListForm from "@/app/(app)/app/glistItems/glist-form";

export default function Page() {
  return (
    <div>
      <Card className="flex block">
        <CardHeader>
          <CardTitle>[Name of the list here]</CardTitle>
        </CardHeader>
        <CardContent>
          <GListForm />
        </CardContent>
      </Card>
    </div>
  );
}
