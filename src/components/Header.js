import React from 'react'
import SideMenu from './SideMenu'

export default function Header({toggleSideMenu, toggleCart, displaySearchField, closeSearchField}) {
  

  return (
    <header className="
    main-header-wrap
    main-header--minimal-sticky
    main-header--minimal
    main-header--centered
    " data-header-layout="minimal" data-header-alignment="true">
        <section className="main-header">
          <div className="header-minimal header-minimal-centered">
            <nav className="full main-header--nav-compressed compress bordered">
              <ul className="main-header--nav-links">
                <li className="
                        nav-item
                        first
                        ">
                  <a className="label" href="/">
                    HOME
                  </a>
                </li>
                <li className="
                        nav-item
                        ">
                  <a className="label" href="/collections/new-arrivals">
                    *New*
                  </a>
                </li>
                <li className="
                        nav-item
                        dropdown
                        has-mega-nav
                        " aria-haspopup="true" aria-expanded="false" aria-controls="header-dropdown-collections">
                  <span className="border" />
                  <details data-nav-details>
                    <summary className="label" href="#">
                      <span className="icon-wrapper">
                        COLLECTIONS
                        <svg className="svg-icon icon-down-arrow " xmlns="http://www.w3.org/2000/svg" width={924} height={545} viewBox="0 0 924 545">
                          <path fill="currentColor" d="M0 82L82 0l381 383L844 2l80 82-461 461-80-82L0 82z" />
                        </svg>
                      </span>
                    </summary>
                  </details>
                  <section className="mega-nav" id="header-dropdown-collections" role="navigation" aria-hidden="true" style={{height: '0px'}}>
                    <div className="mega-nav-wrap content-area">
                      <ul className="main-list mega-nav-list clearfix">
                        <li className="
                                        list
                                        clearfix
                                        first
                                        one-column
                                        ">
                          <h2 className="label">
                            <a href="/collections/all-wooden-toys">Wooden Toys</a>
                          </h2>
                          <ul className="list-wrap" data-list="wooden-toys">
                            <li className="list-item one-column">
                              <a className="item" href="/collections/all-wooden-toys" data-category="all-wooden-toys">
                                All Wooden Toys
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/pretend-play" data-category="pretend-play">
                                Pretend Play
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/wooden-kitchen-toys" data-category="kitchen-play">
                                Kitchen Play
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/wooden-animals" data-category="wooden-animals">
                                Wooden Animals
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/wooden-vehicles" data-category="wooden-vehicles">
                                Wooden Vehicles
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/percussion-toys" data-category="percussion-toys">
                                Percussion Toys
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/wooden-puzzles" data-category="wooden-puzzles">
                                Wooden Puzzles
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/educational-toys" data-category="educational-toys">
                                Educational Toys
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/rattan-toys" data-category="rattan-toys">
                                Rattan Toys
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/rattles-teethers" data-category="teethers">
                                Teethers
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="
                                        list
                                        clearfix
                                        one-column
                                        ">
                          <h2 className="label">
                            <a href="/collections/educational-toys">Educational Toys</a>
                          </h2>
                          <ul className="list-wrap" data-list="educational-toys">
                            <li className="list-item one-column">
                              <a className="item" href="/collections/counting-toys" data-category="counting-toys">
                                Counting Toys
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/alphabet-toys" data-category="alphabet-toys">
                                Alphabet Toys
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/wooden-puzzles" data-category="puzzles">
                                Puzzles
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/other-educational-tools" data-category="other-educational-toys">
                                Other Educational Toys
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="
                                        list
                                        clearfix
                                        one-column
                                        ">
                          <h2 className="label">
                            <a href="/collections/all-soft-toys">Soft Toys</a>
                          </h2>
                          <ul className="list-wrap" data-list="soft-toys">
                            <li className="list-item one-column">
                              <a className="item" href="/collections/dolls-stuffed-animals" data-category="stuffed-animals">
                                Stuffed Animals
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/knit-rattles" data-category="rattles">
                                Rattles
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/felt-flowers" data-category="felt-flowers">
                                Felt Flowers
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/felt-toys" data-category="felt-toys">
                                Felt Toys
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="
                                        list
                                        clearfix
                                        one-column
                                        ">
                          <h2 className="label">
                            <a href="/collections/all-room-decor">Room Decor</a>
                          </h2>
                          <ul className="list-wrap" data-list="room-decor">
                            <li className="list-item one-column">
                              <a className="item" href="/collections/posters" data-category="posters">
                                Posters
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/shelf-decor" data-category="shelf-decor">
                                Shelf Decor
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/baskets-storage" data-category="baskets-storage">
                                Baskets &amp; Storage
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/banners-wall-hangings" data-category="banners-wall-hangings">
                                Banners &amp; Wall Hangings
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/hooks-hangers" data-category="wall-hooks-hangers">
                                Wall Hooks &amp; Hangers
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/growth-charts" data-category="growth-charts">
                                Growth Charts
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections" data-category="clocks">
                                Clocks
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="
                                        list
                                        clearfix
                                        one-column
                                        ">
                          <h2 className="label">
                            <a href="/collections/all-essentials">Other</a>
                          </h2>
                          <ul className="list-wrap" data-list="other">
                            <li className="list-item one-column">
                              <a className="item" href="/collections/bath" data-category="bath-time">
                                Bath Time
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/dinnerware" data-category="meal-time">
                                Meal Time
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/blankets-loveys" data-category="sleep-time">
                                Sleep Time
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/swimsuit" data-category="swim-time">
                                Swim Time
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/arts-crafts" data-category="craft-time">
                                Craft Time
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/explore-the-outdoors" data-category="outdoor-time">
                                Outdoor Time
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/sale" data-category="sale">
                                Sale
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="
                                        list
                                        clearfix
                                        last
                                        one-column
                                        ">
                          <h2 className="label">
                            <a href="#">Shop by Age</a>
                          </h2>
                          <ul className="list-wrap" data-list="shop-by-age">
                            <li className="list-item one-column">
                              <a className="item" href="/collections/baby" data-category="baby">
                                Baby
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/toddler" data-category="toddler">
                                Toddler 
                              </a>
                            </li>
                            <li className="list-item one-column">
                              <a className="item" href="/collections/preschool" data-category="preschool">
                                Preschool
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="expanded-list mega-nav-list clearfix">
                        <li className="back" />
                        <li className="
                                        list
                                        clearfix
                                        first
                                        " data-list="wooden-toys">
                          <h2 className="label">Wooden Toys</h2>
                          <ul className="list-wrap">
                            <li className="list-item">
                              <a data-category="all-wooden-toys" className="item" href="/collections/all-wooden-toys">
                                All Wooden Toys
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="pretend-play" className="item" href="/collections/pretend-play">
                                Pretend Play
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="kitchen-play" className="item" href="/collections/wooden-kitchen-toys">
                                Kitchen Play
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="wooden-animals" className="item" href="/collections/wooden-animals">
                                Wooden Animals
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="wooden-vehicles" className="item" href="/collections/wooden-vehicles">
                                Wooden Vehicles
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="percussion-toys" className="item" href="/collections/percussion-toys">
                                Percussion Toys
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="wooden-puzzles" className="item" href="/collections/wooden-puzzles">
                                Wooden Puzzles
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="educational-toys" className="item" href="/collections/educational-toys">
                                Educational Toys
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="rattan-toys" className="item" href="/collections/rattan-toys">
                                Rattan Toys
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="teethers" className="item" href="/collections/rattles-teethers">
                                Teethers
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="back" />
                        <li className="
                                        list
                                        clearfix
                                        " data-list="educational-toys">
                          <h2 className="label">Educational Toys</h2>
                          <ul className="list-wrap">
                            <li className="list-item">
                              <a data-category="counting-toys" className="item" href="/collections/counting-toys">
                                Counting Toys
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="alphabet-toys" className="item" href="/collections/alphabet-toys">
                                Alphabet Toys
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="puzzles" className="item" href="/collections/wooden-puzzles">
                                Puzzles
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="other-educational-toys" className="item" href="/collections/other-educational-tools">
                                Other Educational Toys
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="back" />
                        <li className="
                                        list
                                        clearfix
                                        " data-list="soft-toys">
                          <h2 className="label">Soft Toys</h2>
                          <ul className="list-wrap">
                            <li className="list-item">
                              <a data-category="stuffed-animals" className="item" href="/collections/dolls-stuffed-animals">
                                Stuffed Animals
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="rattles" className="item" href="/collections/knit-rattles">
                                Rattles
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="felt-flowers" className="item" href="/collections/felt-flowers">
                                Felt Flowers
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="felt-toys" className="item" href="/collections/felt-toys">
                                Felt Toys
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="back" />
                        <li className="
                                        list
                                        clearfix
                                        " data-list="room-decor">
                          <h2 className="label">Room Decor</h2>
                          <ul className="list-wrap">
                            <li className="list-item">
                              <a data-category="posters" className="item" href="/collections/posters">
                                Posters
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="shelf-decor" className="item" href="/collections/shelf-decor">
                                Shelf Decor
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="baskets-storage" className="item" href="/collections/baskets-storage">
                                Baskets &amp; Storage
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="banners-wall-hangings" className="item" href="/collections/banners-wall-hangings">
                                Banners &amp; Wall Hangings
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="wall-hooks-hangers" className="item" href="/collections/hooks-hangers">
                                Wall Hooks &amp; Hangers
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="growth-charts" className="item" href="/collections/growth-charts">
                                Growth Charts
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="clocks" className="item" href="/collections">
                                Clocks
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="back" />
                        <li className="
                                        list
                                        clearfix
                                        " data-list="other">
                          <h2 className="label">Other</h2>
                          <ul className="list-wrap">
                            <li className="list-item">
                              <a data-category="bath-time" className="item" href="/collections/bath">
                                Bath Time
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="meal-time" className="item" href="/collections/dinnerware">
                                Meal Time
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="sleep-time" className="item" href="/collections/blankets-loveys">
                                Sleep Time
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="swim-time" className="item" href="/collections/swimsuit">
                                Swim Time
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="craft-time" className="item" href="/collections/arts-crafts">
                                Craft Time
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="outdoor-time" className="item" href="/collections/explore-the-outdoors">
                                Outdoor Time
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="sale" className="item" href="/collections/sale">
                                Sale
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="back" />
                        <li className="
                                        list
                                        clearfix
                                        last
                                        " data-list="shop-by-age">
                          <h2 className="label">Shop by Age</h2>
                          <ul className="list-wrap">
                            <li className="list-item">
                              <a data-category="baby" className="item" href="/collections/baby">
                                Baby
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="toddler" className="item" href="/collections/toddler">
                                Toddler 
                              </a>
                            </li>
                            <li className="list-item">
                              <a data-category="preschool" className="item" href="/collections/preschool">
                                Preschool
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </section>
                </li>
                <li className="
                        nav-item
                        dropdown
                        " aria-haspopup="true" aria-expanded="false" aria-controls="header-dropdown-brands">
                  <span className="border" />
                  <details data-nav-details>
                    <summary className="label" href="#">
                      <span className="icon-wrapper">
                        Brands
                        <svg className="svg-icon icon-down-arrow " xmlns="http://www.w3.org/2000/svg" width={924} height={545} viewBox="0 0 924 545">
                          <path fill="currentColor" d="M0 82L82 0l381 383L844 2l80 82-461 461-80-82L0 82z" />
                        </svg>
                      </span>
                    </summary>
                  </details>
                  <ul className="dropdown-wrap primary" id="header-dropdown-brands" aria-hidden="true">
                    <li className="
                                dropdown-item
                                first
                                ">
                      <a href="/collections/maileg">
                        <span className="label">Maileg</span>
                      </a>
                    </li>
                    <li className="
                                dropdown-item
                                ">
                      <a href="/collections/brindour">
                        <span className="label">Brin d'Ours </span>
                      </a>
                    </li>
                    <li className="
                                dropdown-item
                                ">
                      <a href="/collections/raduga-grez">
                        <span className="label">Raduga Grez</span>
                      </a>
                    </li>
                    <li className="
                                dropdown-item
                                ">
                      <a href="/collections/forest-melody">
                        <span className="label">Forest Melody</span>
                      </a>
                    </li>
                    <li className="
                                dropdown-item
                                ">
                      <a href="/collections/senger-naturwelt">
                        <span className="label">Senger Naturwelt</span>
                      </a>
                    </li>
                    <li className="
                                dropdown-item
                                ">
                      <a href="/collections/wooderful-life">
                        <span className="label">Wooderful Life</span>
                      </a>
                    </li>
                    <li className="
                                dropdown-item
                                ">
                      <a href="/collections/cuddle-kind">
                        <span className="label">Cuddle + Kind</span>
                      </a>
                    </li>
                    <li className="
                                dropdown-item
                                ">
                      <a href="/collections/konges-slojd">
                        <span className="label">Konges Sløjd</span>
                      </a>
                    </li>
                    <li className="
                                dropdown-item
                                ">
                      <a href="/collections/olli-ella">
                        <span className="label">Olli Ella</span>
                      </a>
                    </li>
                    <li className="
                                dropdown-item
                                ">
                      <a href="/collections/grapat">
                        <span className="label">Grapat</span>
                      </a>
                    </li>
                    <li className="
                                dropdown-item
                                last
                                ">
                      <a href="/collections/wooden-story">
                        <span className="label">Wooden Story</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="
                        nav-item
                        last
                        dropdown
                        " aria-haspopup="true" aria-expanded="false" aria-controls="header-dropdown-more">
                  <span className="border" />
                  <details data-nav-details>
                    <summary className="label" href="#">
                      <span className="icon-wrapper">
                        More
                        <svg className="svg-icon icon-down-arrow " xmlns="http://www.w3.org/2000/svg" width={924} height={545} viewBox="0 0 924 545">
                          <path fill="currentColor" d="M0 82L82 0l381 383L844 2l80 82-461 461-80-82L0 82z" />
                        </svg>
                      </span>
                    </summary>
                  </details>
                  <ul className="dropdown-wrap primary" id="header-dropdown-more" aria-hidden="true">
                    <li className="
                                dropdown-item
                                first
                                dropdown
                                " aria-haspopup="true" aria-expanded="false" aria-controls="header-dropdown-contact-us">
                      <details data-nav-details>
                        <summary href="/pages/email-us">
                          <span className="label">Contact US</span>
                          <span className="icon">
                            <svg className="svg-icon icon-arrow-right " xmlns="http://www.w3.org/2000/svg" width={544} height={924} viewBox="0 0 544 924">
                              <path fill="currentColor" d="M0 842l381-381L2 80 82 0l462 461-82 80L79 924 0 842z" />
                            </svg>
                          </span>
                        </summary>
                      </details>
                      <ul className="dropdown-wrap child secondary right" id="header-dropdown-contact-us" aria-hidden="true">
                        <li className="
                                        dropdown-item
                                        first
                                        ">
                          <a href="/pages/email-us">
                            <span className="label">Get In Touch</span>
                          </a>
                        </li>
                        <li className="
                                        dropdown-item
                                        last
                                        ">
                          <a href="http://odinparkerreturn.myreturnscenter.com">
                            <span className="label">Returns &amp; Exchanges</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="
                                dropdown-item
                                dropdown
                                " aria-haspopup="true" aria-expanded="false" aria-controls="header-dropdown-about-us">
                      <details data-nav-details>
                        <summary href="#">
                          <span className="label">About Us</span>
                          <span className="icon">
                            <svg className="svg-icon icon-arrow-right " xmlns="http://www.w3.org/2000/svg" width={544} height={924} viewBox="0 0 544 924">
                              <path fill="currentColor" d="M0 842l381-381L2 80 82 0l462 461-82 80L79 924 0 842z" />
                            </svg>
                          </span>
                        </summary>
                      </details>
                      <ul className="dropdown-wrap child secondary right" id="header-dropdown-about-us" aria-hidden="true">
                        <li className="
                                        dropdown-item
                                        first
                                        ">
                          <a href="/pages/how-we-give">
                            <span className="label">How we give</span>
                          </a>
                        </li>
                        <li className="
                                        dropdown-item
                                        last
                                        ">
                          <a href="/pages/about-us">
                            <span className="label">Our Story</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="
                                dropdown-item
                                dropdown
                                " aria-haspopup="true" aria-expanded="false" aria-controls="header-dropdown-gift-card">
                      <details data-nav-details>
                        <summary href="/products/gift-card">
                          <span className="label">Gift Card</span>
                          <span className="icon">
                            <svg className="svg-icon icon-arrow-right " xmlns="http://www.w3.org/2000/svg" width={544} height={924} viewBox="0 0 544 924">
                              <path fill="currentColor" d="M0 842l381-381L2 80 82 0l462 461-82 80L79 924 0 842z" />
                            </svg>
                          </span>
                        </summary>
                      </details>
                      <ul className="dropdown-wrap child secondary right" id="header-dropdown-gift-card" aria-hidden="true">
                        <li className="
                                        dropdown-item
                                        first
                                        ">
                          <a href="/products/e-gift-card">
                            <span className="label">E-Gift Card</span>
                          </a>
                        </li>
                        <li className="
                                        dropdown-item
                                        last
                                        ">
                          <a href="/products/gift-card">
                            <span className="label">Physical Gift Card</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="
                                dropdown-item
                                ">
                      <a href="/pages/wholesale">
                        <span className="label">Wholesale</span>
                      </a>
                    </li>
                    <li className="
                                dropdown-item
                                last
                                ">
                      <a href="/pages/registry">
                        <span className="label">Registry</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <h1 className="
                store-title
                store-logo
                " style={{maxWidth: '400px'}}>
              <a href="/" style={{maxWidth: '400px'}}>
                <img src="//cdn.shopify.com/s/files/1/0020/4180/6905/files/odin_parker_bc1f894c-fd20-4446-84fc-f3e02d7cee24_124x25.png?v=1578631119" alt="Heirloom quality wooden toys from around the world. " data-rimg srcSet="//cdn.shopify.com/s/files/1/0020/4180/6905/files/odin_parker_bc1f894c-fd20-4446-84fc-f3e02d7cee24_124x25.png?v=1578631119 1x" />
              </a>
            </h1>
            <style dangerouslySetInnerHTML={{__html: "\n            " }} />
            <div className="main-header--tools tools clearfix">
              <div className="main-header--tools-group">
                <div className="main-header--tools-left">
                  <div className="tool-container">
                    <a onClick={toggleSideMenu} className="menu" href aria-haspopup="true" aria-controls="main-header--mobile-nav" aria-expanded="false" aria-label="Main Menu">
                      <svg className="svg-icon icon-menu " xmlns="http://www.w3.org/2000/svg" width={18} height={14} viewBox="0 0 18 14">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M17 1.5H0V0H17V1.5ZM17 7.5H0V6H17V7.5ZM0 13.5H17V12H0V13.5Z" transform="translate(0.5)" />
                      </svg>
                    </a>
                    <div className="
                                live-search
                                live-search-hidden
                                live-search-results-hidden
                                live-search-results-placeholder
                                live-search-results-footer-hidden
                                live-search-alignment-right
                                " data-live-search>
                      <button onClick={displaySearchField} id="ls-button-search" className="
                                    ls-button-search
                                    ls-button-search--no-js-hidden
                                    " type="button" aria-label="Open search" data-live-search-button-search>
                        <svg className="svg-icon icon-search " xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19">
                          <path fillRule="evenodd" fill="currentColor" clipRule="evenodd" d="M3.12958 3.12959C0.928303 5.33087 0.951992 8.964 3.23268 11.2447C5.51337 13.5254 9.14649 13.5491 11.3478 11.3478C13.549 9.14651 13.5254 5.51338 11.2447 3.23269C8.96398 0.951993 5.33086 0.928305 3.12958 3.12959ZM2.17202 12.3054C-0.671857 9.46147 -0.740487 4.87834 2.06892 2.06893C4.87833 -0.740488 9.46145 -0.671858 12.3053 2.17203C15.1492 5.01591 15.2178 9.59904 12.4084 12.4085C9.59902 15.2179 5.0159 15.1492 2.17202 12.3054ZM16.4655 17.589L12.5285 13.589L13.5976 12.5368L17.5346 16.5368L16.4655 17.589Z" transform="translate(0 0.5)" />
                        </svg>
                      </button>
                      <noscript>
                        &lt;a href="/search" class="ls-button-search"&gt;
                        &lt;svg class="svg-icon icon-search " xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19"&gt;
                        &lt;path fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" d="M3.12958 3.12959C0.928303 5.33087 0.951992 8.964 3.23268 11.2447C5.51337 13.5254 9.14649 13.5491 11.3478 11.3478C13.549 9.14651 13.5254 5.51338 11.2447 3.23269C8.96398 0.951993 5.33086 0.928305 3.12958 3.12959ZM2.17202 12.3054C-0.671857 9.46147 -0.740487 4.87834 2.06892 2.06893C4.87833 -0.740488 9.46145 -0.671858 12.3053 2.17203C15.1492 5.01591 15.2178 9.59904 12.4084 12.4085C9.59902 15.2179 5.0159 15.1492 2.17202 12.3054ZM16.4655 17.589L12.5285 13.589L13.5976 12.5368L17.5346 16.5368L16.4655 17.589Z" transform="translate(0 0.5)"/&gt;
                        &lt;/svg&gt;
                        &lt;label class="ls-label"&gt;
                        Search
                        &lt;/label&gt;
                        &lt;/a&gt;
                      </noscript>
                      <label className="
                                    ls-label
                                    ls-label--no-js-hidden
                                    " htmlFor="ls-button-search">
                        Search
                      </label>
                      <div className="ls-dimmer" />
                      <form id="ls-form" className="ls-form" action="/search" method="get" autoComplete="off" data-live-search-form>
                        <input className="ls-input" name="q" type="text" placeholder="What are you looking for?" data-live-search-form-input />
                        <button className="ls-form-button-search" type="submit" aria-label="Search" data-live-search-form-button-search>
                          <svg className="svg-icon icon-search " xmlns="http://www.w3.org/2000/svg" width={18} height={19} viewBox="0 0 18 19">
                            <path fillRule="evenodd" fill="currentColor" clipRule="evenodd" d="M3.12958 3.12959C0.928303 5.33087 0.951992 8.964 3.23268 11.2447C5.51337 13.5254 9.14649 13.5491 11.3478 11.3478C13.549 9.14651 13.5254 5.51338 11.2447 3.23269C8.96398 0.951993 5.33086 0.928305 3.12958 3.12959ZM2.17202 12.3054C-0.671857 9.46147 -0.740487 4.87834 2.06892 2.06893C4.87833 -0.740488 9.46145 -0.671858 12.3053 2.17203C15.1492 5.01591 15.2178 9.59904 12.4084 12.4085C9.59902 15.2179 5.0159 15.1492 2.17202 12.3054ZM16.4655 17.589L12.5285 13.589L13.5976 12.5368L17.5346 16.5368L16.4655 17.589Z" transform="translate(0 0.5)" />
                          </svg>
                        </button>
                        <button onClick={closeSearchField} className="ls-form-button-close" type="button" aria-label="Close search" data-live-search-form-button-close>
                          <svg className="svg-icon icon-close " xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.9394 6.53033L0.469727 1.06066L1.53039 0L7.00006 5.46967L12.4697 0L13.5304 1.06066L8.06072 6.53033L13.5304 12L12.4697 13.0607L7.00006 7.59099L1.53039 13.0607L0.469727 12L5.9394 6.53033Z" />
                          </svg>
                        </button>
                      </form>
                      <div className="ls-results" data-live-search-results>
                        <section className="ls-results-products">
                          <header className="lsr-products-header">
                            <h2 className="lsrp-header-title">Products</h2>
                          </header>
                          <div className="lsr-products-content" data-live-search-results-product-content>
                            <div className="lsrp-content-placeholder">
                              <figure className="lsrpc-placeholder-figure">
                              </figure>
                              <div className="lsrpc-placeholder-content">
                                <div className="lsrpcp-content-title">
                                </div>
                                <div className="lsrpcp-content-price">
                                </div>
                              </div>
                            </div>
                            <div className="lsrp-content-placeholder">
                              <figure className="lsrpc-placeholder-figure">
                              </figure>
                              <div className="lsrpc-placeholder-content">
                                <div className="lsrpcp-content-title">
                                </div>
                                <div className="lsrpcp-content-price">
                                </div>
                              </div>
                            </div>
                            <div className="lsrp-content-placeholder">
                              <figure className="lsrpc-placeholder-figure">
                              </figure>
                              <div className="lsrpc-placeholder-content">
                                <div className="lsrpcp-content-title">
                                </div>
                                <div className="lsrpcp-content-price">
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <div className="lsr-footer" data-live-search-results-footer>
                          <a className="lsr-footer-viewall" href data-live-search-results-footer-viewall>View all results</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tool-container">
                    <a className="account-options" href="/account" aria-label="Account">
                      <svg className="svg-icon icon-person " xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.07453 1.5C6.89095 1.5 5.11767 3.27499 5.11767 5.46843C5.11766 7.66186 6.89094 9.43685 9.07452 9.43685C11.2581 9.43685 13.0314 7.66186 13.0314 5.46843C13.0314 3.27499 11.2581 1.5 9.07453 1.5ZM3.61767 5.46843C3.61767 2.45003 6.05906 0 9.07454 0C12.09 0 14.5314 2.45003 14.5314 5.46843C14.5314 8.48682 12.09 10.9369 9.07451 10.9369C6.05904 10.9369 3.61766 8.48682 3.61767 5.46843ZM2.35675 14.3874C3.88164 13.2638 6.15029 12.125 9.07457 12.125C11.9989 12.125 14.2675 13.2638 15.7924 14.3874C16.5551 14.9494 17.1376 15.5116 17.5314 15.9357C17.7286 16.1481 17.8794 16.3267 17.9826 16.4548C18.0342 16.5188 18.074 16.5703 18.1019 16.6071C18.1158 16.6255 18.1268 16.6402 18.1347 16.651L18.1444 16.6642L18.1475 16.6686L18.1487 16.6702C18.1487 16.6702 18.1495 16.6714 17.5392 17.1073C16.9289 17.5433 16.9293 17.5437 16.9293 17.5437L16.9261 17.5394L16.906 17.5125C16.8869 17.4873 16.8565 17.4479 16.8148 17.3962C16.7314 17.2927 16.6035 17.1408 16.4323 16.9564C16.0892 16.5869 15.5758 16.091 14.9026 15.595C13.5555 14.6024 11.5919 13.625 9.07457 13.625C6.55729 13.625 4.59361 14.6024 3.24655 15.595C2.57331 16.091 2.05994 16.5869 1.71689 16.9564C1.54565 17.1408 1.41771 17.2927 1.33434 17.3962C1.29268 17.4479 1.26222 17.4873 1.24313 17.5125L1.22306 17.5394L1.21988 17.5437C1.21988 17.5437 1.22021 17.5433 0.60991 17.1073C-0.000390232 16.6714 7.48403e-06 16.6708 7.48403e-06 16.6708L0.00162408 16.6686L0.00476668 16.6642L0.0144317 16.651C0.0223748 16.6402 0.0333185 16.6255 0.0472455 16.6071C0.0750945 16.5703 0.114903 16.5188 0.166533 16.4548C0.269743 16.3267 0.420496 16.1481 0.617698 15.9357C1.01152 15.5116 1.59403 14.9494 2.35675 14.3874Z" transform="translate(1.3999 1)" />
                      </svg>
                      <label className="main-header--tools-label">
                        Account
                      </label>
                    </a>
                    <button onClick={toggleCart} className="mini-cart-wrap mini-cart-wrap--no-js-hidden" aria-label="mini-cart-toggle" data-cart-mini-toggle>
                      {/*<span className="item-count" data-cart-mini-count>3</span>*/}
                      <svg className="svg-icon icon-cart " xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 20">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M3.69409 1.5H0V0H4.86572L7.81445 11.8106C7.84204 11.9219 7.94214 12 8.05688 12H19.1235C19.2297 12 19.3242 11.9331 19.3594 11.833L21.8237 4.83301C21.8809 4.67039 21.7603 4.5 21.5879 4.5H7.5L7.16357 3H21.5879C22.7947 3 23.6392 4.19275 23.2385 5.3311L20.7744 12.3311C20.5278 13.0315 19.866 13.5 19.1235 13.5H8.05688C7.25366 13.5 6.55371 12.9532 6.35913 12.1739L3.69409 1.5ZM19 16.25C19 17.0784 18.3284 17.75 17.5 17.75C16.6716 17.75 16 17.0784 16 16.25C16 15.4216 16.6716 14.75 17.5 14.75C18.3284 14.75 19 15.4216 19 16.25ZM9.5 17.75C10.3284 17.75 11 17.0784 11 16.25C11 15.4216 10.3284 14.75 9.5 14.75C8.67163 14.75 8 15.4216 8 16.25C8 17.0784 8.67163 17.75 9.5 17.75Z" transform="translate(0 1)" />
                      </svg>
                    </button>
                    {/* start: include 'wishlist-link' */}
                    <a href="/pages/wishlist" className="wk-link wk-empty" title="View Wishlist">
                      <div className="wk-icon">
                        <svg version="1.1" xmlns="https://www.w3.org/2000/svg" width="64px" height="60.833px" viewBox="0 0 64 60.833">
                          <path stroke="#000" strokeWidth={5} strokeMiterlimit={10} fillOpacity={0} d="M45.684,2.654c-6.057,0-11.27,4.927-13.684,10.073 c-2.417-5.145-7.63-10.073-13.687-10.073c-8.349,0-15.125,6.776-15.125,15.127c0,16.983,17.134,21.438,28.812,38.231 c11.038-16.688,28.811-21.787,28.811-38.231C60.811,9.431,54.033,2.654,45.684,2.654z" />
                        </svg>
                      </div>
                      <span className="wk-label">Wishlist</span> <span className="wk-count">(0)</span>
                    </a>
                    {/* end: include 'wishlist-link' */}
                    <noscript>
                      &lt;a href="/cart" class="mini-cart-wrap"&gt;
                      &lt;svg class="svg-icon icon-cart " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 20"&gt;
                      &lt;path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M3.69409 1.5H0V0H4.86572L7.81445 11.8106C7.84204 11.9219 7.94214 12 8.05688 12H19.1235C19.2297 12 19.3242 11.9331 19.3594 11.833L21.8237 4.83301C21.8809 4.67039 21.7603 4.5 21.5879 4.5H7.5L7.16357 3H21.5879C22.7947 3 23.6392 4.19275 23.2385 5.3311L20.7744 12.3311C20.5278 13.0315 19.866 13.5 19.1235 13.5H8.05688C7.25366 13.5 6.55371 12.9532 6.35913 12.1739L3.69409 1.5ZM19 16.25C19 17.0784 18.3284 17.75 17.5 17.75C16.6716 17.75 16 17.0784 16 16.25C16 15.4216 16.6716 14.75 17.5 14.75C18.3284 14.75 19 15.4216 19 16.25ZM9.5 17.75C10.3284 17.75 11 17.0784 11 16.25C11 15.4216 10.3284 14.75 9.5 14.75C8.67163 14.75 8 15.4216 8 16.25C8 17.0784 8.67163 17.75 9.5 17.75Z" transform="translate(0 1)"/&gt;
                      &lt;/svg&gt;
                      &lt;/a&gt;
                    </noscript>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SideMenu toggleSideMenu={toggleSideMenu} />
        </section>
      </header>
  )
}
