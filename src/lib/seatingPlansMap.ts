import SvgLangbord from "@/components/ui/svg/seatingPlans/SvgLangbord";
import SvgKino from "@/components/ui/svg/seatingPlans/SvgKino";
import SvgRundeBord from "@/components/ui/svg/seatingPlans/SvgRundeBord";
import SvgHestesko from "@/components/ui/svg/seatingPlans/SvgHestesko";
import SvgKlasserom from "@/components/ui/svg/seatingPlans/SvgKlasserom";
import SvgStående from "@/components/ui/svg/seatingPlans/SvgStående";

export type TSeatingPlans =
  | "langbord"
  | "kino"
  | "rundebord"
  | "hestesko"
  | "klasserom"
  | "stående";

type SVGComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const seatingPlansMap: Record<
  TSeatingPlans,
  { name: string; svg: SVGComponent }
> = {
  langbord: { name: "Long table", svg: SvgLangbord },
  kino: { name: "Theater", svg: SvgKino },
  rundebord: { name: "Round tables", svg: SvgRundeBord },
  hestesko: { name: "Horseshoe", svg: SvgHestesko },
  klasserom: { name: "Classroom", svg: SvgKlasserom },
  stående: { name: "Standing", svg: SvgStående },
};
