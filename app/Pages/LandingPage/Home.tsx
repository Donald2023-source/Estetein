import Hero from '@/app/components/Hero'
import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Link href={'/studio'}>Studio</Link>
    </div>
  )
}

export default Home