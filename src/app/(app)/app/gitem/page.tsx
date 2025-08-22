import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GItem from "@/app/(app)/app/gitem/gitem-list";
import { fetchItems, fetchUnits } from "@/lib/item";
import { onSaveServer } from "@/app/(app)/app/gitem/gitem-save";

export default async function Page() {
  const items = await fetchItems();
  const units = await fetchUnits();
  
  return (
    <div>
      <Card className="flex block">
        <CardHeader>
          <CardTitle>List of Products</CardTitle>
        </CardHeader>
        <CardContent>
          <GItem
            items={items}
            units={units}
            onSave={onSaveServer}
          />
        </CardContent>
      </Card>
    </div>
  );
}