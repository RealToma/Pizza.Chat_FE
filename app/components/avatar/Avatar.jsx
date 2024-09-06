import Image from 'next/image'
import user from './../../../public/assets/images/user.jpeg'

const Avatar = () => {
  return (
    <div className='h-[50px] w-[50px] lg:h-[115px] lg:w-[115px] rounded-full  bg-cover bg-avatar-bg relative'>
        <Image src={user } alt="user" className='rounded-full h-[50px] w-[50px] lg:h-[115px] lg:w-[115px] object-cover shadow-avatar  absolute -top-[8px] -right-[8px]' />
    </div>
  )
}

export default Avatar