import {
  CommandList,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command";
import { ReactNode } from "react";

interface ListProps {
  children?: ReactNode;
}

export function List({ children }: ListProps) {
  return (
    <CommandList>
      <CommandEmpty>Nada foi encontrado</CommandEmpty>
      <CommandGroup className="text-2xl" heading="Sugestões">
        <CommandList>{children}</CommandList>
      </CommandGroup>
    </CommandList>
  );
}
