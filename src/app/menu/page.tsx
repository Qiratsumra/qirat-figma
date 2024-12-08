import Dessert from '@/components/ui/Dessert'
import Drinks from '@/components/ui/Drinks'
import Main from '@/components/ui/Main'
import MainCourse from '@/components/ui/MainCourse'
import StarterMenu from '@/components/ui/Starter'
import Work from '@/components/ui/Work'

import React from 'react'

export default function page() {
  return (
    <div>
        < StarterMenu/>
        <hr className='border-orange-500 mx-3'/>
        <MainCourse/>
        <Main/>
        <Dessert/>
        <hr  className='border-orange-500 mx-3' />
        <Drinks/>
        <Work/>
    </div>
  )
}
