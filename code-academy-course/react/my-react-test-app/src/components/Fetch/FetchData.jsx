import { useEffect, useState } from "react";
import { get } from './mockBackend/fetch';

const divStyles = {
    margin: "40px 0"
}

// EXAMPLE BELOW OF FETCH DATA IN REACT
// NOTE: THIS ARE NOT EXPORTED
function Forecast() {
    const [data, setData] = useState();
    const [notes, setNotes] = useState({});
    const [forecastType, setForecastType] = useState('/daily');

    useEffect(() => {
        get(forecastType).then((response) => {
        setData(response.data);
        });
    }, [forecastType]);

    const handleChange = (index) => ({ target }) =>
        setNotes((prev) => ({
        ...prev,
        [index]: target.value
        }));

    if (!data) {
        return <p>Loading...</p>
    }

    return (
        <div className='App'>
        <h1>My Weather Planner</h1>
        <div>
            <button onClick={() => setForecastType('/daily')}>5-day</button>
            <button onClick={() => setForecastType('/hourly')}>Today</button>
        </div>
        <table>
            <thead>
            <tr>
                <th>Summary</th>
                <th>Avg Temp</th>
                <th>Precip</th>
                <th>Notes</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                <td>{item.summary}</td>
                <td> {item.temp.avg}°F</td>
                <td>{item.precip}%</td>
                <td>
                    <input
                    value={notes[item.id] || ''}
                    onChange={handleChange(item.id)}
                    />
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    );
}

function Shop() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState({});

    useEffect(() => {
      get('/categories').then((response) => {
        setCategories(response.data);
      });
    }, []);

    useEffect(() => {
      if (selectedCategory && !items[selectedCategory]) {
        get(`/items?category=${selectedCategory}`).then((response) => {
          setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
        });
      }
    }, [items, selectedCategory]);

  if (!categories) {
    return <p>Loading..</p>;
  }

  return (
    <div className='App' style={divStyles}>
      <h1>Clothes 'n Things</h1>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <h2>{selectedCategory}</h2>
      <ul>
        {!items[selectedCategory]
          ? null
          : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export {
    Forecast,
    Shop,
}