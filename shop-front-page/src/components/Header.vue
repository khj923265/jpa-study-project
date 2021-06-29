<template>
  <header id="header" class="site-header header-style-1">
    <nav class="navigation navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="open-btn">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" custom v-slot="{ navigate }">
            <a @click="navigate" @keypress.enter="navigate" role="button" class="navbar-brand"><img src="/images/logo.png" alt></a>
          </router-link>
        </div>
        <div class="header-left">
          <div class="side-info-bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="side-info-content">
            <button class="btn side-info-close-btn"><i class="ti-close"></i></button>
            <div class="logo">
              <img src="/images/slidbar-logo.png" alt>
            </div>
            <div class="text">
              <p>Covered the whole of her lower arm towards the viewer gregor then turned to look out
                the window</p>
              <ul class="info">
                <li>Contact us: ++8801682530219</li>
                <li>Mail us: eoard@gmail.com</li>
              </ul>
              <ul class="social-links">
                <li><a href="https://m.facebook.com/?locale2=ko_KR" target="_blank"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-pinterest"></i></a></li>
                <li><a href="#"><i class="ti-vimeo-alt"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="search-area">
            <form>
              <button type="submit"><i class="fi flaticon-search"></i></button>
              <input type="text" placeholder="Search for..">
            </form>
          </div>
        </div>
        <div id="navbar" class="navbar-collapse collapse navigation-holder">
          <button class="close-navbar"><i class="ti-close"></i></button>
          <ul class="nav navbar-nav">
            <li class="menu-item-has-children">
              <router-link to="/shop" custom v-slot="{ navigate }">
                <a @click="navigate" @keypress.enter="navigate" role="button">shop</a>
              </router-link>
            </li>
            <li class="menu-item-has-children">
              <router-link to="/" custom v-slot="{ navigate }">
                <a @click="navigate" @keypress.enter="navigate" role="button">best</a>
              </router-link>
            </li>
            <li class="menu-item-has-children">
              <router-link to="/" custom v-slot="{ navigate }">
                <a @click="navigate" @keypress.enter="navigate" role="button">event</a>
              </router-link>
            </li>
          </ul>
        </div><!-- end of nav-collapse -->
        <div class="header-right">
          <div class="my-account-link">
            <router-link to="/login" custom v-slot="{ navigate }">
              <a @click="navigate" @keypress.enter="navigate" role="button"><i class="icon-user"></i></a>
            </router-link>
          </div>
          <div class="wishlist-box">
            <a href="#"><i class="icon-heart-shape-outline"></i></a>
          </div>
          <div class="mini-cart">
            <router-link to="/cart" custom v-slot="{ navigate }">
              <a @click="navigate" @keypress.enter="navigate" role="button"><i class="icon-large-paper-bag"></i></a>
            </router-link>
          </div>
        </div>
      </div><!-- end of container -->
    </nav>
  </header>
</template>
<script>
export default {

}
</script>