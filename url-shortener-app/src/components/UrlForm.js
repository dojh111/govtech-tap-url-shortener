import React from "react";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import validator from "validator";

const ErrorCard = ({ errorMessage }) => {
  return (
    <div className="error-card-container">
      <text className="error-card-message">{errorMessage}</text>
    </div>
  );
};

const UrlDisplay = ({ newUrl, openInNewTab, isCopied, setIsCopied }) => {
  const handleCopy = async () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="url-input-container">
      <p className="clickable-text" onClick={() => openInNewTab(newUrl)}>
        {newUrl}
      </p>
      {isCopied ? (
        <button className="btn-copied">Copied!</button>
      ) : (
        <CopyToClipboard text={newUrl} onCopy={() => handleCopy(setIsCopied)}>
          <button className="btn-copy">Copy</button>
        </CopyToClipboard>
      )}
    </div>
  );
};

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setIsError(false);
      setNewUrl("");
      if (!url) {
        // Show error card
        setLoading(false);
        setErrorMessage("Please enter a link!");
        setIsError(true);
        return;
      }
      if (!validator.isURL(url)) {
        // Show error card
        setLoading(false);
        setErrorMessage("Invalid link. Please enter a valid URL");
        setIsError(true);
        return;
      }
      const formData = new FormData();
      formData.append("url", url);
      let endpoint = "https://tap-shortify.herokuapp.com/url/shorten";

      const response = await axios.post(endpoint, formData);
      if (response.data && response.data.hasOwnProperty("newUrl")) {
        console.log(response.data.newUrl);
        setNewUrl(response.data.newUrl);
      }
      setLoading(false);
    } catch (e) {
      console.log("An error has occurred submitting the URL request");
      console.log(e);
    }
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="shortener-container">
      <div className="url-input-container">
        <form className="add-form">
          <div className="form-control">
            <label style={{ color: "white", fontSize: 22 }}>
              Shorten your links
            </label>
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
      {isError ? <ErrorCard errorMessage={errorMessage} /> : ""}
      <div>
        <text className="url-display-header">Your shortened link</text>
        <div className="url-display-container">
          {newUrl ? (
            <UrlDisplay
              newUrl={newUrl}
              openInNewTab={openInNewTab}
              isCopied={isCopied}
              setIsCopied={setIsCopied}
            />
          ) : (
            <p style={{ color: "#bbbbbb" }}>Enter a link above to begin!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UrlForm;
