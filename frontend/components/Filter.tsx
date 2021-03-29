export const TodoFilter = () => {
  

  const openHandler = e => {
  }

  const closeHandler = e => {
  }
  
  return (
    <div>
      Show: &nbsp;
      <div onClick={openHandler} />
      <div onClick={closeHandler} />
    </div>
  );
};
