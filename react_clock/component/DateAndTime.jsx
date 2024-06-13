let DateAndTime = () => {
  
  let time = new Date();
  return <p>
    This is current date or time: {time.toLocaleDateString()  }----- 
    {time.toLocaleTimeString()}
  </p>
}

export default DateAndTime;