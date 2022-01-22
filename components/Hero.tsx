import Link from 'next/link'
export default function Hero() {
    return (
        <div className="    w-full
        h-screen
        bg-gradient-to-r
        from-red-600
        via-red-500
        to-yellow-400
        background-animate">
        <div className="hero min-h-screen" >
        <div className="hero-overlay bg-opacity-60"></div> 
        <div className="text-center hero-content text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold ">
                    Welcome to
            </h1> 
            <h1 className="mb-5 text-5xl font-bold text-red-600">TX-PVP</h1>
            <p className="mb-5">
                    TX-PVP is a free PVP framework for <a className="text-blue-500 underline decoration-wavy " href="https://fivem.net">Fivem</a> that aims to facilitate the creation of PVP servers and diversify the current catalogue of servers.
                </p> 
                <div className="m-5">
                    <a className="btn btn-primary m-5" href="https://github.com/TXPVP/tx-pvp">Get Started</a>
                <Link href="#about">                
                    <button  className="btn btn-primary">
                        Learn More
                    </button>
                </Link>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}