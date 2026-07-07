import {
    Forecast,
    Shop
} from '../components/Fetch/FetchData';

export default function Fetch() {
    return (
        <div className="fetch-page">
            <h1>The fetch data React</h1>

            <Forecast />

            <Shop />
        </div>
    )
}