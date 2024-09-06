import payment from './../../../public/assets/images/payment.svg'
import trash from './../../../public/assets/images/trash.svg'
import check from './../../../public/assets/images/check.svg'
import printer from './../../../public/assets/images/printer.svg'
import Image from 'next/image'
const OrderDetails = () => {
    return (
        <div className='container px-2 sm:px-0'>

            {/* single card */}
            <div className=" w-full mt-[30px] lg:mt-[103px] bg-secondary rounded-[35px] px-[27px] lg:px-[86px] flex items-center justify-between">
                {/* details */}
                <div className="left part py-6 flex flex-col">
                    <p><span className='text-[10px] md:text-[20px] font-bold'>Order No</span> <span className='text-[19px] md:text-[32px] '>/#0023</span></p>
                    <h2 className='text-[15px] lg:text-[38px] font-bold'>John  - 123 Any St <span className='font-semibold text-[22px] hidden lg:flex'>(0.5 miles)</span></h2>

                    {/* payment seciton */}
                    <div className="text-[15px] lg:text-[28px] flex items-center justify-start mt-[4px] lg:mt-[21px]">
                        <p>Payment</p>
                        <Image src={payment} alt="payment" className='h-3 w-3 lg:h-8 lg:w-8 ml-[48px] lg:ml-[173px]' />
                    </div>
                    <small className='text-white text-[10px] lg:text-[12px]'>feb 25, 2024</small>
                    {/* amounts */}
                    <div className="flex flex-col mt-[4px] lg:mt-2">
                        <p className='text-[14px] lg:text-[26px]'>$124</p>
                        <p className='text-[14px] lg:text-[26px]'>20:02</p>
                    </div>
                    {/* order details */}
                    <div className="mt-[4px] lg:mt-5">
                        <p className='text-[14px] lg:text-[20px]'>1 Lg Cheese</p>
                        <p className='text-[14px] lg:text-[20px]'>1 Lg Pepp</p>
                        <p className='text-[14px] lg:text-[20px]'>2 Md Veggie</p>
                        <p className='text-[14px] lg:text-[20px]'>…</p>
                    </div>
                </div>
                {/* actions */}
                <div className="py-20 grid grid-cols-2 grid-rows-2 gap-3 lg:gap-9">
                    <button className='bg-white w-[58px] lg:w-[152px] flex items-center justify-center h-[58px] lg:h-[152px] rounded-[21px] border-[2px]'>
                        <Image src={trash} alt='trash' className='h-[30px] w-[30px] lg:h-[78px] lg:w-[78px]' />
                    </button>
                    <button className='bg-white w-[58px] lg:w-[152px] flex items-center justify-center h-[58px] lg:h-[152px] rounded-[21px] border-[2px]'>
                        <Image src={check} alt='check' className='h-[30px] w-[30px] lg:h-[78px] lg:w-[78px]' />
                    </button>
                    <button className='bg-white w-[58px] lg:w-[152px] flex items-center justify-center h-[58px] lg:h-[152px] rounded-[21px] border-[2px]'>
                    </button>
                    <button className='bg-white w-[58px] lg:w-[152px] flex items-center justify-center h-[58px] lg:h-[152px] rounded-[21px] border-[2px]'>
                        <Image src={printer} alt='printer' className='h-[30px] w-[30px] lg:h-[78px] lg:w-[78px]' />
                    </button>
                </div>
            </div>

            {/* single card */}
            <div className=" w-full mt-[30px] lg:mt-[103px] bg-primary rounded-[35px] px-[27px] lg:px-[86px] flex items-center justify-between">
                {/* details */}
                <div className="left part py-6 flex flex-col">
                    <p><span className='text-[10px] md:text-[20px] font-bold'>Order No</span> <span className='text-[19px] md:text-[30px] '>/#0023</span></p>
                    <h2 className='text-[15px] lg:text-[38px] font-bold'>John  - 123 Any St <span className='font-semibold text-[22px] hidden lg:flex'>(0.5 miles)</span></h2>

                    {/* payment seciton */}
                    <div className="text-[15px] lg:text-[28px] flex items-center justify-start mt-[4px] lg:mt-[21px]">
                        <p>Payment</p>
                        <Image src={payment} alt="payment" className='h-3 w-3 lg:h-8 lg:w-8 ml-[48px] lg:ml-[173px]' />
                    </div>
                    <small className='text-white text-[10px] lg:text-[12px]'>feb 25, 2024</small>
                    {/* amounts */}
                    <div className="flex flex-col mt-[4px] lg:mt-2">
                        <p className='text-[14px] lg:text-[26px]'>$124</p>
                        <p className='text-[14px] lg:text-[26px]'>20:02</p>
                    </div>
                    {/* order details */}
                    <div className="mt-[4px] lg:mt-5">
                        <p className='text-[14px] lg:text-[20px]'>1 Lg Cheese</p>
                        <p className='text-[14px] lg:text-[20px]'>1 Lg Pepp</p>
                        <p className='text-[14px] lg:text-[20px]'>2 Md Veggie</p>
                        <p className='text-[14px] lg:text-[20px]'>…</p>
                    </div>
                </div>
                {/* actions */}
                <div className="py-20 grid grid-cols-2 grid-rows-2 gap-3 lg:gap-9">
                    <button className='bg-white w-[58px] lg:w-[152px] flex items-center justify-center h-[58px] lg:h-[152px] rounded-[21px] border-[2px]'>
                        <Image src={trash} alt='trash' className='h-[30px] w-[30px] lg:h-[78px] lg:w-[78px]' />
                    </button>
                    <button className='bg-white w-[58px] lg:w-[152px] flex items-center justify-center h-[58px] lg:h-[152px] rounded-[21px] border-[2px]'>
                        <Image src={check} alt='check' className='h-[30px] w-[30px] lg:h-[78px] lg:w-[78px]' />
                    </button>
                    <button className='bg-white w-[58px] lg:w-[152px] flex items-center justify-center h-[58px] lg:h-[152px] rounded-[21px] border-[2px]'>
                    </button>
                    <button className='bg-white w-[58px] lg:w-[152px] flex items-center justify-center h-[58px] lg:h-[152px] rounded-[21px] border-[2px]'>
                        <Image src={printer} alt='printer' className='h-[30px] w-[30px] lg:h-[78px] lg:w-[78px]' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails