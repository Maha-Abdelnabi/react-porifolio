import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {FaGithubSquare} from 'react-icons/fa'
import {AiFillFacebook} from "react-icons/ai";


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkdin.com" target="blank">
        <ImLinkedin />
      </a>
      <a href="https://github.com/Maha-Abdelnabi" target="blank">
        <FaGithubSquare />
      </a>
      <a href="https://www.facebook.com/maha.abedulnabi" target="blank">
        <AiFillFacebook />
      </a>
    </div>
  );
}

export default HeaderSocials;