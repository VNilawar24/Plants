import React from "react";
import {PlantList} from "../components/PlantList"
// import PlantsC from "../components/PlantsC";
import "../styles/Catalogues.css";
import PlantsC from "../components/PlantsC";

function Catalogues() {
  return (
    <div className="catalogues">
      <h1 className="plantCategores">Plants List</h1>
      <div className="PlantList">
        {PlantList.map(
          (PlantList) => (
            <div className="plants" key={PlantList.id}>
              <img src={PlantList.url} alt={PlantList.name} />
              <h2>{PlantList.name}</h2>
              {/* <p>{PlantList.description}</p> */}
              {/* <span>${product.price}</span> */}
            </div>
          )
          // {
          //   return (
          //     <PlantsC
          //       // key={key}
          //       url={plantsC.url}
          //       name={plantsC.name}

          //     />
          //   );
          // }
        )}
      </div>
    </div>
  );
}

export default Catalogues;