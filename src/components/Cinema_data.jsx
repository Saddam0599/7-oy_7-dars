import React from 'react'

function Cinema_data({title = "Детали"}) {
  return (
    <div>
        <h5 className='text-[20px] mb-6'>{title}</h5>
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between text-[#A1A1A1] text-[16px]'>
                <p>Продолжительность</p>
                <p>1ч 34м / 94 минут</p>
            </div>
            <div className='flex justify-between text-[#A1A1A1] text-[16px]'>
                <p>Премьера</p>
                <p>07 марта 2024</p>
            </div>
            <div className='flex justify-between text-[#A1A1A1] text-[16px]'>
                <p>Производство</p>
                <p>США, Китай</p>
            </div>
            <div className='flex justify-between text-[#A1A1A1] text-[16px]'>
                <p>Жанр</p>
                <p>Фэнтези, Комедия</p>
            </div>
            <div className='flex justify-between text-[#A1A1A1] text-[16px]'>
                <p>Режиссер</p>
                <p>Майк Митчелл, Стефани Стайн</p>
            </div>
            <div className='flex justify-between text-[#A1A1A1] text-[16px]'>
                <p>Возрастной рейтинг</p>
                <p>6+</p>
            </div>
        </div>
    </div>
  )
}

export default Cinema_data