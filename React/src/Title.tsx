// Pascal Case : message ==> Message , list-item => ListItem

//Component : javascript Name.jsx
//Component : typescript Name.tsx

import React from 'react'

type Props = {
    number : number;
}

const Title = ({number}:Props) => {
  return (
    <div className='font-bold mb-8 text-[20px]'>{number} Birthdays Today </div>
  )
}

export default Title