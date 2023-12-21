import React from 'react'
import ajay from '../img/Ajay.png'
import phone from '../img/phone.png'
import gmail from '../img/gmail.png'
function Ajay() {
  return (
    <div>

        <div className="flex flex-wrap justify-center items-center mb-11  text-yellow-300 text-lg gap-6 pt-5 mt-16">
            <img src={ajay} alt="" width="200px" />
            <div className="flex flex-col justify-center items-start">
                <div className="flex justify-center items-center p-2 gap-3 mx-auto"> 
                    <img src={phone} alt="" width="30px" />
                    <p>+91 9079758480</p>
                </div>
                <div className="flex justify-center items-center p-2 gap-3 mx-auto"> 
                    <img src={gmail} alt="" width="30px" />
                    <p>Traderajayghodela028@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ajay