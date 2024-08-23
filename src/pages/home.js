import ImageGallery from "react-image-gallery";
import '../components/home.css';

const images = [
    {
      original: require("../components/images/logos/Primary Logo/JC Primary Logo_7546C.png"),
    },
    {
      original: require('../components/images/logos/Primary Logo/JC Primary Logo_black.png'),
    },
    {
      original: require('../components/images/logos/Primary Logo/JC Primary Logo_7546C.png'),
    },
  ];

export function Home() {
    return (
        <>
        <br />
        <div className="image-gallery app-image-gallery" style={{ position: 'relative' }}>
            <ImageGallery 
            items={images} 
            showFullscreenButton={false} 
            showThumbnails={false} 
            showBullets={false}
            showNav={false} 
            disableSwipe={true}
            showPlayButton={false} 
            autoPlay={true}
            slideDuration={500} 
            slideInterval={5000}
            />
        </div>

        <p className="core-values-title">Company Core Values</p>
        <div>
            <img src={require('../components/images/banana.jpg')} alt="banana test" className="banana-img"></img>
        </div>

        </>
    );
}
