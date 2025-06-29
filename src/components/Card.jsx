export const Card = () => {
  return (
    <>
      <div className="flex">
        <p>date</p>
        <h1>day</h1>
        <p>Todo</p>
      </div>
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button>All</Button>
        <Button>Uncompleted</Button>
        <Button>Completed</Button>
      </ButtonGroup>
    </>
  );
};
