import React from 'react'
import './Order.css'

const Order = () => {
  return (
   <>
   <section>
    <div className="card">
        <h1>Форма заказа билета в будущее</h1>
        <form action="">
        <input type="text" placeholder='имя' />
        <input type="e-mail" placeholder='e-mail' />
        <input type="phone-number" placeholder='телефон' />
        <button>Двигаться к мечте!</button>
        </form>
        

    </div>
   </section>
   </>
  )
}

export default Order
