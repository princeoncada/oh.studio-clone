import Header from '../components/Header.jsx';

export default function Home() {
    return (
        <>
            <Header current={'Home'}/>
            <div style={{
                fontFamily: 'Neue Montreal'
            }}>
                <div className="text-center text-4xl flex items-center p-5" style={{
                    fontWeight: 500,
                    height: '130vw',
                }}>
                    A brand and product
                    designer working with
                    client globally
                </div>
                <div className='flex flex-col gap-5 p-5'>
                    <a href="#" className='flex flex-col gap-2'>
                        <img className="rounded-xl" src="./home-1.webp" alt="" style={{

                        }}/>
                        <div className='text-sm font-light'>
                            Aire
                        </div>
                    </a>
                    <a href="#" className='flex flex-col gap-2'>
                        <img className="rounded-xl" src="./home-2.webp" alt="" />
                        <div className='text-sm font-light'>
                            Correlated
                        </div>
                    </a>
                    <a href="#" className='flex flex-col gap-2'>
                        <img className="rounded-xl" src="./home-3.webp" alt="" />
                        <div className='text-sm font-light'>
                            Channel 5
                        </div>
                    </a>
                    <a href="#" className='flex flex-col gap-2'>
                        <img className="rounded-xl" src="./home-4.webp" alt="" />
                        <div className='text-sm font-light'>
                            Ronald Abram
                        </div>
                    </a>
                    <a href="#" className='flex flex-col gap-2'>
                        <video className="rounded-xl" src="./home-5.mp4" loop autoPlay muted></video>
                        <div className='text-sm font-light'>
                            Propeller
                        </div>
                    </a>
                    <a href="#" className='flex flex-col gap-2'>
                        <img className="rounded-xl" src="./home-6.webp" alt="" />
                        <div className='text-sm font-light'>
                            Schuh
                        </div>
                    </a>
                    <a href="#" className='flex flex-col gap-2'>
                        <img className="rounded-xl" src="./home-7.webp" alt="" />
                        <div className='text-sm font-light'>
                            Paperstreet
                        </div>
                    </a>
                    <a href="#" className='flex flex-col gap-2'>
                        <video className="rounded-xl" src="./home-8.mp4" loop autoPlay muted></video>
                        <div className='text-sm font-light'>
                            OH.SUPPLY
                        </div>
                    </a>
                    <a href="#" className='flex flex-col gap-2'>
                        <img className="rounded-xl" src="./home-9.webp" alt="" />
                        <div className='text-sm font-light'>
                            Monokel Eyewear
                        </div>
                    </a>
                    <a href="#" className='flex flex-col gap-2'>
                        <img className="rounded-xl" src="./home-10.webp" alt="" />
                        <div className='text-sm font-light'>
                            Lawtrades <span style={{
                                color: 'gray',
                                marginLeft: '5px'
                            }}>Coming Soon</span>
                        </div>
                    </a>
                    <a href="#" className='flex flex-col gap-2'>
                        <img className="rounded-xl" src="./home-11.webp" alt="" />
                        <div className='text-sm font-light'>
                            Baselworld <span style={{
                                color: 'gray',
                                marginLeft: '5px'
                            }}>Coming Soon</span>
                        </div>
                    </a>
                    <a href="#" className='flex flex-col gap-2'>
                        <video className="rounded-xl" src="./home-12.mp4" loop autoPlay muted></video>
                        <div className='text-sm font-light'>
                            NYCB
                        </div>
                    </a>
                </div>
                <div  className="text-center text-3xl flex items-center p-5 flex-col justify-center" style={{
                    fontWeight: 500,
                    height: '130vw',
                }}>
                    Let's work together.<a href="#" style={{ color: 'gray' }}>Get in touch.</a>
                </div>
                
                <div className="star-container">
                    <div className="star">
                        <div className='line one'></div>
                        <div className='line two'></div>
                        <div className='line three'></div>
                        <div className='line four'></div>
                    </div>
                </div>
            </div>
        </>
    )
}