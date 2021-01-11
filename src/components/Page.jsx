import React from "react";
import Photos from "./Photos";
import photosData from "../data/data.json";

export default function Page() {

  return (
    <>
        <Photos photos_prop={photosData}/>
    </>
  );
}