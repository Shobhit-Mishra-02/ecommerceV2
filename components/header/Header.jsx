import "./header.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header_banner">
          <div>
            <h2 className="header_banner__heading">
              Latest trending <span>Electronic items</span>
            </h2>
            <button className="header_banner__btn">Learn more</button>
          </div>
        </div>

        {/* login section  */}
        <div className="right_section">
          <div className="right_login">
            <div className="right_login__upper">
              <Image src="/Avatar.png" alt="avatar" width={200} height={200} />
              <h4 className="">
                Hi, user <span>let&apos;s get started</span>
              </h4>
            </div>
            <div className="right_section_btn">
              <button className="btn-primary-expand">Join now</button>
              <button className="right_btn__login">Logn in</button>
            </div>
          </div>

          <div className="right_msg__orange">
            <h4>Get US $10 off with a new supplier</h4>
          </div>
          <div className="right_msg__green">
            <h4>Send quotes with supplier preferences</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
