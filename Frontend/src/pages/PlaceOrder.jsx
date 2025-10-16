import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate, getCartAmount } = useContext(ShopContext);
  const [isProcessing, setIsProcessing] = useState(false);

  const amount = getCartAmount() * 100; // convert to cents/paise for Stripe/Razorpay

  // Stripe Checkout
  const handleStripePayment = async () => {
    setIsProcessing(true);

    try {
      const stripe = window.Stripe('pk_test_51LxyzYOUR_TEST_KEY'); // Replace with your Stripe publishable key

      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: 'price_1LxyzXXXX', quantity: 1 }], // Replace with Stripe price ID
        mode: 'payment',
        successUrl: window.location.origin + '/order',
        cancelUrl: window.location.origin + '/cart',
      });

      if (error) {
        toast.error(error.message);
        setIsProcessing(false);
      }
    } catch (err) {
      toast.error(err.message);
      setIsProcessing(false);
    }
  };

  // Razorpay Payment
  const handleRazorpayPayment = async () => {
    setIsProcessing(true);

    const options = {
      key: 'rzp_test_YourKeyHere', // Replace with your Razorpay test key
      amount: amount, // in paise
      currency: 'INR',
      name: 'My Store',
      description: 'Order Payment',
      handler: function (response) {
        toast.success('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        navigate('/order');
        setIsProcessing(false);
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      notes: {
        address: 'User Address'
      },
      theme: {
        color: '#000000'
      },
      modal: {
        ondismiss: () => setIsProcessing(false)
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePlaceOrder = () => {
    if (method === 'cod') {
      toast.success('Order placed successfully with Cash on Delivery!');
      navigate('/order');
    } else if (method === 'stripe') {
      handleStripePayment();
    } else if (method === 'razorpay') {
      handleRazorpayPayment();
    }
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className="text-xl my-3 sm:text-2xl">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="flex gap-3">
          <input type="text" placeholder='First Name' className='border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='Last Name' className='border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <input type="email" placeholder='Your Email' className='border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <input type="text" placeholder='Street' className='border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <div className="flex gap-3">
          <input type="text" placeholder='City' className='border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='State' className='border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <div className="flex gap-3">
          <input type="number" placeholder='Zip Code' className='border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='Country' className='border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <input type="number" placeholder='Phone' className='border-gray-300 rounded py-1.5 px-3.5 w-full'/>
      </div>

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button onClick={handlePlaceOrder} className='bg-black text-white px-16 py-3 text-sm rounded-lg'>
              {method === 'cod' ? 'PLACE ORDER' : 'PAY NOW'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
