import React from "react";
import { useState } from "react";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  return (
    <div>
      <form className="add-form">
        <div className="form-control">
          <label>URL</label>
          <input
            type="text"
            placeholder="Insert URL to shorten here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      </form>
      <button className="btn">Submit</button>
    </div>
  );
};

export default UrlForm;
