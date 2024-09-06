import searchButton from './../../../public/assets/images/search_button.svg';
import Image from 'next/image';
const Search = () => {
    return (
        <div className="relative flex items-center w-full lg:max-w-[1135px] lg:w-full justify-center lg:mt-[35px]">
            <Image src={searchButton} alt="search" className='h-[20px] lg:h-[41px] w-[10px] lg:w-[30px] absolute lg:left-8 left-[14px] lg:top-[25px] top-[11px]' />
            <input className=' w-full h-[42px] lg:h-[86px] text-[#838383] text-[11px] lg:text-[28px] placeholder:text-[#838383] p-2 lg:p-[15px]  focus:ring-0 focus:outline-none focus:border-0 px-[32px] pr-[80px] lg:pr-[190px] lg:px-[80px] rounded-[35px] bg-[#C8FFAB]/30' placeholder='Search by name or address' />
            <button className='px-[18px] lg:px-[55px] text-[8px] lg:text-[20px] text-black bg-secondary/70 rounded-[21px] absolute right-[7px] top-[5px] lg:top-[12px] py-[9px] lg:py-[14px]'>search</button>
        </div>
    )
}

export default Search