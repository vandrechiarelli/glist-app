import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GListForm from "@/app/(app)/app/glistItem/glist-item-form";
import { fetchListNameById, fetchListItemById, fetchAvailableItemsListItemById } from "@/lib/list-item";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const params = await searchParams;
  const id = Number(params.id);

  if (!id) {
    return <div>Invalid list id</div>;
  }

  const listName= await fetchListNameById(id);
  const listItem = await fetchListItemById(id);
  const listAvailableItems = await fetchAvailableItemsListItemById(id);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{`Shopping List: ${listName.name}`}</CardTitle>
        </CardHeader>
        <CardContent>
          <GListForm
            listItem={listItem}
            listAvailableItems={listAvailableItems}
          />
        </CardContent>
      </Card>
    </div>
  );
}

