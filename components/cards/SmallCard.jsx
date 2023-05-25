/* eslint-disable @next/next/no-img-element */
import "./smallCard.css";

const SmallCard = () => {
  return (
    <div className="smallCard">
      <img className="smallCardImg" src="/tShirt.png" alt="smallCardImg" />
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
