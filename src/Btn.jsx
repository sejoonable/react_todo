import React from 'react'

const DelBtn = ({delJaemokNaeyong, item}) => {
    return (
    <button onClick={() => delJaemokNaeyong(item.id)}>x</button>
    )
  }
  
  const CancelBtn = ({item, cancelBtn}) => {
    return (
    <button onClick={() => cancelBtn(item.isDone, item.id, item.jaemok, item.naeyong)}>취소</button>
    )
  }
  
  const DoneBtn = ({item, DoneFunction}) => {
    return(
      <button onClick={() => DoneFunction(item.isDone, item.id, item.jaemok, item.naeyong)}>완료</button>
    )
  }

export {DelBtn, CancelBtn, DoneBtn}