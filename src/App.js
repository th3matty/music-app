import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const url = window.location.href;
    const token = url.match(/access_token=([^&]*)/)[1];

    setAccessToken(token)
  }, []);

  return (
    <>
      {accessToken &&  <Main token={accessToken} />}
    </>
  );
}

export default App;
