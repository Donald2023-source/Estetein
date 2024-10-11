import React from 'react'
import { Button } from '@/components/ui/button'
const Hero = () => {
  return (
    <div>
        <div>
            <h2>Discover Your Dream Propery with Estatein</h2>
            <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>

            <span>
                <Button>Learn more</Button>
                <Button>Browse Properties</Button>
            </span>

            <div>
                <div>
                    <h2>200+</h2>
                    <p>Happy Customers</p>
                </div>

                <div>
                    <h2>10k+</h2>
                    <p>Properties For Clients</p>
                </div>

                <div>
                    <h2>10+</h2>
                    <p>Years Of Experience</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero