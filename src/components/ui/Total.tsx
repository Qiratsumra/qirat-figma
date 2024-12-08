import React from 'react'

export default function Total() {
  return (
    <div className="flex justify-evenly gap-6 max-sm:block">
    

<form action="" >
<div className="space-y-4 mt-8 border-2 w-[600px] h-[270px] max-sm:mx-2 max-sm:h-fit max-sm:w-fit">
<h2 className="text-center text-4xl font-bold max-sm:text-center max-sm:text-2xl">Coupon Code</h2>
                        <p className="text-xl mx-3 max-sm:text-start max-sm:text-xs max-sm:mx-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus maxime pariatur id voluptates ullam, sequi ad. Facilis enim vel nesciunt.
                        </p>
                       <div className="mx-4 flex justify-between max-sm:block max-sm:gap-y-5:">
                       <input type="text" placeholder="Full Name"
                            className=" py-3 bg-white w-full text-gray-800 text-sm border-2 px-5 border-gray-300 focus:border-blue-600 outline-none" />
                             <button type="button"
        className="px-5 py-2.5 rounded-lg text-sm  bg-orange-400 font-medium text-white border border-current  hover:text-orange-700 transition-all duration-300 max-sm:w-full">Apply</button>
                       </div>
                        </div>
</form>


                   
<div className='border-2 px-4 m-3'>
<h2 className="text-center text-4xl font-bold max-sm:text-center max-sm:text-2xl">Total Bills</h2>
<div>
<table className="min-w-full border-2">
        <thead className=" whitespace-nowrap border-2">
          <tr>
            <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
              SubTotal
            </th>
            <th>$120.00</th>
          </tr>
        </thead>
        <tbody className="bg-white whitespace-nowrap border-2">
          <tr>
            <td className="px-4 py-4 text-sm text-gray-800">
              Shipping Charges
            </td>
            <td>$00.00</td>
            </tr>
          </tbody>
          <thead className='border-2'>
            <tr>
              <th>Total Amount</th>
              <th>$205.00</th>
            </tr>
          </thead>
        </table>
        <button type="button"
        className="bg-orange-600 py-2.5 min-w-[140px] shadow-xl shadow-orange-200 text-white text-sm tracking-wider w-full font-medium border-none outline-none active:shadow-inner">Orange</button>
</div>
<div></div>
</div>
</div>
)
}
