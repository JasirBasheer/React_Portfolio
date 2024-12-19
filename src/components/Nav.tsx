import { BriefcaseBusiness, Menu, Navigation } from "lucide-react";
import { PiWarningCircleDuotone } from "react-icons/pi";
import { RiHome2Line, RiStackLine } from "react-icons/ri";

const Nav = () => {
  return (
    <div className="sm:h-full sm:col-span-1 dark:bg-[rgb(15,23,42)] light:bg-slate-100  justify-end sm:relative absolute bottom-0">
    <div className=" dark:sm:bg-[rgb(15,23,42)] dark:bg-[rgba(255,255,255,0.03)] sm:h-screen h-[5rem] flex items-center justify-end sm:border-r-[1px] dark:border-[rgb(30,41,59)] light:border-[rgb(30,41,59)]" >
      <div className="flex  sm:w-[6rem] w-screen sm:h-[27rem]  sm:flex-col items-center sm:text-[24px] text-[22px]  justify-center sm:gap-10 gap-8 px-6 sm:px-0 "> 
      <div className="sm:w-[1.4rem] sm:h-[1.4rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer">
      <RiHome2Line className="w-full h-full" />
    </div>
    <div className="sm:w-[1.4rem] sm:h-[1.4rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer">
      <PiWarningCircleDuotone className="w-full h-full rotate-180" />
    </div>
    <div className="sm:w-[1.4rem] sm:h-[1.4rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer">
      <RiStackLine className="w-full h-full" />
    </div>
    <div className="sm:w-[1.4rem] sm:h-[1.4rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer">
      <BriefcaseBusiness className="w-full h-full" />
    </div>
    <div className="sm:w-[1.4rem] sm:h-[1.4rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer">
      <Menu className="w-full h-full" />
    </div>
    <div className="sm:w-[1.4rem] sm:h-[1.4rem] w-[1.4rem] h-[1.4rem] flex items-center justify-center text-[rgb(148,163,184)] cursor-pointer">
      <Navigation className="w-full h-full" />
    </div>
 
      </div>
    </div>
    </div>
  )
}

export default Nav