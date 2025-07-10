import { useState } from "react";
import { IoLinkSharp } from "react-icons/io5";
import { LuGitBranch } from "react-icons/lu";
import {
  Globe,
  CalendarDays,
  LayoutDashboard,
  ChevronDown,
  CircleDot,
  CircleUserRound,
  Settings,
  RefreshCcw,
} from "lucide-react";

export default function SpreadsheetTable() {
  const columns = [
    { label: "Job Request", icon: LayoutDashboard },
    { label: "Submitted", icon: CalendarDays },
    { label: "Status", icon: CircleDot },
    { label: "Submitter", icon: CircleUserRound },
    { label: "URL", icon: Globe },
    { label: "Assigned", icon: Settings, group: "ABC", bg: "bg-green-100", text: "text-green-800" },
    { label: "Priority", icon: Settings, group: "Answer a question", bg: "bg-purple-100", text: "text-purple-800" },
    { label: "Due Date", icon: Settings, group: "Answer a question", bg: "bg-purple-100", text: "text-purple-800" },
    { label: "Est. Value", icon: Settings, group: "Extract", bg: "bg-orange-100", text: "text-orange-800" },
  ];

  const initialData = [
    ["Launch social media campaign for product", "15-11-2024", "In-process", "Aisha Patel", "www.aishapatel...", "Sophie Choudhury", "Medium", "20-11-2024", "6,200,000 ₹"],
    ["Update press kit for company redesign", "28-10-2024", "Need to start", "Irfan Khan", "www.irfankhan...", "Tejas Pandey", "High", "30-10-2024", "3,500,000 ₹"],
    ["Finalize user testing feedback for report", "05-12-2024", "In-process", "Mark Johnson", "www.markjohnson...", "Rachel Lee", "Medium", "10-12-2024", "4,750,000 ₹"],
    ["Design new features for the website", "10-01-2025", "Complete", "Emily Green", "www.emilygreen...", "Tom Wright", "Low", "15-01-2025", "5,900,000 ₹"],
    ["Prepare financial report for Q4", "25-01-2025", "Blocked", "Jessica Brown", "www.jessicabrown...", "Kevin Smith", "Low", "30-01-2025", "2,800,000 ₹"],
  ];

  const [tableData, setTableData] = useState([...initialData, ...Array.from({ length: 10 }, () => Array(9).fill(""))]);

  const getStatusBadge = (status: string) => {
    const base = "px-2 py-[2px] text-xs rounded-full font-medium";
    switch (status) {
      case "In-process": return `${base} bg-yellow-100 text-yellow-700`;
      case "Need to start": return `${base} bg-blue-100 text-blue-700`;
      case "Complete": return `${base} bg-green-100 text-green-700`;
      case "Blocked": return `${base} bg-red-100 text-red-700`;
      default: return base;
    }
  };

  const getPriorityClass = (priority: string) => {
    if (priority === "High") return "text-red-600";
    if (priority === "Medium") return "text-yellow-600";
    if (priority === "Low") return "text-blue-600";
    return "";
  };

  const handleCellEdit = (rowIndex: number, colIndex: number, newValue: string) => {
    setTableData((prev) => {
      const updated = [...prev];
      updated[rowIndex][colIndex] = newValue;
      return updated;
    });
  };

  return (
    <div className="w-full text-xs font-sans overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
      <div className="flex items-center justify-between bg-[#f4f4f4] px-4 py-2 border-b">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-md shadow-sm">
            <IoLinkSharp />
            <span className="font-medium text-sm text-gray-800">Q3 Financial Overview</span>
          </div>
          <div className="bg-gray-200 px-1.5 py-1 rounded-md shadow-sm">
            <RefreshCcw className="w-4 h-4 text-orange-400" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-green-100 text-green-800 text-[10px] px-2 py-[2px] rounded-sm font-medium flex items-center gap-1">
            <LuGitBranch /> ABC
          </span>
          <span className="bg-purple-100 text-purple-800 text-[10px] px-2 py-[2px] rounded-sm font-medium flex items-center gap-1">
            <LuGitBranch /> Answer a question
          </span>
          <span className="bg-orange-100 text-orange-800 text-[10px] px-2 py-[2px] rounded-sm font-medium flex items-center gap-1">
            <LuGitBranch /> Extract
          </span>
          <span className="text-xl font-semibold text-gray-500 cursor-pointer">+</span>
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-8 bg-[#f4f4f4] border-r text-center text-gray-400 font-medium py-2">#</div>
        {columns.map((col, i) => (
          <div
            key={i}
            className={`w-[160px] px-3 py-2 border-r flex items-center justify-between text-xs font-semibold ${col.bg || "bg-[#f4f4f4]"} ${col.text || "text-gray-700"}`}
          >
            <div className="flex items-center gap-1">
              {col.icon && <col.icon className="w-3 h-3 text-gray-500" />} <span>{col.label}</span>
            </div>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
        ))}
      </div>

      {tableData.map((row, rowIdx) => (
        <div key={rowIdx} className="flex w-full border-b">
          <div className="w-8 text-center py-2 border-r text-gray-400">{rowIdx + 1}</div>
          {row.map((cell, colIdx) => {
            if (colIdx === 2) {
              return (
                <div key={colIdx} className="w-[160px] px-3 py-1.5 border-r">
                  <span className={getStatusBadge(cell)}>{cell}</span>
                </div>
              );
            }
            if (colIdx === 6) {
              return (
                <div key={colIdx} className={`w-[160px] px-3 py-1.5 border-r font-medium ${getPriorityClass(cell)}`}>{cell}</div>
              );
            }
            return (
              <div
                key={colIdx}
                contentEditable
                suppressContentEditableWarning
                className="w-[160px] px-3 py-1.5 border-r text-gray-800 focus:outline-none"
                onBlur={(e) => handleCellEdit(rowIdx, colIdx, e.currentTarget.textContent || "")}
              >
                {cell}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
