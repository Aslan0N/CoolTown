import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "./Context/GlobalContext";

const DetailsPage = () => {
  const { id } = useParams();
  const { myData } = useContext(GlobalContext);
  const result = myData.find((item) => item.id.toString() === id);
  return (
    <>
      {!result ? (
        "Wait"
      ) : (
        <div className="card" style={{ width: "18rem" }}>
          <img src={result.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{result.title}</h5>
            <p className="card-text">
              {result.price}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
