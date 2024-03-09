import React, { useState } from 'react'
import { multilocation, time } from '../../dates/jummy';

const Options = () => {
  let [modalCountries, setModalCountries] = useState(false);
  let [modalCities, setModalCities] = useState(false);
  let [cityArray, setCityArray] = useState([{city: 'not found'}]);
  let [changeCountry, setChangeCountry] = useState('Select Country');
  let [changeCity, setChangeCity] = useState('Cities');
  let [multiLocation, setMultiLocation] = useState(['not found']);
  let [modalMultiLocation, setModalMultiLocation] = useState(false);
  let [changeMultiLocation, setChangeMultiLocation] = useState('Multi-locations');
  let [changeWalkin, setChangeWalkin] = useState('Walk-in');
  let [walkin, setWalkin] = useState(false)

  const toggleModalCountries = () => {
    setModalCountries((prev) => {
      return !prev
    })
    setModalCities(false);
    setModalMultiLocation(false);
  }
  const selectedCountry = (data) => {
    setChangeCountry(data)
    setModalCountries(false)
  }
  const toggleModalCities = () => {
    setModalCities((prev) => {
      return !prev
    })
    setModalCountries(false);
    setModalMultiLocation(false);
  }
  const selectedCity = (data) => {
    setChangeCity(data)
    setModalCities(false)
  }
  const toggleModalMultiLocation = () => {
    setModalMultiLocation((prev) => {
      return !prev
    })
    setModalCities(false);
    setModalCountries(false);
  }
  const selectedMultiLocation = (data) => {
    setChangeMultiLocation(data)
    setModalMultiLocation(false)
  }
  const toggleModalWalkin = () => {
    setWalkin((prev) => {
      return !prev
    })
  }
  const selectedWalkin = (data) => {
    setChangeWalkin(data)
    setWalkin(false)
  }

  return (
    <div className='mb-4 justify-between items-center w-full flex-wrap gap-9 inline-flex'>
      <div className='w-full xl:w-auto items-center gap-3 flex flex-wrap'>
        <div className="group relative grow min-w-fit shrink basis-0 h-[42px] flex px-3.5 bg-white rounded-lg border border-neutral-200">
          <div className="items-center gap-3 flex min-w-[120px]" onClick={toggleModalCountries}>
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">{changeCountry}</div>
            <div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div className={`${modalCountries ? 'block' : 'hidden'} duration-300 absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 mt-1 z-50`}>
            {
              multilocation.map(({country, cities}, index) => {
                return (
                  <div key={index} onClick={() => {
                    selectedCountry(country)
                    setCityArray(cities)
                  }}
                  className='p-2 px-3 text-zinc-900 hover:text-orange-600 duration-300 hover:bg-orange-50 text-lg hover:font-semibold'
                  >{country}</div>
                )
              })
            }
          </div>
        </div>
        <div className="group relative grow min-w-fit shrink basis-0 h-[42px] flex px-3.5 bg-white rounded-lg border border-neutral-200">
          <div className="items-center gap-3 flex min-w-[120px]" onClick={toggleModalCities}>
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">{changeCity}</div>
            <div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div className={`${modalCities ? 'block' : 'hidden'} duration-300 absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 mt-1 z-50`}>
            {
              cityArray.map(({city, multilocation}, index) => {
                return (
                  <div key={index} onClick={() => {
                    selectedCity(city)
                    setMultiLocation(multilocation)
                  }}
                  className='p-2 px-3 text-zinc-900 hover:text-orange-600 duration-300 hover:bg-orange-50 text-lg hover:font-semibold'
                  >{city}</div>
                )
              })
            }
          </div>
        </div>
        <div className="group relative grow min-w-fit shrink basis-0 h-[42px] flex px-3.5 bg-white rounded-lg border border-neutral-200">
          <div className="items-center gap-3 flex min-w-[120px]" onClick={toggleModalMultiLocation}>
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">{changeMultiLocation}</div>
            <div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div className={`${modalMultiLocation ? 'block' : 'hidden'} duration-300 absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 mt-1 z-50`}>
            {
              multiLocation.map((el, index) => {
                return (
                  <div key={index} onClick={() => {
                    selectedMultiLocation(el)
                  }}
                  className='p-2 px-3 text-zinc-900 hover:text-orange-600 duration-300 hover:bg-orange-50 text-lg hover:font-semibold'
                  >{el}</div>
                )
              })
            }
          </div>
        </div>
        <div className="group relative grow min-w-fit shrink basis-0 h-[42px] flex px-3.5 bg-white rounded-lg border border-neutral-200">
          <div className="items-center gap-3 flex min-w-[120px]" onClick={toggleModalWalkin}>
            <div className="grow shrink basis-0 text-zinc-900 text-sm leading-[18px]">{changeWalkin}</div>
            <div>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div className={`${walkin ? 'block' : 'hidden'} duration-300 absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 mt-1 z-50`}>
            {
              time.map((el, index) => {
                return (
                  <div key={index} onClick={() => {
                    selectedWalkin(el)
                  }}
                  className='p-2 px-3 text-zinc-900 hover:text-orange-600 duration-300 hover:bg-orange-50 text-lg hover:font-semibold'
                  >{el}</div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="h-[42px] w-full xl:w-auto px-3.5 py-3 bg-white rounded border border-neutral-300 flex items-center gap-3">
            <div className="text-orange-600 text-sm">
              <i className="fa-solid fa-calendar-days"></i>
            </div>
            <div className="grow shrink basis-0 text-zinc-900 text-[10px] leading-[18px]">Today: April 25, 2024 12:00 AM - April 26, 2024 12:00 AM</div>
      </div>
    </div>
  )
}

export default Options