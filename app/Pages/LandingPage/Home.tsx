import Hero from '@/app/components/Hero'
import React from 'react'
import Link from 'next/link'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Link href={'/studio'}>Studio</Link>
        
        <div>
          <h2>Featured Properties</h2>
        </div>
    </div>
  )
}

export default Home