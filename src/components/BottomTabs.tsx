import { Plus } from "lucide-react";
import { useState } from "react";

export default function BottomTabs() {
  const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="w-full border-t bg-white px-4 py-1 text-sm flex items-center space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            console.log(`${tab} clicked`);
            setActiveTab(tab);
          }}
          className={`py-1 px-2 border rounded-sm ${
            activeTab === tab
              ? "bg-green-50 border-green-700 text-green-800 font-medium underline underline-offset-4"
              : "text-gray-600 hover:text-black"
          }`}
        >
          {tab}
        </button>
      ))}

      {/* Plus Button */}
      <button
        onClick={() => console.log("Add Tab clicked")}
        className="text-gray-500 hover:text-black"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
