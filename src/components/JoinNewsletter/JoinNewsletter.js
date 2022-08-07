import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useCookies } from 'react-cookie';

import Close from '../../assets/close-black.svg';

const COOKIE_KEY2 = 'fq_join_newsletter_dismiss';

const JoinNewsletter = ({ addMargin = false }) => {
    const [cookies, setCookie] = useCookies([COOKIE_KEY2]);
    const isBrowser = () => typeof window !== 'undefined';
    const nextWeek = () => {
        const today = new Date();
        return new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000));
    };

    const dismiss = () => {
        setCookie(COOKIE_KEY2, 1, { expires: nextWeek() });
    };
    const action = "https://6e38f91b.sibforms.com/serve/MUIEAPUTMzpahL8TaOhaghyQ4TcNWPWP8TIy85dA6ogeGPlgaJl1h3gJbTQCn4FaBzETUFwPwmg93q-T93s5MKU-Sz4aXSeFldNWepeiVMGnMttaFDCCOTiMMJb-Q5si1JdouMqpa1vKBrFNG9B-mMQtAaP1KJTg0D6t6QXltWHHNlgUC_bEubWJma-budws8d-roVsfaNvTx7h1";
    //'https://flotiq.us18.list-manage.com/subscribe/post?u=5f7db102d539d8f65a3639f8d&amp;id=da58181767';
    return (
        <Row className="w-100">
            {
                (isBrowser() && cookies && !cookies[COOKIE_KEY2]) ? (
                    <Container className={addMargin ? 'pt-5 pb-5 mb-5' : ''}>
                        <div className="sib-form" style="text-align: center;         background-color: #EFF2F7;    ">
  <div id="sib-form-container" className="sib-form-container">
    <div id="error-message" className="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
      <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
        </svg>
        <span className="sib-form-message-panel__inner-text">
                          Your subscription could not be saved. Please try again.
                      </span>
      </div>
    </div>
    <div></div>
    <div id="success-message" className="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
      <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
        </svg>
        <span className="sib-form-message-panel__inner-text">
                          Your subscription has been successful.
                      </span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" className="sib-container--large sib-container--horizontal" style="text-align:center; background-color:rgba(255,255,255,1); max-width:540px; border-radius:17px; border-width:0px; border-color:#C0CCD9; border-style:solid;">
      <form id="sib-form" method="POST" action="https://6e38f91b.sibforms.com/serve/MUIEAPUTMzpahL8TaOhaghyQ4TcNWPWP8TIy85dA6ogeGPlgaJl1h3gJbTQCn4FaBzETUFwPwmg93q-T93s5MKU-Sz4aXSeFldNWepeiVMGnMttaFDCCOTiMMJb-Q5si1JdouMqpa1vKBrFNG9B-mMQtAaP1KJTg0D6t6QXltWHHNlgUC_bEubWJma-budws8d-roVsfaNvTx7h1" data-type="subscription">
        <div style="padding: 8px 0;">
          <div className="sib-input sib-form-block">
            <div className="form__entry entry_block">
              <div className="form__label-row form__label-row--horizontal">

                <div className="entry__field">
                  <input className="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Your email" data-required="true" required />
                </div>
              </div>

              <label className="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div className="sib-form-block" style="text-align: center">
            <button className="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:center; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:#b4448f; border-radius:20px; border-width:0px;" form="sib-form" type="submit">
              <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
              SUBSCRIBE
            </button>
          </div>
        </div>

        <input type="text" name="email_address_check" value="" className="input--hidden"/>
        <input type="hidden" name="locale" value="en"/>
      </form>
    </div>
  </div>
</div>
                        {/* <div id="mc_embed_signup">
                             <form
                                action={action}
                                method="post"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                className="validate"
                                target="_blank"
                                noValidate
                            >
                                <div id="mc_embed_signup_scroll" className="join-newsletter-box">
                                    <div className="join-newsletter-box-header">
                                        <h4><strong>Join our newsletter</strong></h4>
                                        <button
                                            aria-label="Close"
                                            className="join-newsletter-close-btn d-inline-block d-md-none"
                                            onClick={() => dismiss()}
                                        >
                                            <img
                                                alt="Close join newsletter box"
                                                src={Close}
                                            />
                                        </button>
                                    </div>
                                    <div className="join-newsletter-box-form">
                                        <input
                                            type="email"
                                            name="EMAIL"
                                            className="email join-newsletter-subscription form-control"
                                            id="EMAIL"
                                            placeholder="Enter your email address"
                                            required
                                        />
                                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                            <input
                                                type="text"
                                                name="b_5f7db102d539d8f65a3639f8d_da58181767"
                                                tabIndex="-1"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            name="subscribe"
                                            id="mc-embedded-subscribe"
                                            className="btn join-newsletter-subscription-button"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                    <button
                                        aria-label="Close"
                                        className="join-newsletter-close-btn d-none d-md-inline-block"
                                        onClick={() => dismiss()}
                                    >
                                        <img
                                            alt="Close join newsletter box"
                                            src={Close}
                                        />
                                    </button>
                                </div>
                            </form> 
                        </div> */}
                    </Container>
                ) : null
            }
        </Row>
    );
};

export default JoinNewsletter;
