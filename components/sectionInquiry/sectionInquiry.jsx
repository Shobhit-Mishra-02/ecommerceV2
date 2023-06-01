/* eslint-disable @next/next/no-img-element */
import "./sectionInquiry.css" 

export default function sectionInquiry() {
  return (
    <div className="container"> 
      <div className="sectionInquiry">
        <img src="./sectionInquiryBG.png" alt="img" className="sectionInquiryImage"/>
        <div className="sectionInquiryText">
          <div className="sectionInquiryUpperText">An easy way to send requests to all suppliers</div>
          <div className="sectionInquiryLowerText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolore itaque error nisi! Inventore eum cupiditate necessitatibus. Architecto nihil quo, iusto id minus dolorem et perspiciatis, vero corrupti vel ullam.</div>
        </div>
        <form className="sectionInquiryForm">
            <h4>Send quote to suppliers</h4>
            <input type="text" placeholder="What item you need?" />
            <textarea name="sectionInquiryType" id="sectionInquiryType" cols="50" rows="10" placeholder="Type more details"></textarea>
            <div className="sectionInquiryDropDown">
              <input type="number" placeholder="Quantity" />
              <select>
                <option value="pcs">pcs</option>
                <option value="">option 2</option>
                <option value="">option 3</option>
                <option value="">option 4</option>
              </select>
            </div>
            <button type="submit" className="sectionInquiryButton">Send Inquiry  </button>
        </form>
      </div>
    </div>
  )
}
