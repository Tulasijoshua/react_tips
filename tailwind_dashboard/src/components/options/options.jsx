import React, { useState } from 'react'

const Options = () => {
  let [modalCountries, setModalCountries] = useState(false);
  let [modalCities, setModalCities] = useState(false);
  let [cityArray, setCityArray] = useState([{city: 'not found'}]);
  let [changeCountry, setChangeCountry] = useState('Select Country');
  let [changeCity, setChangeCity] = useState('Cities');
  let [multiLocation, setMultiLocation] = useState('not found');
  let [modalMultiLocation, setModalMultiLocation] = useState(false);
  let [changeMultiLocation, setChangeMultiLocation] = useState(false);
  let [changeWalkin, setChangeWalkin] = useState('Walk-in');

  const toggleModalCountries = () => {

  }

  return (
    <div className='mb-4 justify-between items-center w-full flex-wrap gap-9 inline-flex'>
      <div className='w-full xl:w-auto items-center gap-3 flex flex-wrap'>
        <div className="group relative ">
          <div className="items-center gap-3 flex min-w-[120px]" onClick={toggleModalCountries}>
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">{changeCountry}</div>
            <div>
              <i className="fa-solid fa-shevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Options