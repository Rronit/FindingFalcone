import React, { useEffect } from "react";

import { useSelector } from "react-redux";

export const SelectDestinationWrapper = () => {
  const planetDetails = useSelector((state: any) => state.planetDetails);
  useEffect(() => {
    console.log(planetDetails);
  }, [planetDetails]);

  // useEffect(() => {}, []);

  return <>hello</>;
};
