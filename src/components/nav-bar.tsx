import React from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './main-nav'
import getCategories from '@/actions/get-categories'
import NavbarActions from './navbar-actions'

import Image from 'next/image'

export const revalidate = 0

const NavBar = async () => {
    const categories = await getCategories() 
  return (
    <div className='border-b'>
        <Container>
            <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
                <Link href="/" className='ml-4 flex lg-ml-0 gap-x-2'>
                    <div className='relative h-8 w-8'>
                        <Image
                         fill
                         alt="logo"
                         src='/images/logo.svg'
                         className="object-cover object-center"
                        />

                    </div>
                    
                </Link>

                <MainNav data={categories}/>
                <NavbarActions/>
            </div>
            
        </Container>
    </div>
        
  )
}

export default NavBar