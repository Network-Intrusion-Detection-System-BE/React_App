import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await axios.get(`http://localhost:8000/${url}`);
        setData(res.data);
      } catch (e) {
        setError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [url]);

  return { isLoading, data, error };
};

export default useFetch;
