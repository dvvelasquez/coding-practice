export default function GuinePigsForm({ favoriteGP, onSelectFavorite, onResetFavotire }) {
    return (
        <div data-testid="guineaPigForm" id="guineaPigForm">
            <label>Choose your favoite Guinea Pig</label>
            <select value={favoriteGP} onChange={onSelectFavorite}>
                <option value="0">Alex</option>
                <option value="1">Izzy</option>
                <option value="2">Brandon</option>
                <option value="3">DJ</option>
            </select>
            <button onClick={onResetFavotire}>Reset Favorite</button>
        </div>
    )
}