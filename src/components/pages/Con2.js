import React from 'react'
import mock from '../assets/app-mockup.png';

const Con2 = () => {
    return (
        <div className='container-fluid con2'>
            <div className='row'>
                <div className='col-sm'>
                    <img src={mock} alt='mock' />
                </div>
                <div className='col-sm col2'>
                    <h2>
                        18 Real Estate Mistakes That Make People Lose Money In Property
                        Investment.
              </h2>
                    <p>
                        Don't fall victim to landed property scam, demolition, third
                        party claimant and other losses in Nigeria Real Estate.
              </p>
                    <button type='button' className='custom-btn btn btn-lg'>
                        Access Now
              </button>
                </div>
            </div>
        </div>
    )
}

export default Con2
