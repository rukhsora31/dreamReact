import React from 'react'
import './Section.css'
const Section = () => {
  return (
  <>
    <section>
    <div className="container">
    <h2 className="hh2">Что меня ждет впереди</h2>
    <div className="wrap">
        <div className="cards">
            <img src="https://abbos29.github.io/dream/img/icon1.png" alt="" />
            <h2>Свободное время</h2>
            <p>Мне нужно свободное время на семью и самое настоящее</p>
        </div>
        <div className="cards">
            <img src="https://abbos29.github.io/dream/img/icon2.png" alt="" />
            <h2>Яркие путешествия</h2>
            <p>Работать откуда угодно - что может быть лучше?</p>
        </div>
        <div className="cards">
            <img src="https://abbos29.github.io/dream/img/icon3.png" alt="" />
            <h2>Создание ценности</h2>
            <p>Нет ничего сильнее, чем жить не просто так, создавая ценность</p>
        </div>
    </div>
    </div>
    </section>
  </>
  )
}

export default Section
