import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import RenderApp from './client'
// import ThisApp from './components/howtologin'

function App() {
  // const [message, setMessage] = useState(null);
  // const [isFetching, setIsFetching] = useState(false);
  // const [url, setUrl] = useState('/api');

  // const fetchData = useCallback(() => {
  //   fetch(url)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`status ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(json => {
  //       setMessage(json.message);
  //       setIsFetching(false);
  //     }).catch(e => {
  //       setMessage(`API call failed: ${e}`);
  //       setIsFetching(false);
  //     })
  // }, [url]);

  // useEffect(() => {
  //   setIsFetching(true);
  //   fetchData();
  // }, [fetchData]);

  return (
    <div className="App">
      <RenderApp />
    </div>
  );
}

export default App;
