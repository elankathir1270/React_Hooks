import { useEffect, useState } from "react";

const HomePage = () => {
  console.log("Component Called");
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    /**
     * Whenever dependency state changes inside function gets call,
     * if we dont specify any dependency it calls once when component renders like ngOnInit
     * useEffect can return a value that could be function
     */
    console.log(pageName);
  }, [pageName]);

  return (
    <div>
      <button
        onClick={() => {
          setPageName("Home");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          setPageName("Contact");
        }}
      >
        Contact
      </button>
      <button
        onClick={() => {
          setPageName("About");
        }}
      >
        About
      </button>
      <h3>{pageName}</h3>
    </div>
  );
};

export default HomePage;
