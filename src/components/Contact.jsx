import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Contact</h1>
            <div class="contact">
            <a href="https://github.com/amarkules1">
            <FontAwesomeIcon icon={brands('github')} size="2xl" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GitHub</a>
            </div>
            <div class="contact">
            <a href="https://twitter.com/mar_Q_less">
            <FontAwesomeIcon icon={brands('twitter')} size="2xl" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Twitter</a>
            </div>
            <div class="contact">
            <a href="https://www.linkedin.com/in/alex-markules-317077a2/">
            <FontAwesomeIcon icon={brands('linkedin')} size="2xl" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LinkedIn</a>
            </div>
            <div class="contact">
            <a href="mailto:marqless97@gmail.com">
            <FontAwesomeIcon icon={solid('at')} size="2xl" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;