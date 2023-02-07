import React, { useState } from 'react';
import './App.css';
import { DelBtn, CancelBtn, DoneBtn } from './Btn';
import Card from './Card';


function App() {

  const [ingSowon, setingSowon] = useState([
    { id: 0, jaemok: '일단목표', naeyong: '프론트엔드개발자되기', isDone: false }
  ])

  const [DoneSowon, setDoneSowon] = useState([
    { id: 561, jaemok: '매일하기', naeyong: '일기쓰기', isDone: true }
  ])

  const [jaemok, setjaemok] = useState("")
  const [naeyong, setnaeyong] = useState("")

  function addjaemok(event) {
    setjaemok(event.target.value)
  }

  function addnaeyong(event) {
    setnaeyong(event.target.value)
  }

  //추가 기능
  function submitJaemokNaeyong() {
    let date = new Date();
    let id = "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
    const sowon = { id, isDone: false, jaemok, naeyong, }
    setingSowon([...ingSowon, sowon])

    setjaemok("")
    setnaeyong("")
  }

  //삭제 기능
  function delJaemokNaeyong(id) {

    // eslint-disable-next-line
    setingSowon(ingSowon.filter((v) => v.id != id))

    // eslint-disable-next-line
    setDoneSowon(DoneSowon.filter((v) => v.id != id))
  }

  //완료 기능
  //따로 공간을 만들어야 한다.
  //버튼을 누르면 서로의 공간으로 이어지게 한다.
  //일단 완료버튼을 만들자.
  function DoneFunction(isDone, id, jaemok, naeyong) {
    // Sowon.id  를 가진값의 isDone을 true로 바꿔준다.

    // eslint-disable-next-line
    const Done = (ingSowon.filter(v => v.id == id).map(v => {
      return { id, jaemok, naeyong, isDone: true }
    }));

    // eslint-disable-next-line
    setingSowon(ingSowon.filter(v => v.id != id))

    setDoneSowon([...DoneSowon, ...Done])
    console.log(DoneSowon)
    //id를 받아와서 분류한 다음, isDone을 true로 바꿔준다.
    //본 객체의 isDone값을 true로 바꾼다.
  }



  //취소 기능
  function cancelBtn(isDone, id, jaemok, naeyong) {
    // Sowon.id  를 가진값의 isDone을 true로 바꿔준다.

    // eslint-disable-next-line
    const ing = (DoneSowon.filter(v => v.id == id).map(v => {
      return { id, jaemok, naeyong, isDone: false }
    }));

    // eslint-disable-next-line
    setDoneSowon(DoneSowon.filter(v => v.id != id))
    setingSowon([...ingSowon, ...ing])
    console.log(DoneSowon)
  }


  return (
<div>
    
    <div className='king'>
      <div>
    <h3 style={
      {
        textAlign: 'left'
      }
    }>my todo-list</h3> 
    <div style={
      {
        textAlign: 'right'
      }
    }>React</div>
    </div>
      <div className='submitBox'>
        <span>제목 <input className='submit' value={jaemok} onChange={addjaemok} /></span>
        <span>내용 <input className='submit' value={naeyong} onChange={addnaeyong} /></span>
        <button onClick={submitJaemokNaeyong}>제출</button>
      </div>

      <div className='aboveing'>
        좌절을 극복하면 레전드
      </div>

      <div className='ing'>
        {
          ingSowon.map((item) => {
            return (
              <div key={item.id} className='todoBox'>

                <Card
                  item={item}
                />

                <DelBtn
                  delJaemokNaeyong={delJaemokNaeyong}
                  item={item}
                />

                <DoneBtn
                  DoneFunction={DoneFunction}
                  item={item}
                />

              </div>
            );
          }
          )
        }
      </div>



      <div className='aboveDone'>
        쓰러지면 그냥 인생
      </div>

      <div className='Done'>
        {
          DoneSowon.map((item) => {
            return (
              <div key={item.id} className='todoBox'>

                <Card
                  item={item}
                />

                <DelBtn
                  delJaemokNaeyong={delJaemokNaeyong}
                  item={item}
                />

                <CancelBtn
                  cancelBtn={cancelBtn}
                  item={item}
                />


              </div>
            )
          }
          )
        }
      </div>

    </div>
    </div>
  );
}


export default App;

