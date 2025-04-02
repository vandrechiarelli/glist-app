import { GListForm, columns } from "./columns";
import { DataTable } from "./data-table";
import GListMenu from "./glist-menu";

async function getData(): Promise<GListForm[]> {
  // Fetch data from your API here.
  return [
    {
      id: 3,
      name: "apple",
      defaultQuantity: 3,
      unitName: "unit",
    },
    {
      id: 10,
      name: "banana",
      defaultQuantity: 5,
      unitName: "unit",
    },
    {
      id: 8,
      name: "butter",
      defaultQuantity: 1,
      unitName: "tub",
    },
    {
      id: 9,
      name: "chocolate",
      defaultQuantity: 3,
      unitName: "unit",
    },
    {
      id: 2,
      name: "eggs",
      defaultQuantity: 1,
      unitName: "dozen",
    },
    {
      id: 5,
      name: "flour",
      defaultQuantity: 1,
      unitName: "package",
    },
    {
      id: 12,
      name: "grape",
      defaultQuantity: 1,
      unitName: "dozen",
    },
    {
      id: 7,
      name: "lettuce",
      defaultQuantity: 1,
      unitName: "head",
    },
    {
      id: 4,
      name: "media crema",
      defaultQuantity: 2,
      unitName: "unit",
    },
    {
      id: 1,
      name: "milk",
      defaultQuantity: 1,
      unitName: "unit",
    },
    {
      id: 11,
      name: "orange",
      defaultQuantity: 1,
      unitName: "unit",
    },
    {
      id: 6,
      name: "sugar",
      defaultQuantity: 1,
      unitName: "package",
    },
  ];
}

export default async function GListForm() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-end flex-1 p-1">
        <GListMenu />
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
