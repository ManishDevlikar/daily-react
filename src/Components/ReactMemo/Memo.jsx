import React, { memo, useRef } from 'react'

function Memo() {
    let ref = useRef(0);
  return (
    <div>
      <p>rendering ref :{ref.current++}</p>
    </div>
  )
}

export default memo(Memo)
