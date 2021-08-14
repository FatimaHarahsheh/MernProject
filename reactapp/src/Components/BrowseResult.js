import React, { useState } from "react";

import "../static/css/BrowseSearch.css";

const BrowseResult = (props) => {
  const {movies} = props
  const [limit, setLimit] = useState(4);



  return (
    <div className="search">
      <h2 style={{marginLeft:'50px'}}>search results:</h2>
      <br />
      <div className="search-list">
        {movies ? (
          [
            movies
              .filter((item, idx) => idx < limit)
              .map((m, i) => {
                return (
                  <div className="item">
                    {/* <img src={m.poster} alt="Image_2" />
                    <p>{m.name}</p>
                    <p>{m.date}</p> */}
                  </div>
                );
              }),
          ]
        ) : (
          <p>no search results!</p>
        )}
      </div>

      <br />
      <div style={{ width: "100%" }}>
        <button style={{marginLeft:'80%'}}
          onClick={() => {
            setLimit(limit + 4);
          }}
        >
          More
        </button>
      </div>
    </div>
  );
};

export default BrowseResult;
