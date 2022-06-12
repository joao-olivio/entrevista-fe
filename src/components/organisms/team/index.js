import React from 'react'
import Title from '../../molecules/title'
import Picture from '../../../assets/images/team/Picture.png'
import './styles.scss'

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="team-container">
        <div className="team-row">
          <div className="team-column col-1">
            <div className="team-text">
              <Title
                title="Coming next"
                textShadown="Next"
                classTextShadown="lightGrey"
                classFont="title"
                classFontColor="dark"
              />
              <p className="team-paragraph">
                Body placeholder for text paragraph. A paragraph is a
                self-contained unit of text dealing with a particular point or
                idea is a self-contained unit of text dealing with a particular
                point or idea.
              </p>
            </div>
          </div>
          <div className="team-column col-2">
            <div className="team-image">
              <img src={Picture} alt="team the show" />
              <div className="team-person">
                <p>
                  <span>Fake Company CTO</span>
                  Danny Baker
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
