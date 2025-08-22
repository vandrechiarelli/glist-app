"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { GItemDialogProps } from "@/types/gitem-dialog-props";
import { ItemProps } from "@/types/item-props";
import { UnitProps } from "@/types/unit-props";
import { DialogDescription } from "@radix-ui/react-dialog";

export function GItemDialog({ item, units, onSave, onClose }: GItemDialogProps) {
  const { register, handleSubmit, setValue, watch, reset } = useForm<ItemProps>({
    defaultValues: {
      id: 0,
      name: "",
      defaultQuantity: 0,
      durationDays: 0,
      unitId: 0,
      unitName: "",
    }
  });

  const [unitList, setUnitList] = useState<UnitProps[]>([]);

  // Load units into local state
  useEffect(() => {
    if (units && units.length > 0) {
      setUnitList(units);
    }
  }, [units]);

  // Reset form when item changes
  useEffect(() => {
    if (item) {
      reset({
        id: item.id,
        name: item.name,
        defaultQuantity: item.defaultQuantity,
        durationDays: item.durationDays,
        unitId: item.unitId,
        unitName: item.unitName,
      });
    }
  }, [item, reset]);

  // Ensure unitName is set before render (either from item or fallback to first unit)
  useEffect(() => {
    if (unitList.length > 0) {
      const currentValue = watch("unitName");
      if (!currentValue) {
        const defaultUnitName = item.unitName || unitList[0].name;
        setValue("unitName", defaultUnitName, { shouldValidate: false });
      }
    }
  }, [unitList, item, watch, setValue]);

  const submitHandler = (data: ItemProps) => {
    const foundUnit = unitList.find(u => u.name === data.unitName);
    const selectedUnitId = foundUnit ? foundUnit.id : item.unitId;
    onSave({
      ...item,
      id: data.id,
      name: data.name,
      defaultQuantity: data.defaultQuantity,
      durationDays: data.durationDays,
      unitId: selectedUnitId,
      unitName: data.unitName,
    });
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Item</DialogTitle>
          <DialogDescription>Edit Item</DialogDescription>
        </DialogHeader>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        <div>
          <Label htmlFor="id">ID</Label>
          <Input id="id" {...register("id")} disabled />
        </div>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")} />
        </div>

        <div>
          <Label htmlFor="defaultQuantity">Default Quantity</Label>
          <Input id="defaultQuantity" type="number" {...register("defaultQuantity")} />
        </div>

        <div>
          <Label htmlFor="durationDays">Duration Days</Label>
          <Input id="durationDays" type="number" {...register("durationDays")} />
        </div>

        <div>
          <Label>Unit</Label>
          <Select
            value={watch("unitName")}
            onValueChange={(value) => setValue("unitName", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent className="z-[9999]">
              {unitList.map((u) => (
                <SelectItem key={u.id} value={u.name}>
                  {u.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} type="button">
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
  );
}
