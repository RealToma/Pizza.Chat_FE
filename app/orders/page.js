import Avatar from "../components/avatar/Avatar";
import OrderDetails from "../components/orderDetails/OrderDetails";
import Search from "../components/search/Search";
import settings from "./../../public/assets/images/settings.svg";
import Image from "next/image";
import Footer from "../components/footer/Footer";

export default function Orders() {
  return (
    <main className="flex pb-9 px-2 xl:px-0 min-h-screen flex-col items-center">
      {/* top section */}
      <div className="w-full lg:container px-2 mb-5 lg:mb-0 mt-[20px] lg:mt-[95px] flex items-center justify-between">
        {/* avatar in large screen */}
        <div className=" hidden lg:flex items-center justify-center gap-[17px] sm:gap-[44px]">
          <Avatar />
          <h1 className="text-[14px] sm:text-[28px] lg:text-[34px] mb-[10px] font-bold">
            Customer 1
          </h1>
        </div>
        {/* search */}
        <div className="lg:hidden mr-3  w-full">
          <Search />
        </div>

        {/* settings */}
        <button className="h-5 w-5 lg:h-10 lg:w-10 rounded-full">
          <Image src={settings} alt="settings" />
        </button>
      </div>

      {/* avatar small screen */}
      {/* avatar */}
      <div className="flex w-full mt-5 lg:hidden items-start justify-start gap-[17px] sm:gap-[44px]">
        <Avatar />
        <h1 className="text-[14px] sm:text-[28px] lg:text-[34px] mb-[10px] font-bold">
          Customer 1
        </h1>
      </div>

      {/* orders heading */}
      {/* desktop screen */}
      <div className="container hidden  border border-secondary pb-[54px] rounded-[35px] lg:flex items-center justify-center flex-col mt-[103px]">
        <div className="bg-secondary rounded-b-[35px] px-10 py-4 ">
          <p className="text-white text-[26px]">
            Today’s Orders, Fri Aug 23 | 6 New | 4 Delivered
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <Search />
        </div>
      </div>
      {/* mobile screen */}
      <div className="max-w-[300px] mt-3 w-full text-[12px] lg:hidden text-[#2A2A2A] rounded-[57px] p-[5px] flex items-center justify-center border border-dashed border-secondary">
        Today’s Orders, Fri Aug 23 | 6 New | 4 Delivered
      </div>

      {/* order details */}
      <OrderDetails />
      <Footer />
    </main>
  );
}
