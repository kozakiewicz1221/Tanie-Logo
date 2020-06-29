import React, { useCallback } from "react";
import Dropzone, { useDropzone } from "react-dropzone";

import { Link } from "gatsby";
const Hero = ({ setFile, file }) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles);
    console.log("Files: ", file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      <button onClick={(e) => e.preventDefault()} className='file-upload-btn '>
        Dodaj plik
      </button>
    </div>
  );
};

export default Hero;
