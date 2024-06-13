function Items(props) {
  // let {p1} = (props);
  return (
    <>
      <ul class="list-group">
        {props.item.map((food) => (
            <li class="list-group-item " aria-disabled="true">
         {food}
        </li>
        ))}
      </ul>
      
      
    </>
  );
}

export default Items;
