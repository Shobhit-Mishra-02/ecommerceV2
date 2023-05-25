import "./smallCard.css";
import Image from "next/image";

const SmallCard = () => {
  return (
    <div className="smallCard">
      <Image
        className="smallCardImg"
        src="/tShirt.png"
        width={500}
        height={500}
        alt="smallCardImg"
      />
      <div className="smallCardAbout">
        <div className="smallCardCost">$10.00</div>
        <div className="smallCardDescription">
          T-shirts with multiple colors, for men
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
