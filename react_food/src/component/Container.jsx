import style from './Container.module.css'
function Container(props){
    return<><div className={style.child}>{props.children}</div></>;
}
export default Container;