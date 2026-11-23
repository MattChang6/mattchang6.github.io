import Slider from "react-slick";
import '../components/reviewSlider.css';
import '../components/home.css';

const ReviewSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    mobileFirst: true,
    pauseOnHover: true
  };

  return (

    <div>
      <Slider {...sliderSettings}>
        <div className="slick-slide">
          <p className="service-subtitle lato-font">s_son123</p>
          <p className="service-subtitle star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          <p className="service-description roboto-mono-font">
            Jay is honestly the best accountant my family has ever worked with... 
            my family has been struggling to find a reliable accountant for years 
            and because my family's tax situation is complicated... He was not only 
            willing to take on our "situation" but He was responsive, detailed, 
            polite, honest, understanding, and went above and beyond. I'm truly 
            grateful and look forward to working with him in the future. If you 
            are looking for a sign this is your sign.
          </p>
        </div>

        <div className="slick-slide">
          <p className="service-subtitle lato-font">kthkm</p>
          <p className="service-subtitle star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          <p className="service-description roboto-mono-font">
            Reached out last minute and he answered all my questions and filed my
             tax return forms efficiently. He asked questions and was 
             thorough with the details. He explained the online process well. 
             It was my first time filing online but it was seamless with his 
             help and expertise. Glad I filed with him and am open to reaching 
             out about financial advising and other inquiries based on this experience.
          </p>
        </div>

        <div className="slick-slide">
          <p className="service-subtitle lato-font">Ivette P.</p>
          <p className="service-subtitle star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          <p className="service-description roboto-mono-font">
            Jay and his team are truly amazing. They are so easy to work with and incredibly
            detail-oriented. I love how professional and kind they are, and I trust them
            completely. Their communication is always clear and precise. It has genuinely
            been a joy and a blessing to work with them.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default ReviewSlider;
