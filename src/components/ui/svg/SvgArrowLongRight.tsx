import { cn } from "@/lib/utils";

export default function SvgArrowLongRight({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      className={cn("", className)}
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_58_2774"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="24"
      >
        <rect width="40" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_58_2774)">
        <mask
          id="mask1_58_2774"
          maskUnits="userSpaceOnUse"
          x="2"
          y="2"
          width="34"
          height="20"
        >
          <rect x="2.5625" y="2" width="33.4375" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask1_58_2774)">
          <path
            d="M2.55859 11.4844L19.8155 11.6654C19.6529 10.8996 19.2287 9.84838 18.5501 8.51171C17.8714 7.17503 17.0654 5.6852 16.1181 4.02828L16.8534 3.66626C17.8785 5.84532 19.7024 7.55793 22.3323 8.79018C24.9622 10.0224 27.8537 10.8648 31.0138 11.3034C32.4489 11.5053 33.8487 11.6445 35.199 11.7281V12.2711C33.8417 12.3546 32.4489 12.4939 31.0138 12.6958C27.8537 13.1831 24.9622 14.0325 22.3323 15.2438C19.7024 16.4552 17.8785 18.1539 16.8534 20.3329L16.1181 19.9709C17.0654 18.314 17.8714 16.8172 18.5501 15.4875C19.2287 14.1578 19.6459 13.0996 19.8155 12.3338H2.55859V11.4844Z"
            fill="#2A2A2A"
          />
        </g>
      </g>
    </svg>
  );
}
