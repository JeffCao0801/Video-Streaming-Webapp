import React from "react";
import { useDropzone } from "react-dropzone";
import { GrUploadOption } from "react-icons/gr";

function Uploder() {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 100000,
    onDrop: (acceptedFiles) => {
      alert(acceptedFiles[0].name);
    },
  });
  return (
    <div className="w-full text-center">
      <div
        {...getRootProps()}
        className="px-6 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer"
      >
        <input {...getInputProps()} />
        <span className="mx-auto flex-colo text-lgrey text-3xl">
          <GrUploadOption />
        </span>
        <p className="text-sm mt-2">Drag and drop files to upload</p>
        <em className="text-xs text-border">
        </em>
      </div>
    </div>
  );
}

export default Uploder;
