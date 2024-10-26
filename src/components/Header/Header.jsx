import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="travel">
                        <div className="sentenceT">
                            <h2>С помощью верстки <br />
                                я создам ту жизнь, о которой <br />
                               <h1>мечтаю!</h1> </h2>

                                <p>Мои стремления + настойчивость позволят мне достичь чего <br />
                                    угодно. Я не верю в это. Я знаю это на 100%. <br /> Меня не остановить!</p>

                                    <button>Двигаться к мечте!</button>
                        </div>

                        <div className="imgT">
                            <img src="https://abbos29.github.io/dream/img/main.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
