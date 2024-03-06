import React from 'react'
import ParagraphTwo from '../ParagraphTwo'
import { Link } from 'react-router-dom'

const SubMenu = () => {
  return (
    <>
    <div className="flex pt-10">
        <Link><ParagraphTwo text='Overview' className='!text-btnColor'/></Link>
        <Link><ParagraphTwo text='Itinerary' className='!text-subColor px-14'/></Link>
        <Link><ParagraphTwo text='Inclusions' className='!text-subColor'/></Link>
        <Link><ParagraphTwo text='Reviews' className='!text-subColor pl-10'/></Link>
        <Link><ParagraphTwo text='FAQ' className='!text-subColor px-14'/></Link>
        <Link><ParagraphTwo text='Essential Info' className='!text-subColor'/></Link>
    </div>
    </>
  )
}

export default SubMenu