import React from "react";
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div>
      <h1>안녕, 시계다!</h1>
      <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById('root'));

}
setInterval(tick, 1000);


export default tick;