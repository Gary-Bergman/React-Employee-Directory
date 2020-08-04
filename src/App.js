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

  const findDirectory = event => {

    const filtered = directory.all.filter(({ name }) =>
      name.toLowerCase().includes(event.target.value))
    setDirectory({
      ...directory,
      filtered
    })
  }

  return (
    <>
      <Title />
      <Search handleSearch={findDirectory}/>
      <Table directory={directory.filtered}/>
    </>
  );
}

export default App;
