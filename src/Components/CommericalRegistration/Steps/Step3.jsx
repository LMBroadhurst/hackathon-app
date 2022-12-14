import React, { useContext } from 'react';
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context';

const Step3 = () => {

  const {handleStepBackward, handleStepForward, registrationDetails, setRegistrationDetails} = useContext(CommercialRegistrationContext);

  const handleSelectPackage = (event) => {

    const clickedProduct = event.target.value;

    if (clickedProduct === 'pro') {
      setRegistrationDetails({...registrationDetails, cost: 2499});
      console.log('pro')
    } else if (clickedProduct === 'pro+') {
      setRegistrationDetails({...registrationDetails, cost: 4999});
    } else {
      setRegistrationDetails({...registrationDetails, cost: 999});
    }

    setRegistrationDetails({...registrationDetails, product: clickedProduct});

    console.log(registrationDetails);
  }


  return (
    <section>

      <form className='flex flex-col gap-4'>

        <div className='flex flex-row items-center gap-4 rounded-lg p-4 bg-white'>
          <div className=''>
            <h2 className='text-2xl font-bold flex flex-row items-end gap-4'>
              Basic Plan
              <span className='text-sm pb-1 text-secondary'>£9.99 per month</span>
            </h2>

            <p>The Pro+ FUN@5 plan consists of the following:</p>

            <ul className='list-disc list-inside'>
              <li>Promoted throughout app via our promo tablet</li>
              <li>Users can view basic details of venue and will be linked to your website</li>
              <li>Analytics on how our users respond to your promo card and clicks through to your website</li>
            </ul>
          </div>
          <input type="radio" value={'basic'} name='packageSelector' className='radio' onClick={handleSelectPackage}/>
        </div>

        <div className='flex flex-row items-center gap-4 bg-white rounded-lg p-4'>
          <div className=''>
            <h2 className='text-2xl font-bold flex flex-row items-end gap-4'>
              Pro Plan
              <span className='text-sm pb-1 text-secondary'>£24.99 per month</span>
            </h2>

            <p>The Pro+ FUN@5 plan consists of the following:</p>

            <ul className='list-disc list-inside'>
              <li>Promoted throughout app via our promo tablet</li>
              <li>Users can view basic details of venue and will be linked to your website</li>
              <li>Analytics on how our users respond to your promo card and clicks through to your website</li>
            </ul>
          </div>
          <input type="radio" value={'pro'} name='packageSelector' className='radio' onClick={handleSelectPackage}/>
        </div>

        <div className='flex flex-row items-center gap-4 bg-white rounded-lg p-4 '>
          <div className=''>
            <h2 className='text-2xl font-bold flex flex-row items-end gap-4'>
              Pro+ Plan
              <span className='text-sm pb-1 text-secondary'>£49.99 per month</span>
            </h2>

            <p>The Pro+ FUN@5 plan consists of the following:</p>

            <ul className='list-disc list-inside'>
              <li>Promoted throughout app via our promo tablet</li>
              <li>Users can view basic details of venue and will be linked to your website</li>
              <li>Analytics on how our users respond to your promo card and clicks through to your website</li>
            </ul>
          </div>
          <input type="radio" value={'pro+'} name='packageSelector' className='radio' onClick={handleSelectPackage}/>
        </div>
        
        
        <div className='flex flex-row justify-center gap-10 items-center'>
            <button className='btn w-40' onClick={handleStepBackward}>Back</button>
            <button className='btn w-40' onClick={handleStepForward}>Pay</button>
        </div>
        
      </form>
    </section>
  )
}

export default Step3