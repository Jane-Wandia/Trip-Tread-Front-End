import React from 'react'
import './CSS/Home.css'
import { TypeAnimation} from 'react-type-animation'

function Home(props) {
  return (
    <div className='home-container'>
    
      <div className='heading-container'>
            <h2>
            <TypeAnimation
            sequence={[
              'WANT',
              1000,
              'TO',
              1000,
              'FLY',
              1000,
            ]}
            cursor={false}
            wrapper='div'
            className='home-animation'
            easing='ease-in-out'
            repeat={2}
          />
            </h2>
            <div>
             <button className="link-btn" onClick={() => props.onFormSwitch('Home')}>Go to Airlines</button>
            </div>
      </div>
    </div>


  )
}
export default Home;