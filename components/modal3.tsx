import React, {useState} from 'react'

const Modal3 = () => {

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
            <h1 className="modal-name">Tateno Rina</h1>

            <ul className="modal-timeline">
              <li className='modal-li'>
                <h3 className="timeline-date">1995.</h3>
                <h3 className="timeline-content">広島県に生まれ</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2018.</h3>
                <h3 className="timeline-content">学習院女子大学 卒業</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2018.</h3>
                <h3 className="timeline-content">EY Japan 総合受付　入社</h3>
              </li>
              <li className='modal-li'>
                <h3 className="timeline-date">2021.</h3>
                <h3 className="timeline-content">株式会社 EPknoT 入社</h3>
              </li>
            </ul>
            <div className="member-work">大学在学中に埼玉県親善大使として1年間アメリカへ留学し、音楽学を専攻していました。現職ではInvoice管理等をはじめとする、営業アシスタント業務を担っています。</div>
            <p className="member-work1">担当業務： 総務全般、営業アシスタント</p>
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

export default Modal3