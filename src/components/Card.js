import React, {useState, useEffect} from 'react';

const Card = () => {    
    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)

    
    useEffect(() => {
        fetch("http://api.weatherstack.com/current?access_key=bba6c0ba0242c52df1771ea02f1575f8&query=New%20York")
        .then(response => response.json())
        .then(data => setWeatherData(data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            setError(err);
          })
        }, [])
    
    return (
        <div className=' h-[450px] w-[600px] bg-sky-900/90 border-2 border-neutral-900 rounded-3xl drop-shadow-xl'>

            {weatherData ? (
                <>
                    <div className='flex w-full justify-center mt-8'>
                {weatherData.location ? (
                    <>
                    <h1 className='text-3xl font-bold text-white drop-shadow-xl'>
                        {weatherData.location.name}
                    </h1>
                    </>
                ): <h1 className='text-3smfext-white drop-shadow-xl'>
                        Carregando
                    </h1>
                } 
            </div>

            <div className='grid h-[180px] gap-[80px] grid-cols-3 place-items-center m-6 border-t-2'>

                <div className='flex items-center justify-center h-full mt-12'>
                    <div className='grid gap-4 grid-rows-2'>
                        <div className='flex items-center justify-center h-full'>
                            {weatherData.current ? (
                                <img className='rounded-3xl drop-shadow-xl ' src={weatherData.current.weather_icons[0]}></img>

                            ):  <h1 className='text-sm text-white drop-shadow-xl'>
                                    carregando...
                                </h1>
                            }
                        </div>
                        <div className='flex justify-center w-full'>
                                    {weatherData.current ? (
                                        <h1 className='text-xl font-bold text-white drop-shadow-xl'>
                                            {weatherData.current.weather_descriptions[0]}
                                        </h1>
                                    ):  <h1 className='text-sm text-white drop-shadow-xl'>
                                            carregando...
                                        </h1>
                                    }
                        </div>
                    </div>
                </div>


                <div className='flex items-center justify-center h-full'>
                    {weatherData.current ? (
                        <h1 className='text-5xl font-bold text-white drop-shadow-xl'>
                            {weatherData.current.temperature}°C
                        </h1>
                    ):  <h1 className='text-sm text-white drop-shadow-xl'>
                            carregando...
                        </h1>
                    }
                </div>


                <div className='flex items-center justify-center h-full w-full'>
                    <div className='grid grid-rows-3'>
                        {weatherData.current ? (
                            <> 
                            <h1 className='text-sm font-bold text-white drop-shadow-xl'>
                                    Wind: {weatherData.current.wind_speed} kmph
                            </h1>
                            <h1 className='text-sm font-bold text-white drop-shadow-xl'>
                                    Precip: {weatherData.current.precip} mm
                            </h1>
                            <h1 className='text-sm font-bold text-white drop-shadow-xl'>
                                    Pressure: {weatherData.current.pressure} mb
                            </h1>
                            </>
                        ):  <h1 className='text-sm text-white drop-shadow-xl'>
                                carregando...
                            </h1>
                        }
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
                </>
            ):
            <>
                <div className='flex w-full h-full justify-center items-center'>
                    <h1 className='text-5xl text-white drop-shadow-xl'>
                        carregando...
                    </h1>
                </div>
            </>  
            }

            
        </div>
    );
  }
  
export default Card;
  