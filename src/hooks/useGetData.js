import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [url]);
  return { loading, data };
};

export default useGetData;
