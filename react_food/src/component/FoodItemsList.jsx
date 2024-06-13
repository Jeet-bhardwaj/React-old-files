import style from './FoodItemsList.module.css';
const FoodItemsList = ({healthyFood , onClickDelete}) => {

    return (<>         
    <li key={healthyFood} className="list-group-item">
    {healthyFood}
    <button
      type="button"
      className={`${style.butt} btn btn-danger`}
      onClick={()=>onClickDelete(healthyFood)}
    >
      Delete
    </button>
    </li>
    </>);
}
export default FoodItemsList;