import SmallCard from "@/components/cards/SmallCard";
import Header from "@/components/header/Header";
import HorizontalCards from "@/components/horizontalCards/horizontalCards";
import Recommendation from "@/components/recommend/Recommendation";
import SaleSection from "@/components/sale/SaleSection";
import Newsletter from "@/components/newsletter/newsletter";
import SectionInquiry from "@/components/sectionInquiry/sectionInquiry";


export default function Home() {
  return (
    <div>
      {/* <SmallCard /> */}
      {/* <HorizontalCards /> */}
      <Header />
      <SaleSection />
      <SectionInquiry />
      <Recommendation />
      <Newsletter />
    </div>
  );
}
