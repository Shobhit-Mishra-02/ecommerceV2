import "./horizontalCards.css";

export default function horizontalCards() {
  return (
    <div className="horizontalCards">
      <div className="horizontalCardHeartDiv">
        <img
          className="horizontalCardHeart"
          src="./unfilledheart.png"
          alt="heart"
        />
      </div>
      <img className="horizontalCardImg" src="/iphone.png" alt="a" />
      <div className="horizontalCardsDetails">
        <div className="horizontalCardName">
          Canon Cmera EOS 2000, Black 10x zoom
        </div>
        <div className="horizontalCardPrices">
          $1000.00{" "}
          <span className="horizontalCardActualPrice">
            <s>$1200.00</s>
          </span>
        </div>
        <div className="horizontalCardReview">
          <div className="horizontalCardStar">
            <img
              className="horizontalCardOneStar"
              src="./coloredstar.png"
              alt="star"
            />
            <img
              className="horizontalCardOneStar"
              src="./coloredstar.png"
              alt="star"
            />
            <img
              className="horizontalCardOneStar"
              src="/coloredstar.png"
              alt="star"
            />
            <img
              className="horizontalCardOneStar"
              src="./coloredstar.png"
              alt="star"
            />
            <img
              className="horizontalCardOneStar"
              src="./coloredstar.png"
              alt="star"
            />
            <span className="horizontalCardRating">7.5</span>
          </div>
          <img src="/dot.png" alt="dot" className="horizontalCardDot" />
          <div className="horizontalCardOrders">154 orders</div>
          <img src="/dot.png" alt="dot" className="horizontalCardDot" />
          <div className="horizontalCardShipping">Free Shipping</div>
        </div>
        <div className="horizontalCardDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem totam cum
          sapiente necessitatibus labore animi magnam culpa incidunt nesciunt
          perferendis officia dolore, omnis recusandae libero asperiores
          tempore, ipsam nobis aliquam!
        </div>
      </div>
    </div>
  );
}
