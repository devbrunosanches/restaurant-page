import React from 'react'

import {SubHeading} from "../../components"
import {images} from "../../constants"
import './Header.css'

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">The key to fine dining</h1>
      <p className="p__opensans" style={{margin: '3rem 0'}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos saepe asperiores sunt nesciunt molestias sint accusantium natus aperiam fugiat ab repellendus odit modi, quo nulla aut quibusdam doloremque eaque ex!
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
)

export default Header
