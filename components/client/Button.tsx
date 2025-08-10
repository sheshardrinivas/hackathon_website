import Link from "next/link";

import React from "react";
import { Button } from "@/components/ui/button";

function Button_with_link() {
  return (
    <Link href="/register">
      <Button
        variant="outline"
        className="rounded-[0.5rem] cursor-pointer hover:translate-y-[-4px]  transition-transform duration-500 "
      >
        Register now !
      </Button>
    </Link>
  );
}

export default Button_with_link;
