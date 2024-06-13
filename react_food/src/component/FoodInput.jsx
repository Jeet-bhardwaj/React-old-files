import style from './FoodInput.module.css'
import "bootstrap/dist/css/bootstrap.min.css" 
function FoodInput(props){
    return(<>
    <div className={style.inputStyle}>
    <input type="text" placeholder=" Enter food item"  onKeyDown={props.handleOnChange}/>

    </div>

 </>);
}

export default FoodInput; 