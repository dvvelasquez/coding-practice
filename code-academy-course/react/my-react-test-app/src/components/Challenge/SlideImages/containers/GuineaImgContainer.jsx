import { useEffect, useState } from "react";
import GuineaPigsImgs from '../components/GuineaPigsImgs';
import GuinePigsForm from '../components/GuineaPigsForm';

const guinePaths = [
    "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
    "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
    "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
    "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

function GuineaPigImgContainer() {
    const [currentGP, setCurrentGp] = useState(0);
    const [favoriteGP, setFavoriteGP] = useState(0);

    const src = guinePaths[currentGP];

    const favoriteChangeHandler = (event) => {
        setFavoriteGP(parseInt(event.target.value));
    }

    const resetFavoriteHandler = () => {
        setFavoriteGP(0);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentGp(prevGp => {
                const nextGp = prevGp + 1;
                return nextGp % guinePaths.length;
            })
        }, 5000)

        return () => clearInterval(intervalId);
    },  []);

    return (
        <div className="guineap-container">
            <GuineaPigsImgs src={src} isFavorite={currentGP === favoriteGP} />
            <GuinePigsForm favoriteGP={favoriteGP} onSelectFavorite={favoriteChangeHandler} onResetFavotire={resetFavoriteHandler}/>
        </div>
    )
}

export default GuineaPigImgContainer;
