import React, {useEffect} from 'react'

export default function SideMenu({toggleSideMenu}) {

    useEffect(()=>{
        document.querySelectorAll(".mobile-dropdown .list .list-item .icon").forEach(element=>{
            element.onclick = (e)=>{
                e.preventDefault();
                if(element.parentElement.parentElement.classList.contains("expanded")) {
                    element.parentElement.parentElement.classList.remove("expanded");
                    element.parentElement.parentElement.setAttribute("aria-expanded", "false")
                    element.parentElement.parentElement.childNodes[1].style.display = "none"
                }
                else {
                    element.parentElement.parentElement.classList.add("expanded");
                    element.parentElement.parentElement.setAttribute("aria-expanded", "true")
                    element.parentElement.parentElement.childNodes[1].style.display = "block"
                }
            }
        })
    }, [])

  return (
    <>
        <section className="mobile-dropdown" id="main-header--mobile-nav">
            <div className="mobile-dropdown--wrapper">
              <div className="mobile-dropdown--content">
                <div className="mobile-dropdown--tools">
                  <div onClick={toggleSideMenu} className="mobile-dropdown--close" data-mobile-nav-close>
                    <svg className="svg-icon icon-close " xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.9394 6.53033L0.469727 1.06066L1.53039 0L7.00006 5.46967L12.4697 0L13.5304 1.06066L8.06072 6.53033L13.5304 12L12.4697 13.0607L7.00006 7.59099L1.53039 13.0607L0.469727 12L5.9394 6.53033Z" />
                    </svg>
                  </div>
                </div>
                <ul className="
                        list
                        primary
                        ">
                  <li className="
                            list-item
                            first
                            ">
                    <a href="/">
                      HOME
                    </a>
                  </li>
                  <li className="
                            list-item
                            ">
                    <a href="/collections/new-arrivals">
                      *New*
                    </a>
                  </li>
                  <li className="
                            list-item
                            dropdown
                            " aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-collections">
                    <a href="#">
                      COLLECTIONS
                      <span className="icon">
                        <span className="plus">
                          <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                          </svg>
                        </span>
                        <span className="minus">
                          <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                          </svg>
                        </span>
                      </span>
                    </a>
                    <ul className="list secondary" id="header-mobile-dropdown-collections">
                      <li className="list-item dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-wooden-toys">
                        <a href="/collections/all-wooden-toys">
                          Wooden Toys
                          <span className="icon">
                            <span className="plus">
                              <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                              </svg>
                            </span>
                            <span className="minus">
                              <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="list tertiary" id="header-mobile-dropdown-wooden-toys">
                          <li className="list-item">
                            <a href="/collections/all-wooden-toys">All Wooden Toys</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/pretend-play">Pretend Play</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/wooden-kitchen-toys">Kitchen Play</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/wooden-animals">Wooden Animals</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/wooden-vehicles">Wooden Vehicles</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/percussion-toys">Percussion Toys</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/wooden-puzzles">Wooden Puzzles</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/educational-toys">Educational Toys</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/rattan-toys">Rattan Toys</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/rattles-teethers">Teethers</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list-item dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-educational-toys">
                        <a href="/collections/educational-toys">
                          Educational Toys
                          <span className="icon">
                            <span className="plus">
                              <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                              </svg>
                            </span>
                            <span className="minus">
                              <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="list tertiary" id="header-mobile-dropdown-educational-toys">
                          <li className="list-item">
                            <a href="/collections/counting-toys">Counting Toys</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/alphabet-toys">Alphabet Toys</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/wooden-puzzles">Puzzles</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/other-educational-tools">Other Educational Toys</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list-item dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-soft-toys">
                        <a href="/collections/all-soft-toys">
                          Soft Toys
                          <span className="icon">
                            <span className="plus">
                              <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                              </svg>
                            </span>
                            <span className="minus">
                              <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="list tertiary" id="header-mobile-dropdown-soft-toys">
                          <li className="list-item">
                            <a href="/collections/dolls-stuffed-animals">Stuffed Animals</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/knit-rattles">Rattles</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/felt-flowers">Felt Flowers</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/felt-toys">Felt Toys</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list-item dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-room-decor">
                        <a href="/collections/all-room-decor">
                          Room Decor
                          <span className="icon">
                            <span className="plus">
                              <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                              </svg>
                            </span>
                            <span className="minus">
                              <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="list tertiary" id="header-mobile-dropdown-room-decor">
                          <li className="list-item">
                            <a href="/collections/posters">Posters</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/shelf-decor">Shelf Decor</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/baskets-storage">Baskets &amp; Storage</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/banners-wall-hangings">Banners &amp; Wall Hangings</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/hooks-hangers">Wall Hooks &amp; Hangers</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/growth-charts">Growth Charts</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections">Clocks</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list-item dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-other">
                        <a href="/collections/all-essentials">
                          Other
                          <span className="icon">
                            <span className="plus">
                              <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                              </svg>
                            </span>
                            <span className="minus">
                              <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="list tertiary" id="header-mobile-dropdown-other">
                          <li className="list-item">
                            <a href="/collections/bath">Bath Time</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/dinnerware">Meal Time</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/blankets-loveys">Sleep Time</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/swimsuit">Swim Time</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/arts-crafts">Craft Time</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/explore-the-outdoors">Outdoor Time</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/sale">Sale</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list-item dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-shop-by-age">
                        <a href="#">
                          Shop by Age
                          <span className="icon">
                            <span className="plus">
                              <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                              </svg>
                            </span>
                            <span className="minus">
                              <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="list tertiary" id="header-mobile-dropdown-shop-by-age">
                          <li className="list-item">
                            <a href="/collections/baby">Baby</a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/toddler">Toddler </a>
                          </li>
                          <li className="list-item">
                            <a href="/collections/preschool">Preschool</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="
                            list-item
                            dropdown
                            " aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-brands">
                    <a href="#">
                      Brands
                      <span className="icon">
                        <span className="plus">
                          <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                          </svg>
                        </span>
                        <span className="minus">
                          <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                          </svg>
                        </span>
                      </span>
                    </a>
                    <ul className="list secondary" id="header-mobile-dropdown-brands">
                      <li className="list-item ">
                        <a href="/collections/maileg">
                          Maileg
                        </a>
                      </li>
                      <li className="list-item ">
                        <a href="/collections/brindour">
                          Brin d'Ours 
                        </a>
                      </li>
                      <li className="list-item ">
                        <a href="/collections/raduga-grez">
                          Raduga Grez
                        </a>
                      </li>
                      <li className="list-item ">
                        <a href="/collections/forest-melody">
                          Forest Melody
                        </a>
                      </li>
                      <li className="list-item ">
                        <a href="/collections/senger-naturwelt">
                          Senger Naturwelt
                        </a>
                      </li>
                      <li className="list-item ">
                        <a href="/collections/wooderful-life">
                          Wooderful Life
                        </a>
                      </li>
                      <li className="list-item ">
                        <a href="/collections/cuddle-kind">
                          Cuddle + Kind
                        </a>
                      </li>
                      <li className="list-item ">
                        <a href="/collections/konges-slojd">
                          Konges Sløjd
                        </a>
                      </li>
                      <li className="list-item ">
                        <a href="/collections/olli-ella">
                          Olli Ella
                        </a>
                      </li>
                      <li className="list-item ">
                        <a href="/collections/grapat">
                          Grapat
                        </a>
                      </li>
                      <li className="list-item ">
                        <a href="/collections/wooden-story">
                          Wooden Story
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="
                            list-item
                            last
                            dropdown
                            " aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-more">
                    <a href="#">
                      More
                      <span className="icon">
                        <span className="plus">
                          <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                          </svg>
                        </span>
                        <span className="minus">
                          <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                          </svg>
                        </span>
                      </span>
                    </a>
                    <ul className="list secondary" id="header-mobile-dropdown-more">
                      <li className="list-item dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-contact-us">
                        <a href="/pages/email-us">
                          Contact US
                          <span className="icon">
                            <span className="plus">
                              <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                              </svg>
                            </span>
                            <span className="minus">
                              <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="list tertiary" id="header-mobile-dropdown-contact-us">
                          <li className="list-item">
                            <a href="/pages/email-us">Get In Touch</a>
                          </li>
                          <li className="list-item">
                            <a href="http://odinparkerreturn.myreturnscenter.com">Returns &amp; Exchanges</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list-item dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-about-us">
                        <a href="#">
                          About Us
                          <span className="icon">
                            <span className="plus">
                              <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                              </svg>
                            </span>
                            <span className="minus">
                              <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="list tertiary" id="header-mobile-dropdown-about-us">
                          <li className="list-item">
                            <a href="/pages/how-we-give">How we give</a>
                          </li>
                          <li className="list-item">
                            <a href="/pages/about-us">Our Story</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list-item dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="header-mobile-dropdown-gift-card">
                        <a href="/products/gift-card">
                          Gift Card
                          <span className="icon">
                            <span className="plus">
                              <svg className="svg-icon icon-plus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.69225 5.69225V0H7.07107V5.69225H12.7633L12.7633 7.07107L7.07107 7.07107L7.07107 12.7633H5.69225L5.69225 7.07107L5.91697e-07 7.07107L0 5.69225H5.69225Z" />
                              </svg>
                            </span>
                            <span className="minus">
                              <svg className="svg-icon icon-minus " xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12.7633 0L12.7633 1.37882H0V0H12.7633Z" transform="translate(0 5.69238)" />
                              </svg>
                            </span>
                          </span>
                        </a>
                        <ul className="list tertiary" id="header-mobile-dropdown-gift-card">
                          <li className="list-item">
                            <a href="/products/e-gift-card">E-Gift Card</a>
                          </li>
                          <li className="list-item">
                            <a href="/products/gift-card">Physical Gift Card</a>
                          </li>
                        </ul>
                      </li>
                      <li className="list-item ">
                        <a href="/pages/wholesale">
                          Wholesale
                        </a>
                      </li>
                      <li className="list-item ">
                        <a href="/pages/registry">
                          Registry
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="list-item" id="coin-container" />
                </ul>
              </div>
            </div>
          </section>
    </>
  )
}
