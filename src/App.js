import React from 'react';
import Title from "./components/Title";
import Search from "./components/Search";
import Table from "./components/Table";
import directory from "./directory.json";


function App() {
  return (
    <>
      <Title></Title>
      <Search></Search>
      <Table></Table>
    </>
  );
}

export default App;
