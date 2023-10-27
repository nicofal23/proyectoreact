const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="mt-5">{greeting}</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
