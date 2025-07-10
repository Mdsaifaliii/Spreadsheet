import { FaRegShareSquare } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";
import { TbArrowsSort } from "react-icons/tb";
import { IoFilterOutline } from "react-icons/io5";
import { EyeOff, LayoutGrid, Download, Upload, Plus } from "lucide-react";

export default function HeaderToolbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white text-sm">
      =
      <div className="flex items-center gap-5 text-gray-700">
        <button className="flex items-center gap-1 text-gray-700 hover:text-black">
          Tool bar <MdDoubleArrow />
        </button>

        <button className="flex items-center gap-1 hover:text-black">
          <EyeOff className="w-4 h-4" /> Hide fields
        </button>

        <button className="flex items-center gap-1 hover:text-black">
          <TbArrowsSort /> Sort
        </button>

        <button className="flex items-center gap-1 hover:text-black">
          <IoFilterOutline /> Filter
        </button>

        <button className="flex items-center gap-1 hover:text-black">
          <LayoutGrid className="w-4 h-4" /> Cell view
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 border border-gray-300 rounded px-3 py-1.5 text-gray-700 hover:bg-gray-50">
          <Download className="w-4 h-4" /> Import
        </button>

        <button className="flex items-center gap-1 border border-gray-300 rounded px-3 py-1.5 text-gray-700 hover:bg-gray-50">
          <Upload className="w-4 h-4" /> Export
        </button>

        <button className="flex items-center gap-1 border border-gray-300 rounded px-3 py-1.5 text-gray-700 hover:bg-gray-50">
          <FaRegShareSquare className="w-4 h-4" /> Share
        </button>

        <button className="flex items-center gap-1 bg-green-700 hover:bg-green-800 text-white px-3 py-1.5 rounded">
          <Plus className="w-4 h-4" /> New Action
        </button>
      </div>
    </div>
  );
}
