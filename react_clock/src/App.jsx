import React from 'react'
import ReClock from "../component/ReClock";
import "./App.css"
import DateAndTime from '../component/DateAndTime';


function app(){
  return (
    <React.Fragment>
      <ReClock/>
      <DateAndTime/>
    </React.Fragment>

  );
}
export default app;