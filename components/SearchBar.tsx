
"use client";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }: { onSearch: (v: string) => void }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const id = setTimeout(() => onSearch(value), 300);
    return () => clearTimeout(id);
  }, [value]);

  return (
    <Input
      placeholder="Search products..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
