
"use client";
import { Button } from "./ui/button";

type CategoryFilterProps = {
  categories: string[];
  active: string;
  onChange: (c: string) => void;
};

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  {
  return (
    <div className="flex gap-2 overflow-x-auto">
      {["all", ...categories].map((c) => (
        <Button
          key={c}
          className={active === c ? "bg-white/30" : ""}
          onClick={() => onChange(c)}
        >
          {c}
        </Button>
      ))}
    </div>
  );
}
}



