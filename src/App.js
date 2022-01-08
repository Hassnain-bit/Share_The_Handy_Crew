import './App.css';
import React, { useState } from "react";
import './styles/Common.css'
import './styles/myBootstrap.css'
import './styles/CustomCarousel.css'
import 'react-multi-carousel/lib/styles.css';
import ConsumerSide from './Pages/ConsumerSide';

function App() {

  const [menu, setMenu] = useState(false);

  return (
    <div className={menu ? "App active" : "App"}>
    
      <ConsumerSide menu={menu} setMenu={setMenu}/>
    </div>
  );
}

export default App;
