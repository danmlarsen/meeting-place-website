import { Separator } from "@/components/ui/separator";
import BookingHelp from "@/components/booking-help";
import FooterConditional from "@/components/footer-conditional";
import AboutUs from "@/components/about-us";
import MemberDiscount from "@/components/member-discount";
import Footer from "@/components/footer";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";

export default function CoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      <div className="px-4 sm:px-8 lg:px-10">
        <div className="max-w-8xl mx-auto">
          <FadeInOnScroll>
            <Separator />
            <div className="py-10 md:py-12 lg:py-26">
              <BookingHelp />
            </div>
          </FadeInOnScroll>

          <FooterConditional>
            <AboutUs className="md:col-start-3" />
            <Separator
              orientation="vertical"
              className="hidden md:col-start-2 md:row-start-1 md:block"
            />
            <Separator orientation="horizontal" className="md:hidden" />
            <MemberDiscount className="md:row-start-1" />
          </FooterConditional>
        </div>
      </div>
      <Footer />
    </>
  );
}
