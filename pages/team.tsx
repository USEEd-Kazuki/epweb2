import React from 'react';
import Hero from '../components/hero';
import Image from 'next/image';
import Modal from '../components/modal';
import Modal1 from '../components/modal1';
import Modal2 from '../components/modal2';
import Modal3 from '../components/modal3';
import Modal4 from '../components/modal4';
import Modal5 from '../components/modal5';

const Team = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:-h[140vh]'>
      <Hero heading='TEAM'/>

      <div className="team-conatiner">
        <div className="team-title-section">
          <h1 className="team-title">MEMBER</h1>
          <hr className="team-line" />
          <p className="team-title-content">
          EPknoTでは、多種多様なバックグランドを持ち、豊富な船舶、ファイナンス知識を有したプロフェッショナルメンバーが活躍しています。
          </p>
        </div>

        <div className="teamMember-contaner">
          <h1 className="teamMember-title">Team Member</h1>
         <ul className="teamMember-container">
          <li className="teammember-contant">
            <h2 className="teamMember-position">CEO/Broker</h2>
            <div className="teamMember-name">山本 尚季</div>
            <Modal />
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">CFO</h2>
            <div className="teamMember-name">近藤　隆之</div>
            <Modal5 />
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">COO</h2>
            <div className="teamMember-name">長竹 麻里</div>
            <Modal1 />
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">Broker</h2>
            <div className="teamMember-name">濱山 航志郎</div>
            <Modal2 />
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">Assistant</h2>
            <div className="teamMember-name">立野 利奈</div>
            <Modal3 />
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">System Engineer</h2>
            <div className="teamMember-name">岩本 一希</div>
            <Modal4 />
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">Accounting</h2>
            <div className="teamMember-name">熊澤 亜貴子</div>
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">Accounting</h2>
            <div className="teamMember-name">森 智津江</div>
          </li>
         </ul>
        </div>
          
        <div className="aliance-section">
          <h1 className="aliance-title">ALIANCE</h1>
         <hr className="aliance-line" />
        <div className="sylan">
                <Image src={"/sylanLogo.svg"} alt="sylan" className="sylan" width={300} height={300} />
        </div>
          <p className="aliance-content">
          私たちは、共通の価値観を持ち、共に成長できる企業とAllianceを結成することで、お客様へより高品質なサービスを提供致します。グループ企業の強みを生かし、EPknoTだけでは得ることの出来ない最新のマーケット情報やビジネスチャンスをお客様へお届けします。
          </p>
          <div className="aliance-company">
            加盟会社
           <div className="aliance-company-name">
           Blue Ocean Japan Co., Ltd.
           </div>
           <div className="aliance-company-name">
           Newton Ship Co., Ltd.
           </div>
           </div>
          </div>

        <div className="culture-section">
          <h1 className="culture-main-title">CULTURE</h1>
          <hr className="culture-line" />
          <p className="culture-content">
          EPknoTでは、メンバー1人ひとりが3つの共通価値観を持って働いております。価値観は、迅速且つ柔軟で質の高いサービスを提供する礎となると考えております。私たちはこの3つの価値観を何よりも大切にします。
           </p>
           <div >
          <table id="table01">
            <tbody>
            <tr>
              <th>Enjoy</th>
              <td>社内の風通しを良くしチームワークの向上及び仕事のし易い環境を目指します</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th>Professional</th>
              <td>正確性の高い情報をもとに高品質なサービス提供に努めます</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th>Transformation</th>
              <td>新しい社会環境に適した形に拘らない企業体に変革していきます</td>
            </tr>
            </tbody>
          </table>
           </div>
        </div>
        <small className="website-rights2">
        Copyright © EPknoT Co., Ltd. all rights reserved.
      </small>
      </div>

    </div>
  )
}

export default Team;