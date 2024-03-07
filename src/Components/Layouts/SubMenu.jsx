import React from 'react'
import ParagraphTwo from '../ParagraphTwo'
import { Link } from 'react-router-dom'

const SubMenu = () => {
  return (
    <>
    <div className="flex pt-10">
        <Link to="#"><ParagraphTwo text='Overview' className='!text-subColor hover:!text-btnColor'/></Link>
        <Link to="#"><ParagraphTwo text='Itinerary' className='!text-subColor px-14 hover:!text-btnColor'/></Link>
        <Link to="#"><ParagraphTwo text='Inclusions' className='!text-subColor hover:!text-btnColor'/></Link>
        <Link to="#"><ParagraphTwo text='Reviews' className='!text-subColor pl-10 hover:!text-btnColor'/></Link>
        <Link to="#"><ParagraphTwo text='FAQ' className='!text-subColor px-14 hover:!text-btnColor'/></Link>
        <Link to="#"><ParagraphTwo text='Essential Info' className='!text-subColor hover:!text-btnColor'/></Link>
    </div>
    </>
  )
}

export default SubMenu