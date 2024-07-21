import React, { useState, createRef } from "react";
import Button from "react-bootstrap/Button";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [searchParams] = useSearchParams();
  const [count, setCount] = useState(0);
  const memeRef = createRef();

  const addText = () => {
    setCount(count + 1);
  };
  return (
    <div className="edit-page">
      <div>
        <h2
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          Edit your meme here
        </h2>
        <div style={{width: "700px", border: "1px solid"}} ref={memeRef} className="meme mt-5 mb-5">
          <img
            className="selected-meme"
            src={searchParams.get("url")}
            width="350px"
            alt="Selected Meme"
          />
          {Array(count)
            .fill(0)
            .map((e) => (
              <Text />
            ))}
        </div>
      </div>
      <Button onClick={addText} className="text-btn">
        Add Text
      </Button>
      <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)} className="save-btn">
        Save
      </Button>
    </div>
  );
};

export default EditPage;
