import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Header from "./components/Header.js";
import Cart from "./components/Cart.js";
import Footer from "./components/Footer.js";

function App() {

  const [sideMenuState, setSideMenuState] = useState(false);
  const [searchFieldState, setSearchFieldState] = useState(false);
  const [cartState, setCartState] = useState(false);


  const toggleCart = (e) => {
    if(cartState) {
      document.documentElement.classList.remove("scroll-locked");
      document.getElementsByClassName("sidebar-drawer-container")[0].setAttribute("data-sidebar-drawer-animation-state", "close");
      document.getElementsByClassName("sidebar-drawer-container")[0].removeAttribute("data-tab-index");
      setCartState(false);
    }
    else {
      document.documentElement.classList.add("scroll-locked");
      document.getElementsByClassName("sidebar-drawer-container")[0].setAttribute("data-sidebar-drawer-animation-state", "open");
      document.getElementsByClassName("sidebar-drawer-container")[0].setAttribute("data-tab-index", -1);
      setCartState(true);
    }
  };

  const toggleSideMenu = (e) => {
    if(sideMenuState) {
      document.documentElement.classList.remove("scroll-locked");
      document.getElementById("main-header--mobile-nav").classList.remove("active");
      setSideMenuState(false);
    }
    else {
      document.documentElement.classList.add("scroll-locked");
      document.getElementById("main-header--mobile-nav").classList.add("active");
      setSideMenuState(true);
    }
  };

  const displaySearchField = (e) => {
    document.documentElement.classList.add("scroll-locked");
    e.target.parentElement.parentElement.classList.remove("live-search-hidden");
    setSearchFieldState(true);
  }

  const closeSearchField = (e) => {
    document.documentElement.classList.remove("scroll-locked");
    document.getElementsByClassName("live-search")[0].classList.add("live-search-hidden");
    setSearchFieldState(false)
  }

  /*
  useEffect(() => {
    document.body.onclick = (e) => {
      const targetCls = e.target.classList;
      if(!targetCls.contains("icon-cart") || !targetCls.contains("icon-search")) {
        if (document.documentElement.classList.contains("scroll-locked")) {
          if(sideMenuState)
            closeSideMenu()
          if(searchFieldState)
            closeSearchField()
          if(cartState)
            closeCart()
          document.documentElement.classList.remove("scroll-locked");
        }
      }
  }
  }, []);*/

  return (
    <div className="App">
      <Cart />
      <Header
        toggleSideMenu={toggleSideMenu}
        toggleCart={toggleCart}
        displaySearchField={displaySearchField}
        closeSearchField={closeSearchField}
      />
      <Footer />
    </div>
  );
}

export default App;
