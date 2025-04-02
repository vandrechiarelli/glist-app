import { Glist, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Glist[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed521",
      name: "List of bla bla bla",
      date: "03/25/2025",
      status: "new",
    },
    {
      id: "728ed522",
      name: "Bino's list",
      date: "03/20/2025",
      status: "in progress",
    },
    {
      id: "728ed523",
      name: "Nesc's list",
      date: "03/15/2025",
      status: "done",
    },
    {
      id: "728ed524",
      name: "I duno",
      date: "03/10/2025",
      status: "done",
    },
    {
      id: "728ed525",
      name: "Arnaldo's list",
      date: "03/05/2025",
      status: "done",
    },
    {
      id: "728ed526",
      name: "brooooooooooooo",
      date: "03/02/2025",
      status: "done",
    },
    {
      id: "728ed527",
      name: "bla bla bla",
      date: "02/23/2025",
      status: "done",
    },
    {
      id: "728ed528",
      name: "bla bla bla ahahahhahhh",
      date: "02/10/2025",
      status: "done",
    },
    {
      id: "728ed52f",
      name: "Chiarelli 4",
      date: "02/01/2025",
      status: "done",
    },
    {
      id: "728ed52g",
      name: "Chiarelli 3",
      date: "01/10/2025",
      status: "done",
    },
    {
      id: "728ed511",
      name: "Chiarelli 2",
      date: "01/08/2025",
      status: "done",
    },
    {
      id: "728ed512",
      name: "Chiarelli 2",
      date: "01/07/2025",
      status: "done",
    },
  ];
}

export default async function GList() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
