import React from 'react'
import pin from '../style/images/location.svg'

const UpperSection: React.FC = () => {
    return (
        <div className="bg-[#0D74AF] text-white px-1 h-[229px] pt-28 rounded-b-[2.5rem] ps-3">
            <div className='custom-font'>Welcome to</div>
            <div className='custom-font'>IIMA VENTURES</div>
            <div className='flex ps-4 pt-2'>
                <img src={pin} alt='location' />
                <div className='location-font ps-2'>Ahmedabad, India</div>
            </div>
        </div>
    )
}

export default UpperSection