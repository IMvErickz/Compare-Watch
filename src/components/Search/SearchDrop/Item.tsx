import { CommandItem } from "@/components/ui/command";
import { ReactNode } from "react";

interface ItemProps {
  watch: WatchResponseProps;
  children?: ReactNode;
}

export function Item({ watch, children }: ItemProps) {
  return (
    <CommandItem
      key={watch.id}
      className="flex items-center justify-between"
      asChild
    >
      {children}
    </CommandItem>
  );
}
