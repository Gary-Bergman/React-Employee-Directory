import React, { useState } from 'react';
import Title from "./components/Title";
import Search from "./components/Search";
import Table from "./components/Table";
import directoryJSON from "./directory.json";


function App() {

  const [directory, setDirectory] = useState({
    all: directoryJSON,
    filtered: directoryJSON
  })

  const [sortName, setName] = useState("");

  const sortByName = () => {

      let sortedNames = directory.filtered.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      } return comparison
    })

    if (sortName === "DESC") {
      sortedNames.reverse();
      setName("ASC");
    } else {
      setName("DESC")
    }
    setDirectory({ ...directory, sortedNames });
  }

  const findDirectory = event => {

    const filtered = directory.all.filter(({ name }) =>
      name.toLowerCase().includes(event.target.value.toLowerCase()))
    setDirectory({
      ...directory,
      filtered
    })
  }

  return (
    <>
      <Title />
      <Search handleSearch={findDirectory}/>
      <Table directory={directory.filtered} sortByName={sortByName}/>
    </>
  );
}

export default App;
