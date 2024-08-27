import React, { memo, useRef } from 'react'

function Expensive (){
    const ref = useRef(0);
  return (
    <div>
      <p>I am Being rerender 🥲: {ref.current++}</p>
    </div>
  )
}

export default memo(Expensive)
