import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import GList from "@/app/(app)/app/glist/glist";
import { fetchList } from "@/lib/list";
import {
  onSaveServer,
  onDuplicateListServer,
  onArchiveListServer
} from "@/app/(app)/app/glist/glist-action";

export default async function Page() {
  const list = await fetchList();

  return (
    <div>
      {/* TODO: verify why block is not removing all the spaces from header */}
      <Card className="flex block">
        <CardHeader>
          <CardTitle>Shopping Lists</CardTitle>
          <CardDescription>This helps you stay organized and remember everything you need to buy!</CardDescription>
        </CardHeader>
        <CardContent>
          <GList
            list={list}
            onSave={onSaveServer}
            onDuplicateList={onDuplicateListServer}
            onArchiveList={onArchiveListServer}
          />
        </CardContent>
      </Card>
    </div>
  );
}
