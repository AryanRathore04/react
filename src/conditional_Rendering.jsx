import React from "react";

const conditional_Rendering = () => {
  const age = 18;
  return (
    <div>
      {age >= 18 ? (
        <div>
          <img
            src="https://img.freepik.com/free-vector/drive-thru-window-with-car_23-2148667485.jpg?t=st=1715784772~exp=1715788372~hmac=0b32d3fcfb0323877a224631d3a87dcd890fc357fc5df4b17467227e1e129ef6&w=740"
            alt="" style={{width: '300px', height: '300px', borderRadius: '50%'}}
          />
          <h1>You can drive </h1>
        </div>
      ) : (
        <h1>you can't vote</h1>
      )}
    </div>
  );
};

export default conditional_Rendering;
