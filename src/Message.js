import React from 'react'
import {
  MailIcon,
  DocumentTextIcon,
  AtSymbolIcon,

} from '@heroicons/react/solid'
import { FaGithub, FaTwitter } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
import { send } from 'emailjs-com';
//import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Message() {

  const [toSend, setToSend] = useState({
    from_name: '',
    subject:'',
    message: '',
  });
  const [verified,setVerified] = useState(false)
 

const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
     if (toSend.message.trim().length === 0 || toSend.from_name.trim().length === 0 || toSend.subject.trim().length === 0 ) {
      toast('No field should be left empty');
      return
    }
  
    send(
      'service_zk1b042',
      'template_gexkwh1',
      toSend,
      'LEDPasJUyVT8ScsU0'
    )
      .then((response) => {
        toast('Message sent. You will be replied soon. Thanks');
        setToSend({
          from_name: "",
          subject: "",
          message: "",
        })
    
        
      })
      .catch((err) => {
        toast('FAILED...', err);
      });
  };

  function onChangeCaptcha(value) {
  console.log("Captcha value:", value);
  setVerified(true)
}

  return (
    <div className="w-[full] md:w-[40%] border-2 grad9 rounded-xl border-slate-400 px-3 md:ml-auto ">
      <div className=' md:flex justify-between   px-4 py-4 w-full '>
        
<div className='md:w-full w-full  px-4  '>
         <h1 className='text-2xl md:text-2xl font-bold  px-4 py-4 text-slate-500 grad9'> Leave me a Message </h1>
         <form onSubmit={onSubmit }>
  
    <div className='flex w-full mb-[15px] h-12 grad8'>
    <div className="p-[10px] bg-slate-300 min-w-[50px] text-center"><AtSymbolIcon className='text-blue-700'/></div>
    <input type="email" className="peer... w-full md:w-full h-full px-5  text-left " 
    placeholder='Enter your E-mail address...'
    name='from_name'
    value={toSend.from_name}
    onChange={handleChange}
    />

     </div>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm ">
      Please provide a valid email address.
    </p>
   

    <div className='flex md:w-full mb-[15px] h-12 grad7'>
    <div className="p-[10px] bg-slate-300 min-w-[50px] text-center"><MailIcon className='text-blue-700'/></div>
    <input type="text" className=" w-full md:w-full h-full  text-left px-5" 
    placeholder='Enter mail subject...'
    name='subject'
    value={toSend.subject}
    onChange={handleChange}
    />


    </div>
        <br/>
   <div className='flex md:w-full w-full mb-[15px] h-28 grad8 '>
    <div className="p-[10px] bg-slate-300 min-w-[50px] text-center"><DocumentTextIcon className='text-blue-700'/></div>
    <input type="textarea" className="peer ... w-full md:w-full h-28 px-5  text-left " 
    placeholder='Enter mail body...'
    name='message'
    value={toSend.message}

    onChange={handleChange}
    
    />
    </div>
 <ReCAPTCHA
              sitekey="6LcDyC4gAAAAACsq2Z-nI-OmYHn8nframdbcoNyu"
    onChange={onChangeCaptcha}
  />

  {verified? <button className='py-4 px-5 bottom-10 '>Send</button> : <button disabled className='py-4 px-5 bottom-10 '>Send</button> }
 
</form>
       
          <h1 className='text-center font-bold text-2xl text-slate-500'>Connect with me</h1>
          <div className='flex md:flex justify-center '>
            <a href="https://github.com/emnjtech/"><FaGithub className='w-9 h-9 m-2' /></a>
            <a href="https://twitter.com/themartinzjr"><FaTwitter className='w-9 h-9 m-2' /> </a>
          </div>
       </div>
      </div>
      

<ToastContainer />

    </div>
  )
}
