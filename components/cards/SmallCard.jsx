import "./smallCard.css";


const SmallCard = () => {
  return (
    <div className="smallCard">

      <div className="smallCardImg">
        <img src="#" alt="smallCardImg"/>
      </div>

      <div className="smallCardAbout">
        <div className="smallCardCost">$10.00</div>
        <div className="smallCardDescription">T-shirts with multiple colors, for men</div>
      </div>
    </div>
  )
};

export default SmallCard;
