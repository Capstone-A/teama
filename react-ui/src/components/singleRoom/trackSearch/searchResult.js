import React from "react";

import SingleTrack from "./singleTrack";

const SearchResult = ({ list, roomId }) => {

  return (
    <div>
      {
        list && list.map((item) =>
        <SingleTrack key={item.id} item={item} roomId={roomId}/>)
      }
    </div>
  );
};

export default SearchResult;
