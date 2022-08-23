import React, {useState} from 'react'

const Modal5 = () => {

  const [modal, setModal] = useState(false);
  const toggleModal = () =>{
      setModal(!modal)
  }

  return (
    <>
    <button 
    onClick={toggleModal}
    className="btn-modal">
        read more
    </button>
    {modal &&(
    <div className="modal">
        <div onClick={toggleModal}
        className="overlay"></div>
        <div className="modal-content">
        <div className="modal-section">
            <h1 className="modal-name">Kondo Takayuki</h1>

            <ul className="modal-timeline">
              <li className='modal-li'>
                <h3 className="timeline-date">1984.</h3>
                <h3 className="timeline-content">愛媛県松山市生まれ</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2008.</h3>
                <h3 className="timeline-content">成蹊大学 卒業</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2008.</h3>
                <h3 className="timeline-content">株式会社愛媛銀行　入行</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2022.</h3>
                <h3 className="timeline-content">株式会社EPknoT 入社</h3>
              </li>
            </ul>
            <div className="member-work">銀行業務にて培った知識・経験を軸に、セールスアンドリースバック（SLB）案件の組成及びドキュメンテーション業務を中心に行っております。</div>
            <p className="member-work1">担当業務： 案件紹介、ドキュメンテーション、クロージング後の案件管理、プロジェクトマネジメント全般</p>
          </div>
            <span 
            className="close-modal"
            onClick={toggleModal}
            >
            </span>
        </div>
    </div>
    )}
    </>
  )
}

export default Modal5