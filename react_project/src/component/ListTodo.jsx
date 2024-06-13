function ListTodo(props) {

  return (
    <center>
      <div class="container ">
        <div class="row jb-row">
          <div class="col-sm">
            <h5>{props.ittodo}</h5>
          </div>
          <div class="col-sm">{props.dttodo}</div>
          <div class="col-sm">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default ListTodo;
