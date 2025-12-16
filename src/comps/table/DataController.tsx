import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import MySearch from "./MySearch";
import { dataForTable } from "../../data/constants";

export default function DataController() {
  const [dataToShow, setDataToShow] = useState(dataForTable);
  const [searchWord, setSearchWord] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    const filteredData = dataForTable.filter((objRow) => {
      if (!searchWord) {
        return true;
      }
      for (let key in objRow) {
        const callValue = String(
          (objRow as Record<string, any>)[key].toLowerCase()
        );
        if (callValue.includes(searchWord.toLowerCase())) {
          return true;
        }
      }
    });
    setDataToShow(filteredData);
  }, [searchWord]);

  return (
     <div className="data-controller-layout">
      <div className="search-bar-wrapper">
        <MySearch onSearchChange={handleSearchChange} />
      </div>
      <DataTable dataToShow={dataToShow} />
      {(dataForTable.length == 0 && <h1 className="noDataRow">אין אירועים</h1>) ||
        (dataToShow.length == 0 && <h1 className="noDataRow">אין תוצאות חיפוש</h1>)}
    </div>
  );
}
