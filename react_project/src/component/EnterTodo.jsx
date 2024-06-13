function EnterTodo() {
  return (
    <div>
      <div class="container text-center">
        <div class="row jb-row">
          <div class="col">
            <input type="text" placeholder="Enter Todo" />
          </div>
          <div class="col">
            <input type="date" name="date" id="" />
          </div>
          <div class="col">
            <button type="button" class="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterTodo;
