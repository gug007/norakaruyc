import { useCallback, useState } from "react";

const useStatus = () => {
  const [status, setStatus] = useState([]);

  const handleChangeStatus = useCallback(
    (value) => {
      setStatus((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
      );
    },
    [setStatus]
  );

  return [status, handleChangeStatus];
};

export default useStatus;
