import twitter from './../../../public/assets/icons/twitter.svg';
import instagram from './../../../public/assets/icons/instagram.svg';
import discord from './../../../public/assets/icons/discord.svg';
import telegram from './../../../public/assets/icons/telegram.svg';
import tiktok from './../../../public/assets/icons/tiktok.svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="mt-[80px]">
            <div className="container flex flex-col items-center justify-center">
                <h1 className="text-[28px] sm:text-[52px] font-bold mb-4 text-center text-secondary">Contact Us</h1>
                <p className="text-[16px] max-w-[364px] text-center">Email us at <span className="text-secondary">support@pizzachat</span> for any 
                queries or support</p>

                {/* social links */}
                <div className="mt-9 mb-12 flex gap-6 ">
                    <button className='h-10 w-10 rounded-full bg-black flex items-center justify-center hover:bg-[#69A84E] transition-all duration-300 shadow-inner'>
                        <Image src={twitter} alt="twitter" />
                    </button>
                    {/* telegarm */}
                    <button className='h-10 w-10 rounded-full bg-black flex items-center justify-center hover:bg-[#69A84E] transition-all duration-300 shadow-inner'>
                        <Image src={telegram} alt="telegram" />
                    </button>
                    {/* discord */}
                    <button className='h-10 w-10 rounded-full bg-black flex items-center justify-center hover:bg-[#69A84E] transition-all duration-300 shadow-inner'>
                        <Image src={discord} alt="discord" />
                    </button>
                    {/* instagram */}
                    <button className='h-10 w-10 rounded-full bg-black flex items-center justify-center hover:bg-[#69A84E] transition-all duration-300 shadow-inner'>
                        <Image src={instagram} alt="instagram" />
                    </button>
                    {/* tiktok */}
                    <button className='h-10 w-10 rounded-full bg-black flex items-center justify-center hover:bg-[#69A84E] transition-all duration-300 shadow-inner'>
                        <Image src={tiktok} alt="tiktok" />
                    </button>
                </div>

                <hr className='bg-[linear-gradient(to_right,_#060609,_#69A94E,_#060609)] h-[2px] w-1/2 sm:w-full' />

                {/* right reserver */}
                <div className="flex py-8">
                    <p className="text-[14px] text-[#8C8B8B]">© 2024 All right reserved pizzachat</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;