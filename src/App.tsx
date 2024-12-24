import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import StoryList from "./components/StoryList/StoryList";

const App = () => {
  //TODO - check with pixelperfect chrome extension before submitting!!!

  return (
    <>
      <Header />
      <div className="flex pr-[30px]">
        <Navbar />
        <div className="w-[calc(100%-228px)] overflow-x-auto">
          <StoryList />
        </div>
      </div>
    </>
  );
};

export default App;
