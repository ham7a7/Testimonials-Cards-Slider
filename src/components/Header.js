import React from 'react'

const Header = () => {
  return (
    <div className={`px-8 md:px-44`}>
        <div className="text-center md:text-left mb-20">
            <p
                className={`text-3xl md:text-4xl text-primary-1 font-semibold mb-[4px] md:mb-2 `}
            >
            Testimonials
            </p>
            <div
                className={`w-8 h-[2px] md:h-1  bg-primary-1 rounded-sm inline-block md:block ease duration-300 delay-300`}
            ></div>
        </div>
    </div>
  )
}

export default Header