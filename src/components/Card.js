import React, {useState} from 'react';

const Card = () => {
    json = ''

    

    return (
        <div className=' h-[500px] w-[800px] bg-slate-700 border-8 rounded-3xl drop-shadow-xl'>

            <div className='flex w-full justify-center mt-8'>
                <h1 className='text-3xl font-bold text-white drop-shadow-xl'>
                    Sao Paulo, Sao Paulo, Brazil
                </h1>
            </div>

            <div className='grid h-[180px] gap-[80px] grid-cols-3 place-items-center m-6 border-t-2'>

                <div className='flex items-center justify-center h-full mt-12'>
                    <div className='grid gap-4 grid-rows-2'>
                        <div className='flex items-center justify-center h-full'>
                            <img className='rounded-3xl drop-shadow-xl ' src="https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png"></img>
                        </div>
                        <div className='flex justify-center w-full'>
                            <h1 className='text-xl font-bold text-white drop-shadow-xl'>
                                    Partly Cloudy
                            </h1>
                        </div>
                    </div>
                </div>


                <div className='flex items-center justify-center h-full'>
                    <h1 className='text-5xl font-bold text-white drop-shadow-xl'>
                                26°c
                    </h1>
                </div>


                <div className='flex items-center justify-center h-full w-full'>
                    <div className='grid grid-rows-3'>
                            <h1 className='text-xl font-bold text-white drop-shadow-xl'>
                                    Wind: 9 kmph
                            </h1>
                            <h1 className='text-xl font-bold text-white drop-shadow-xl'>
                                    Precip: 1.7 mm
                            </h1>
                            <h1 className='text-xl font-bold text-white drop-shadow-xl'>
                                    Pressure: 1017 mb
                            </h1>
                    </div>
                </div>
            </div>

            <div className='grid gap-[60px] h-[100px] grid-cols-5 place-items-center m-6' >

                <div className='flex items-center justify-center h-full'>
                    <div className='grid grid-rows-1 p-4'>

                        <div className='flex justify-center w-full'>
                            <h1 className='text-xl text-white drop-shadow-xl text-center'>
                                TUE
                            </h1>
                        </div>
                        <div className='flex items-center justify-center h-full'>
                            <img className='rounded-3xl drop-shadow-xl' src="https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png"></img>
                        </div>
                        <div className='flex justify-center w-full'>
                            <h1 className='text-xl font-bold text-white drop-shadow-xl text-center'>
                                22 °c
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center h-full'>
                    <div className='grid grid-rows-1 p-4'>

                        <div className='flex justify-center w-full'>
                            <h1 className='text-xl text-white drop-shadow-xl text-center'>
                                WED
                            </h1>
                        </div>
                        <div className='flex items-center justify-center h-full'>
                            <img className='rounded-3xl drop-shadow-xl' src="https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png"></img>
                        </div>
                        <div className='flex justify-center w-full'>
                            <h1 className='text-xl font-bold text-white drop-shadow-xl text-center'>
                                22 °c
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center h-full'>
                    <div className='grid grid-rows-1 p-4'>

                        <div className='flex justify-center w-full'>
                            <h1 className='text-xl text-white drop-shadow-xl text-center'>
                                THU
                            </h1>
                        </div>
                        <div className='flex items-center justify-center h-full'>
                            <img className='rounded-3xl drop-shadow-xl' src="https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png"></img>
                        </div>
                        <div className='flex justify-center w-full'>
                            <h1 className='text-xl font-bold text-white drop-shadow-xl text-center'>
                                22 °c
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center h-full'>
                    <div className='grid grid-rows-1 p-4'>

                        <div className='flex justify-center w-full'>
                            <h1 className='text-xl text-white drop-shadow-xl text-center'>
                                FRI
                            </h1>
                        </div>
                        <div className='flex items-center justify-center h-full'>
                            <img className='rounded-3xl drop-shadow-xl' src="https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png"></img>
                        </div>
                        <div className='flex justify-center w-full'>
                            <h1 className='text-xl font-bold text-white drop-shadow-xl text-center'>
                                22 °c
                            </h1>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center h-full'>
                    <div className='grid grid-rows-1 p-4'>

                        <div className='flex justify-center w-full'>
                            <h1 className='text-xl text-white drop-shadow-xl text-center'>
                                SAT
                            </h1>
                        </div>
                        <div className='flex items-center justify-center h-full'>
                            <img className='rounded-3xl drop-shadow-xl' src="https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0011_light_snow_showers.png"></img>
                        </div>
                        <div className='flex justify-center w-full'>
                            <h1 className='text-xl font-bold text-white drop-shadow-xl text-center'>
                                22 °c
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export default Card;
  