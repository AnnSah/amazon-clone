import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home__image">
            <img className="home__img" src="/images/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt='prime'></img>

            {/* Products */}
            <div className="home__row">
                <Product id="123121"
                    title="The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book)"
                    price={7.74}
                    image="/images/81hHy5XrdKL.jpg"
                    rating={3} />

                <Product id="5e4566"
                    title="KUCCU Stand Mixer, 8.5 Qt 660W, 6-Speed Tilt-Head Food Dough Mixer, Electric Kitchen Mixer with Dough Hook,"
                    price={125.84}
                    image="/images/71X+cb9TaPL._AC_SX679_.jpg"
                    rating={4} />
            </div>
            <div className="home__row">
                <Product id="12sw5788"
                    title="Smart Watch, Hadisala 1.69,Step and Sleep Tracking, IP68 Waterproof Smartwatch for Men Women"
                    price={89.55}
                    image="/images/71UZWJ+cYCL._AC_UX569_.jpg"
                    rating={2} />
                <Product id="998hy890w3"
                    title="Echo (4ta Generación) | Con sonido de alta calidad, hub de smart home y Alexa | Negro"
                    price={26.24}
                    image="/images/61y4J2vTwFL._AC_SX679_.jpg"
                    rating={5} />
                <Product id="12w378"
                    title="BENGOO G9000 - Auriculares estéreo para juegos PS4, PC, Xbox One PS5, con cancelación de ruido y micrófono, luz LED"
                    price={177.94}
                    image="/images/61CGHv6kmWL._AC_SX679_.jpg"
                    rating={4} />

            </div>

            <div className="home__row1">
                <Product id="z45f78990"
                    title="Sony serie A80K de TV 4K Ultra HD de 65 pulgadas: BRAVIA XR OLED Smart Google TV, con Dolby Vision HDR"
                    price={7.74}
                    image="/images/81JoZeM2V2L._AC_SX466_.jpg"
                    rating={3} />
            </div>

        </div>
    )
}

export default Home;