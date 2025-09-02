import React from "react";
import "./NewHeader.css";

function NewHeader() {
  return (
    <div className="news-container">
      <div className="News-tags">NEWS</div>
      <div className="marquee-container">
        <marquee behavior="" direction="">
          मॉडल कॉलेज राजमहल का विधिवत छात्र/छात्रा बनते हुए निम्नलिखित नियमों
          एवं दिशा-निर्देशों का पालन करने की शपथ लेता/लेती हूँ:
        </marquee>
      </div>
    </div>
  );
}

export default NewHeader;
