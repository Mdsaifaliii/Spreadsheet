import { ChevronRight, MoreHorizontal, Search, Bell } from "lucide-react";

export default function TopHeaderBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white text-sm">
      <div className="flex items-center gap-2 text-gray-600">
        <div className="w-5 h-5 bg-green-600 rounded-sm flex items-center justify-start">
          <div className="w-3.5 h-4 bg-white ml-[1px] rounded-sm"></div>
        </div>
        <span className="text-gray-400">Workspace</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-400">Folder 2</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-gray-900 font-semibold">Spreadsheet 3</span>

        <MoreHorizontal className="w-5 h-5 text-gray-500 ml-2 cursor-pointer" />
      </div>

      <div className="flex items-center gap-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-8 pr-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none"
          />
        </div>

        <div className="relative cursor-pointer">
          <Bell className="w-8 h-10 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs px-1.5 py-0.5 rounded-full">
            2
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">
            JD
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-gray-700 font-medium">John Doe</span>
            <span className="text-gray-400 text-xs">john.doe@email.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
