import React, { useContext, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
import { CommercialRegistrationContext } from '../../../Contexts/CommericalRegistration.context';

const Step4 = () => {

  const {handleStepBackward, registrationDetails} = useContext(CommercialRegistrationContext);
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const {cost, name} = registrationDetails;

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: cost * 100 }),
    }).then((res) => {
      return res.json();
    });

    console.log(response);

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: name,
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!');
      }
    }
  };

  return (
    <section className='flex flex-col items-center justify-center gap-5 m-10'>
        <h2 className='text-3xl'>You're nearly there...</h2>

        <div className='flex flex-row items-center gap-4 border-2 rounded-lg p-4 border-cMono300'>
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
        </div>

        <form className='flex flex-col items-center justify-center gap-3' onSubmit={handlePayment}>

          <h2>Please enter your card details below</h2>

          <div className='w-full sm:w-96 bg-cMono300 rounded-3xl p-5 flex flex-col gap-2'>
            <CardElement />
          </div>

          <div className='w-full flex flex-row justify-around items-center'>
            <button className='btn w-5/12' onClick={handleStepBackward} type='button'>Back</button>
            { isProcessingPayment ? 
              <progress className="progress w-40"></progress> :
              <button className='btn w-5/12' >Lets go!</button>
            }
          </div>
          
        </form>

        
    </section>
  )
}

export default Step4;