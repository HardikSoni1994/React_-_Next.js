function Location(props) {
  console.log(props);
  return <>
      <div>
        <p>City: {props.city}</p>
        <p>Dist: {props.dist}</p>
        <p>Country: {props.country}</p>
      </div>
      <h2>{props.counter}</h2>
    </>

}

export default Location;
