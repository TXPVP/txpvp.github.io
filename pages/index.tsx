import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Link from 'next/link'
export default function Home() {
  
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>TX-PVP | HOME</title>
        <meta name="description" content="TX-PVP is a free PVP framework for FiveM that aims to facilitate the creation of PVP servers and diversify the current catalogue of servers."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TX-PVP Website" />
        <meta property="og:description" content="Learn more about TX-PVP, it's developers and more!" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/81171469" />
        <meta property="og:url" content="https://txpvp.vercelapp.com" />
        <meta property="og:site_name" content="TX-PVP" />
        <meta name="twitter:title" content="TX-PVP"/>
        <meta name="twitter:description" content="Learn more about TX-PVP, it's developers and more!"/>
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/81171469"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="hero">
          <Hero  />
        </section>
        <section id="about">
          <About />
          <div className="text-center self-center ">
              <Link href="#team">
              <button className="btn btn-primary">Our team</button>
              </Link>
          </div>
        </section>
        <section id="team">
          <Team />
        </section>
      </main>
      <Footer  />
    </div>
  )
}
