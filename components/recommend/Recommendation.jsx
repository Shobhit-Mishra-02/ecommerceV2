import "./recommendation.css";
import SmallCard from "../cards/SmallCard";

const Recommendation = () => {
  return (
    <div className="recommendation container">
      <h2 className="recommendation_heading">Recommended products</h2>
      <div className="recommendation_section">
        <div className="recommendation_section__window">
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
