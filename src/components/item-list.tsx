import Item from "./item";

export default function ItemsList() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="border-2 inline-block">
          <Item />
        </div>
      ))}
    </>
  )
}
