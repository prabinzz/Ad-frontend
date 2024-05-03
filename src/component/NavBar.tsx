import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";
import { TbBookmarkEdit } from "react-icons/tb";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full px-12 py-2 border-b-[1px] shadow-sm">
      <div className="flex gap-8 items-center  h-90">
        <div className="text-3xl font-bold">Logo</div>
        <div className="bg-gray-100 flex items-center px-2 py-2 rounded-3xl">
          <AiOutlineSearch className="text-3xl" />
          <Input placeholder="Search" className="border-none text-base" />
        </div>
      </div>
      {/* End inputs bar*/}

      <div className="flex gap-8 items-center h-90">
        <div className="flex gap-2">
          <TbBookmarkEdit className="text-3xl" />
          <p className="text-xl">Write</p>
        </div>
        <div>
          <AiOutlineBell className="text-3xl" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-30 bg-gray-200 space-y-2 p-2">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Admin Pannel</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Quit</DropdownMenuItem>
            <DropdownMenuItem></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <div className="w-16 h-16 rounded-full bg-gray-300"></div> */}
      </div>
      {/* End action bar */}
    </div>
  );
};

export default NavBar;
