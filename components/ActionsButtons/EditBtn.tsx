import React from "react";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";

interface EditBtnProps {
  onClick: () => void
  label?: string
  id?: string
}

export default function EditBtn({ onClick, label, id }: EditBtnProps )
{

  return (
    <Button variant="ghost" size="icon" onClick={onClick} id={id}>
      <Pencil className="h-4 w-4" />
      {label && <span className="sr-only">{label}</span>}
    </Button>

  );
}