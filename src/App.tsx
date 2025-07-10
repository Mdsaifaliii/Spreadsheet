import TopHeaderBar from "./components/TopHeaderBar";
import BottomTabs from "./components/BottomTabs";
import SpreadsheetTable from "./components/SpreadsheetTable";
import HeaderToolbar from "./components/HeaderToolBar";

function App() {
  return (
    <div className="h-screen flex flex-col font-sans">
      <TopHeaderBar />

      <HeaderToolbar />

      <div className="flex-1 overflow-y-auto px-4 py-2">
        <SpreadsheetTable />
      </div>

      <BottomTabs />
    </div>
  );
}

export default App;
