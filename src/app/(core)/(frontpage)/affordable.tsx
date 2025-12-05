import SvgOrnament from "@/components/ui/svg/SvgOrnament";

export default function Affordable({ text }: { text?: string }) {
  return (
    <section className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10">
      {!!text && (
        <h2 className="max-w-2xs text-center md:max-w-sm xl:max-w-xl">
          {text}
        </h2>
      )}
      <SvgOrnament className="lg:h-9.25" />
    </section>
  );
}
