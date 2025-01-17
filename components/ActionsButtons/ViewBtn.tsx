import { EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ViewBtnProps {
  id: string;
  label?: string;
  endpoint?: string;
  onView?: () => void;
}

export default function ViewBtn({ endpoint, id, label, onView }: ViewBtnProps) {

  return (

    onView ? <button
      onClick={onView}
      className="flex items-center text-sky-600"
    >
      <EyeIcon className="mr-2 w-4 h-4" />
      {label && <span className="sr-only">{label}</span>}
    </button> : <Link
      href={`${endpoint}/${id}`}
      className="flex items-center text-sky-600"
    >
      <EyeIcon className="mr-2 w-4 h-4" />
      {label && <span className="sr-only">{label}</span>}
    </Link>

  );
}