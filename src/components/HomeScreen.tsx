import React from 'react'
import '../style/css/style.css'
import UpperSection from './UpperSection'
import BottomSection from './BottomSection'

const HomeScreen: React.FC = () => {
  return (
    <div>
      <UpperSection />
      <BottomSection />
    </div>
  )
}

export default HomeScreen