import React, { useEffect, useState } from 'react'
import connected from '../img/connected.jpg';
import connectionLost from '../img/connection_lost.jpg';

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
    <div>Network</div>
  )
}

export default Network