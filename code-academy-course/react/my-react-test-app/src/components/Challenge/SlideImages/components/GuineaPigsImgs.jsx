export default function GuineaPigsImgs({ src, isFavorite }) {
    return (
        <div data-testid="guienaPigsSlideShow" id="guienaPigsSlideShow">
            <h1>Select your Guinea Pig</h1>
            <img alt="Guine Pigs Slideshow" src={src} className={isFavorite ? "favorite" : ""} />
        </div>
    )
}
