import React from 'react'

const Responsivebuy = () => {
  return (
    <div className="fixed  md:hidden bottom-0 w-full z-50 flex items-center justify-end px-6  py-2 transition-all duration-300 bg-white text-black shadow-lg border-t-1 border-black">
      <h2 className="text-xl  font-bold p-1 pr-6 text-orange-600">₹2200.00</h2>
      <button
            
            className="  bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-semibold"
          >
            BUY NOW
          </button>
    </div>
  )
}

export default Responsivebuy
