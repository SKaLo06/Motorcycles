import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
    const handleScroll = () => {
        // Get the element you want to scroll to (by its ID).
        const sectionToScroll = document.getElementById('motorcyclesSection');

        // Scroll to the section using smooth scrolling.
        if (sectionToScroll) {
            sectionToScroll.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='hero'>
            <div className="flex-1 pt-36 padding-x">
                <h1 className='hero__title'>
                    Find, Book, or rent a motorcycle in Morocco — quickly and easily!
                </h1>
                <p className='hero__subtitle'>
                    Streamline your motorcycle rental experience with our effortless booking process.
                </p>
                <CustomButton
                    title="Explore motorcycles"
                    containerStyles='bg-green-500 text-white rounded-full mt-10'
                    handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className='object-contain' />
                    <div className="hero__image-overlay"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
