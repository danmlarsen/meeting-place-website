import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center">
      <div className="flex flex-col items-center gap-10 px-4">
        <div className="grid grid-flow-col items-center gap-4">
          <h1>404</h1>
          <Separator orientation="vertical" />
          <p>Page not found</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/">Go to homepage</Link>
        </Button>
      </div>
    </main>
  );
}
