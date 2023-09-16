// import { useState } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CreatePost from "./components/CreatePost";
// import PostList from "./components/PostList";
// import axios from "axios";
// import CountryCard from "./components/CountryCard";
// // function App() {
//   const [country, setCountry] = useState("");

//   const handleCountry = () => {
//     axios
//       .get("https://restcountries.com/v3.1/all")
//       .then((res) => {
//         // console.log(res.data[0].name.official);
//         // setCountry(res.data[0].name.official);

//         const countries = res.data;
//         const allNames = countries.map((country) => country.name.official);
//         setCountry(allNames);
//         console.log(allNames);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       {/* <CreatePost />
//       <PostList /> */}

//       <button onClick={handleCountry}>change country</button>
//       {country}
//     </div>

//   );
// }
// function App() {
  
//   return (
//     <div className="App">
//       <h1>Country Information</h1>
//       <CountryCard  />
    
//     </div>
//   );
// }



// export default App;

// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>ToDo App</h1>
        <AddTask />
        <h2>Tasks</h2>
        <ListTask />
        <h2>Completed Tasks</h2>
        <ListTask filter={true} />
      </div>
    </Provider>
  );
};

export default App;
