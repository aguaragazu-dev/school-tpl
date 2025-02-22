import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CloseButton({
  href,
  parent = "",
}: {
  href: string,
  parent?: string,
})
{
  return (
    <Button type="button" variant="outline" asChild>
      <Link
        href={
          parent === "" ? `/list${href}` : `/list/${parent}${href}`
        }
      >
        Cerrar
      </Link>
    </Button>
  );
}
