import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <Link href="/">
      <Button variant="link" className={`gap-1 `}>
        <ChevronLeftIcon className="opacity-60" size={16} aria-hidden="true" />
        Go back
      </Button>
    </Link>
  );
}
