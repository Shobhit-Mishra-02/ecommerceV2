import "./saleSection.css";
import Image from "next/image";

const Card = () => (
  <div className="sale_card">
    <Image src="/tShirt.png" alt="image" width={200} height={200} />

    <h5>T-shirt</h5>
    <div>
      <span>-25%</span>
    </div>
  </div>
);

const SaleSection = () => {
  return (
    <div className="sale container">
      <div className="sale_clock">
        <div className="sale_clock__heading">
          <h4>Deals and offers</h4>
          <h5>Electronic equipments</h5>
        </div>
        <div className="clock_section">
          <div className="clock_section__item">
            <span className="clock_item__first">6</span>
            <span className="clock_item__second">Days</span>
          </div>
          <div className="clock_section__item">
            <span className="clock_item__first">13</span>
            <span className="clock_item__second">Hour</span>
          </div>
          <div className="clock_section__item">
            <span className="clock_item__first">34</span>
            <span className="clock_item__second">Min</span>
          </div>
          <div className="clock_section__item">
            <span className="clock_item__first">13</span>
            <span className="clock_item__second">Sec</span>
          </div>
        </div>
      </div>

      <div className="sale_cards">
        <div className="sale_cards__window">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
