"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeAlert, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ItemProps } from "@/types/item-props";

export default function GListItemListItem({
  id,
  name,
  translatedName,
  defaultQuantity,
  unitName,
  aisleName,
  isUrgent,
  onSaveQuantity,
  onArchive,
}: ItemProps) {
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    if (onSaveQuantity) {
      onSaveQuantity(id, quantity);
    }
  };

  return (
    <Card className="relative flex flex-col max-w-[180px] min-h-[220px] shadow-md rounded-2xl">
      {isUrgent === 1 && (
        <BadgeAlert
          className="absolute top-2 left-2 text-red-500"
          color="#ae1515"
          size={18}
        />
      )}

      <button
        onClick={() => onArchive?.(id)}
        className="absolute top-2 right-2 p-1 rounded-full bg-red-50 hover:bg-red-100"
      >
        <X className="text-red-600" size={16} />
      </button>

      <CardHeader className="text-center p-2">
        <CardTitle className="text-sm font-semibold truncate">
          {name}
        </CardTitle>
        <p className="text-xs text-muted-foreground">{aisleName}</p>
      </CardHeader>

      <CardContent className="flex justify-center items-center">
        <Image
          src={`/assets/${name}.png`}
          alt={translatedName}
          width={85}
          height={85}
          className="rounded-md object-contain"
          priority
        />
      </CardContent>

      <CardFooter className="flex flex-col gap-1 text-center">
        {isEditing ? (
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            onBlur={handleSave}
            autoFocus
            className="w-14 text-center border rounded-md text-sm p-1"
          />
        ) : (
          <span
            className="text-sm font-medium cursor-pointer hover:underline"
            onClick={() => setIsEditing(true)}
          >
            {quantity} {unitName}
          </span>
        )}
      </CardFooter>
    </Card>
  );
}