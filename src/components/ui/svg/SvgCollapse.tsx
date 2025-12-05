import { cn } from "@/lib/utils";

export default function SvgCollapse({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      className={cn("size-4", className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.0311 6.35158C15.0575 6.1683 16 6.95741 16 8C16 9.04259 15.0575 9.8317 14.0311 9.64842L8.56253 8.67188C8.23702 8.61375 8 8.33066 8 8C8 7.66934 8.23702 7.38625 8.56253 7.32812L14.0311 6.35158Z"
        fill="currentColor"
      />
      <path
        d="M1.96885 9.64842C0.942504 9.8317 1.2555e-07 9.04258 2.62268e-07 8C3.98987e-07 6.95741 0.942506 6.1683 1.96886 6.35158L7.43747 7.32812C7.76298 7.38625 8 7.66934 8 8C8 8.33066 7.76298 8.61375 7.43747 8.67188L1.96885 9.64842Z"
        fill="currentColor"
      />
    </svg>
  );
}
