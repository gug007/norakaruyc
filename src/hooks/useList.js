import { useCallback, useState } from "react";

const useStatus = (list = []) => {
  const [status, setStatus] = useState(list);

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
