import { searchData } from "@/router";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<searchData>;
  id: "firstWatch" | "secondWatch";
}

export function Input({ register, id, ...rest }: InputProps) {
  return (
    <input
      className="w-[520px] h-[3.25rem] outline-none border border-gray-compare-500 rounded-[40px] bg-gray-compare text-center placeholder:text-center placeholder:text-green-oliver-700 placeholder:text-xl"
      {...register(id)}
      {...rest}
    />
  );
}
