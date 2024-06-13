function ListTodo2() {
    let item = "GYM";
    let date = "12/03/2001";
  return (
    <center>
      <div class="container">
        <div class="row jb-row">
          <div class="col-sm">
            <h5>{item}</h5>
          </div>
          <div class="col-sm">{date}</div>
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

export default ListTodo2;
