console.log("LOADED ANIMAL FACTS FILE");

function AnimalFacts() {
  const animals = {
    dolphin: {
      image: './images/dolphin.png',
      facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
    },
    lobster: {
      image: './images/lobster.png',
      facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
    },
    starfish: {
      image: './images/starfish.png',
      facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
    }
  };
  
  function displayFact(e) {
    const clickedAnimal = e.target.alt;
    const allFacts = animals[clickedAnimal].facts;
    const randomIndex = Math.floor(Math.random() * allFacts.length);
    const funFact = allFacts[randomIndex]
    document.getElementById('fact').innerHTML = funFact;
  }
  
  // const list = []
  // for (const animal in animals) {
  //     list.push(
  //       <img
  //         onClick={displayFact}
  //         key={animal}
  //         className="animal"
  //         alt={animal}
  //         src={animals[animal].image}
  //         title={animal}
  //         aria-label={animal}
  //         role="button"
  //       />
  //     )
  // }
  
  // const images = [];
  // for (const animal in animals) {
  //     const img = <img 
  //       key={animal}
  //       className='animal'
  //       alt={animal}
  //       src={animals[animal].image}
  //       arial-lable={animal}
  //       role='button'
  //     />
  //     images.push(img);
  // };
  
  // const images = Object.keys(animals).map(animal => {
  //   return (
  //     <img 
  //       key={animal}
  //       className='animal'
  //       alt={animal}
  //       src={animals[animal].image}
  //       aria-lable={animal}
  //       role='button'
  //     />
  //   )
  // })
  
  const images = Object.entries(animals).map(([animal, data]) => {
    console.log(data);
    return (
      <img 
        key={animal}
        className='animal'
        alt={animal}
        src={data.image}
        aria-label={animal}
        role='button'
        onClick={displayFact}
      />
    )
  })
  
  const background = <img
    className="background"
    alt="ocean"
    src="./images/ocean.jpg"
  />
  const title = '';
  const showBackground = true; // if true, show the background
  // const showBackground = Math.random() < 0.5; // random version
  const animalFacts = (
    <div>
      <h1>{title ?  title : 'Click an animal for a fun fact'}</h1>
  
      {/* if showBackground && is true, show the background */}
      {showBackground && background}
  
      <p id="fact"></p>
  
      <div className="animals">
        {images}
      </div>
    </div>
  )

  return animalFacts;
}

ReactDOM.createRoot(
  document.getElementById('app')
).render(<AnimalFacts />);
