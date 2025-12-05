import { cn } from "@/lib/utils";

export default function SvgBomb({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      className={cn("fill-primary-700 size-[148px]", className)}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M172.451 90C188.76 117.268 177.707 141.968 148.305 148.305C141.968 177.707 117.268 188.76 90 172.451C62.7325 188.76 38.0323 177.707 31.6951 148.305C2.29265 141.968 -8.76028 117.268 7.54888 90C-8.76028 62.719 2.29265 38.0323 31.6951 31.6951C38.0323 2.29265 62.719 -8.76028 90 7.54888C117.268 -8.76028 141.968 2.29265 148.305 31.6951C177.707 38.0323 188.76 62.7325 172.451 90Z" />
    </svg>
  );
}
