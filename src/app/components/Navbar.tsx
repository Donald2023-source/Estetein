'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../Assets/logo.png'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MenuIcon, X } from 'lucide-react'

const Navbar = () => {
  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about-us' },
    { name: 'Properties', link: '/properties' },
    { name: 'Services', link: '/services' },
  ]

  const pathName = usePathname();
  const [nav, setNav] = useState(false);

  return (
    <header className="py-5 px-4 lg:px-12">
      <nav className='flex items-center justify-between'>
        <Link href={'/'}>
          <span className='flex items-center gap-2'>
            <Image className='h-10 w-10' src={logo} alt='logo.png'/>
            <h4 className='font-medium text-lg'>Estatein</h4>
          </span>
        </Link>
        
        <div className={nav ? 
          'flex lg:flex-row flex-col bg-black lg:h-fit h-full items-center lg:bg-transparent lg:relative fixed left-0 mx-auto right-0 justify-center top-0 gap-10 ' 
          : 
          'hidden lg:flex gap-20 h-full'}>
          {navLinks.map((link, idx) => (
            <div key={idx}>
              {pathName === link.link ? (
                <Link className='text-primary mx-3' href={link.link}>{link.name}</Link>
              ): (
                <Link className='hover:text-primary text-gray-500' href={link.link}>{link.name}</Link>
              )}
            </div>
          ))}
        </div>

        <Button onClick={() => setNav(!nav)} className='bg-black lg:flex hidden text-white'>Contact Us</Button>

        {!nav ? (
          <MenuIcon onClick={() => setNav(true)} className='cursor-pointer lg:hidden flex'/>
        ) : (
          <X onClick={() => setNav(false)} className='absolute lg:hidden flex text-white left-0 right-10 ml-auto font-bold cursor-pointer top-10'/>
        )}
      </nav>
    </header>
  )
}

export default Navbar
