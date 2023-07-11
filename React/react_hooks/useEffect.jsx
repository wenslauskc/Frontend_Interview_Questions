// 2. useEffect() - allows us to perfom side effects in functional components such as fetching data, subscribing to events or manipulating the DOM

import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  // useEffect accepts two arguments i.e effect function and an optional dependency array
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return <div>{data ? <p>Data: {data}</p> : <p>Loading.....</p>}</div>;
};
