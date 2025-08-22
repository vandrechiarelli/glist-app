export interface ListProps {
    id: number;
    name: string;
    dateCreated: string;
    status: "new" | "in progress" | "done";
}