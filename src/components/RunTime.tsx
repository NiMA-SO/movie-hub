import React, { useEffect, useState } from 'react'

interface Props{
    number: number;
}

const RunTime = ({number} : Props) => {

    const [text , setText] = useState('')
    useEffect(() => {
        if (number >= 60) {
            const hours = Math.floor(number / 60); // ساعت‌ها
            const minutes = number % 60; // دقیقه‌های باقی‌مانده
            setText(minutes > 0 ? `${hours} H ${minutes} M` : `${hours} H`)
          } else {
            setText(`${number} M`)
          }
    },[number])
  return (
    <span>
        {text}
    </span>
  )
}

export default RunTime