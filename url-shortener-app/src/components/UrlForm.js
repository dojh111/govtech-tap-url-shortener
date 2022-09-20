import React from "react";
import { useState } from "react";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="shortener-container">
      <form className="add-form">
        <div className="form-control">
          <label>Shorten your links</label>
          <input
            type="text"
            placeholder="Link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
      </form>
      <button className="btn">Shorten</button>
    </div>
  );
};

export default UrlForm;
