import PopData from "./PopData";
import "./styles.css";
import { useState, useEffect } from "react";
import populationData from "./populationdata";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(populationData.data);
  const searchData = () => {
    console.log("FUnction Called");
    const filteredData1 = populationData.data.filter(
      (row) => row.Year === searchTerm || row.Population === +searchTerm
    );
    console.log(filteredData1);
    setFilteredData(
      filteredData1 && filteredData1.length > 0 ? filteredData1 : []
    );
  };

  useEffect(() => {
    setTimeout(() => {
      if (searchTerm.length > 0) {
        searchData();
      }
    }, 2000);
  }, [searchTerm]);
  const DeleteRow = (id) => {
    setFilteredData(filteredData.filter((row) => row.id !== id));
  };

  return (
    <div className="App">
      <input
        type="text"
        id="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setFilteredData(populationData.data)}>
        Reset
      </button>
      <PopData populationData={filteredData} deleteRow={DeleteRow} />
    </div>
  );
}
