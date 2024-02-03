import React, { useEffect, useState } from 'react'
import connected from '../img/connected.jpg';
import networkLost from '../img/connection_lost.jpg';

const Network = () => {
    const [status, setStatus] = useState(() => {
        if (navigator.onLine) {
          console.log("Connected to network.");
          return true;
        } else {
          return false;
        }
    });

    useEffect(() => {
        window.ononline = (e) => {
          console.log("Connected to network.");
          setStatus(true);
        };
        window.onoffline = (e) => {
          console.log("Network connection lost.");
          setStatus(false);
        };
      }, [status]);

  return (
    <div>
      <h2 className="mb-3">React Detect Network Connection Status Example</h2>
      {status ? (
        <>
          <div className="alert alert-success mb-3">
            Network is fullly connected
          </div>
          <img src={connected} width={420} alt="Logo" />
        </>
      ) : (
        <img src={networkLost} width={420} alt="Logo" />
      )}
    </div>
  )
}

export default Network