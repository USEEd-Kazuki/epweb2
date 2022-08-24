import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() =>{
        const handleScroll = () =>{
            if (window.scrollY > 0){
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
        <div className='flex items-center  md:pace-x-5'>
        <Image
        alt='logo'
        src={"/logo.svg"}
        height={80}
        width={80}
        className={"cursor-pointer object-contain flex-end"}
        />
        <Link href='/'>
      <h1 className='font-bold text-4xl cursor-pointer text-[#a30863]'>EPknoT</h1>
        </Link>
        <Link href='/'>
      <h1 className='font-bold text-4xl cursor-pointer text-[#4a641d]'>Co., Ltd.</h1>
        </Link>

        <ul className='hidden justify-end space-x-4 md:flex'>
            <Link href='/'>
            <li className='headerLink'>HOME</li>
            </Link>
            <Link href='/work'>
            <li className='headerLink'>WORK</li>
            </Link>
            <Link href='/about'>
            <li className='headerLink'>ABOUT US</li>
            </Link>
            <Link href='/team'>
            <li className='headerLink'>TEAM</li>
            </Link>

            {
                /* 
                            <Link href='/contact'>
                            <li className='headerLink'>CONTACT</li>
                            </Link>
                */
            }


        </ul>
        {/*Mobile Button*/}
        <div onClick={handleNav} className='block sm:hidden z-10 cursor-pointer'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/*Mobile Menu*/}
        <div className={nav ?'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300':
    'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
        <ul >
            <Link href='/'>
            <li className='p-4 text-4xl hover:text-[#4a641d]'>HOME</li>
            </Link>
            <Link href='/work'>
            <li className='p-4 text-4xl hover:text-[#4a641d]'>WORK</li>
            </Link>
            <Link href='/about'>
            <li className='p-4 text-4xl hover:text-[#4a641d]'>ABOUT US</li>
            </Link>
            <Link href='/team'>
            <li className='p-4 text-4xl hover:text-[#4a641d]'>TEAM</li>
            </Link>

            {/*             
            <Link href='/contact'>
            <li className='p-4 text-4xl hover:text-[#4a641d]'>CONTACT</li>
            </Link>
            */}
            
        </ul>
        </div>
        </div>
        <div>
        </div>
    </header>
  )
}

export default Header;