import { cn } from "@/lib/utils";
import Booking from "./booking";
import { Dialog, DialogTrigger } from "./ui/dialog";

export default function BookingButton({
  className,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger
        className={cn("cursor-pointer", className)}
        {...props}
        asChild={asChild}
      >
        {children}
      </DialogTrigger>
      <Booking />
    </Dialog>
  );
}
