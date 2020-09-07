import React from "react";

import SingleTrack from "./singleTrack";

const SearchResult = ({ list }) => {

  return (
    <div>
      {
        list && list.map((item) =>
        <SingleTrack key={item.id} item={item} />)
      }
    </div>
  );
};

export default SearchResult;
