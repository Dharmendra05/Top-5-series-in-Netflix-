import React from 'react';
import Cards from './Cards';


function App(){
	return (<>
		<h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
		<div className="finalCards">
       <Cards imgurl="https://wallpapercave.com/wp/wp1917125.jpg"
        about="A Netflix Orginal Series 2020"
        title="House of cards"
        link="https://wallpapercave.com/netflix-wallpapers"/>

        <Cards imgurl="https://wallpapercave.com/wp/wp1917131.jpg"
        about="A Netflix Orginal Series 2020"
        title="DAREDEVIL"
        link="https://wallpapercave.com/netflix-wallpapers"
        />
        
       <Cards imgurl="https://wallpapercave.com/wp/wp1917154.jpg"
        about="A Netflix Orginal Series 2020"
        title="STRANGER THINGS"
        link="https://wallpapercave.com/netflix-wallpapers"
        />
        </div>
        
      	<div className="finalCards1">
       <Cards imgurl="https://wallpapercave.com/wp/wp1917173.jpg"
        about="A Netflix Orginal Series 2020"
        title="knight of sidonia"
        link="https://wallpapercave.com/netflix-wallpapers"/>

        <Cards imgurl="https://wallpapercave.com/uwp/uwp709704.jpeg"
        about="A Netflix Orginal Series 2020"
        title="SUPREME"
        link="https://wallpapercave.com/netflix-wallpapers"
        />
        
       <Cards imgurl="https://wallpapercave.com/uwp/uwp714012.png"
        about="A Netflix Orginal Series 2020"
        title="Beautiful Anime Girl"
        link="https://wallpapercave.com/netflix-wallpapers"
        />
        </div>
        

		</>);
}

export default App;