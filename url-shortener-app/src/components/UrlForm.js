import React from "react";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("HELLO");
      setLoading(false);
    }, 3000);
  };

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
      <button className="btn" onClick={handleSubmit}>
        {loading ? (
          <BeatLoader color={"#fff"} loading={true} size={6} />
        ) : (
          "Shorten"
        )}
      </button>
    </div>
  );
};

export default UrlForm;
