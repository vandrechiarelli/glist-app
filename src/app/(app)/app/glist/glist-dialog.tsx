"use client";

import { useEffect } from "react";
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
import { GListDialogProps } from "@/types/glist-dialog-props";
import { ListProps } from "@/types/list-props";
import { DialogDescription } from "@radix-ui/react-dialog";

export function GListDialog({ list, onSave, onClose }: GListDialogProps) {
  const { register, handleSubmit, reset } = useForm<ListProps>({
    defaultValues: {
      id: 0,
      name: "",
      dateCreated: "",
    }
  });

  // Reset form when list changes
  useEffect(() => {
    if (list) {
      reset({
        id: list.id,
        name: list.name,
        dateCreated: list.dateCreated,
      });
    }
  }, [list, reset]);

  const submitHandler = (data: ListProps) => {
    onSave({
      ...list,
      id: data.id,
      name: data.name,
      dateCreated: data.dateCreated,
    });
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit List</DialogTitle>
          <DialogDescription>Edit List</DialogDescription>
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
          <Label htmlFor="dateCreated">Date Created</Label>
          <Input id="dateCreated" {...register("dateCreated")} disabled />
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
