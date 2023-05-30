import "./horizontalCards.css";
import Image from "next/image";

export default function horizontalCards() {
  return (
    <div className="horizontalCards">
      <div className="horizontalCardHeartDiv">
        <Image
          className="horizontalCardHeart"
          src="/unfilledheart.png"
          alt="heart"
          width={100}
          height={100}
        />
      </div>
      <Image
        className="horizontalCardImg"
        src="/iphone.png"
        alt="a"
        width={100}
        height={100}
      />
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
            <Image
              className="horizontalCardOneStar"
              src="/coloredstar.png"
              alt="star"
              width={10}
              height={10}
            />
            <Image
              className="horizontalCardOneStar"
              src="/coloredstar.png"
              alt="star"
              width={10}
              height={10}
            />
            <Image
              className="horizontalCardOneStar"
              src="/coloredstar.png"
              alt="star"
              width={10}
              height={10}
            />
            <Image
              className="horizontalCardOneStar"
              src="/coloredstar.png"
              alt="star"
              width={10}
              height={10}
            />
            <Image
              className="horizontalCardOneStar"
              src="/coloredstar.png"
              alt="star"
              width={10}
              height={10}
            />
            <span className="horizontalCardRating">7.5</span>
          </div>
          <Image
            src="/dot.png"
            alt="dot"
            className="horizontalCardDot"
            width={10}
            height={10}
          />
          <div className="horizontalCardOrders">154 orders</div>
          <Image
            src="/dot.png"
            alt="dot"
            className="horizontalCardDot"
            height={10}
            width={10}
          />
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
