/* eslint-disable @next/next/no-img-element */
import "./newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletterUpperText">Subscribe to our Newsletter</div>
      <div className="newsletterLowerText">
        Get daily news on upcoming offers from many suppliers all over the world
      </div>
      <div className="newsletterForm">
        <form action="#" className="newsletterForm">
          <div className="newsletterInput">
            <img src="/Email.svg" alt="email" className="newsletterImg" />
            <input
              type="email"
              placeholder="EMAIL"
              className="newsletterInputField"
              required
            />
          </div>
          <button
            type="submit"
            style={{
              marginLeft: "1rem",
            }}
            className="btn-primary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
