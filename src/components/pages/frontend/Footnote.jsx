import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const Footnote = () => {
  return (
    <footer className='py-10 md:py-24 bg-black text-white'>
            <div className="container">
                <div className="flex gap-5  md:gap-0 md:grid md:grid-cols-[1fr,_1fr,_2fr,2fr]">

                    <ul className='space-y-5'>
                        <li>Privacy Policy</li>
                        <li>Terms and Condition</li>
                        <li>Cookie Policy</li>
                    </ul>

                    <ul className='space-y-5'>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Delivery</li>
                    </ul>

                    <ul className='space-y-5'>
                        <li>Gallery</li>
                        <li>Contact</li>
                    </ul>

                    <div>

                        <ul className='flex gap-5 mb-5'>
                            <li><Facebook/></li>
                            <li><Twitter/></li>
                            <li><Instagram/></li>
                            <li><Youtube/></li>
                        </ul>

                        <p className='mb-3'>044 6595 6254</p>
                        <p>10 Ave Rizal San Pablo City, Laguna</p>

                    </div>

                </div>
            </div>
        </footer>
  )
}

export default Footnote