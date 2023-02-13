import React, { useEffect, useState } from "react";
import Uploder from "../../../Components/Uploder";
import SideBar from "../SideBar";
import { ImUpload } from "react-icons/im";


function AddMovie() {
  const [modalOpen, ] = useState(false);
  const [, setCast] = useState(null);

  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);

  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Create</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
        </div>

        {/* IMAGES */}
        <div className="flex flex-col gap-2 w-full ">
          {/* img without title */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
            Thumbnail
            </p>
            <Uploder />
            
          </div>  
        </div>
        
        <div className="flex flex-col gap-2 w-full ">
          <label className="text-border font-semibold text-sm">
            Video File
          </label>
          <Uploder />
        </div>
        <button className="bg-lgrey w-full flex-rows gap-6 font-medium text-white py-4 rounded">
          <ImUpload /> Upload Video
        </button>
      </div>
    </SideBar>
  );
}

export default AddMovie;
