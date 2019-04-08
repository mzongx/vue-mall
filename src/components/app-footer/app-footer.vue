<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__secondary">
        <div class="footer__inner">
          <div class="footer__region">
            <span>Region</span>
            <select class="footer__region__select">
              <option value="en-US">USA</option>
              <option value="zh-CN">China</option>
              <option value="in">India</option>
            </select>
          </div>
          <div class="footer__secondary__nav">
            <span>Copyright © 2017 IMooc All Rights Reserved.</span>
            <a href="http://us.lemall.com/us/aboutUs.html">
              About Us
            </a>
            <a href="http://us.lemall.com/us/termsofUse.html">
              Terms &amp; Conditions
            </a>
            <a href="http://us.lemall.com/us/privacyPolicy.html">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
  .footer {
    background-color: #f5f7fc;
    color: #333;
    position: relative;
  }

  .footer__wrap {
    max-width: 1280px;
    margin: 0 auto;
  }

  .footer__primary .footer__inner {
    height: 104px;
  }

  .footer__secondary {
    border-top: 1px solid rgba(51, 51, 51, 0.15);
  }

  .footer__secondary .footer__inner {
    height: 100px;
  }

  .footer__inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }

  .footer__logo {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    height: 49.5px;
    width: 190px;
    left: 36px;
  }

  .footer__logo .logo {
    height: 100%;
    width: 100%;
    display: none;
  }

  .footer__logo .logo__text {
    fill: #333;
  }

  .footer__nav {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 36px;
  }

  .footer__nav a {
    color: #333;
    margin-left: 5.14284em;
  }

  .footer__nav a:first-child {
    margin-left: 0;
  }

  .footer__region {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 36px;
  }

  .footer__region span {
    color: #ada9a5;
  }
  .select2-container--default .select2-selection--single {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 0;
    color: #333;
    cursor: pointer;
    outline: none;
    z-index: 1;
  }

  .footer__secondary__nav {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 36px;
  }

  .footer__secondary__nav a,
  .footer__secondary__nav span {
    color: #ada9a5;
    margin-left: 3.3125em;
  }

  .footer__secondary__nav a:first-child,
  .footer__secondary__nav span:first-child {
    margin-left: 0;
  }

  .footer__region__flag {
    display: inline-block;
    position: relative;
    top: 7px;
    width: 38px;
  }
  @media screen and (max-width: 1440px) {
    .footer__nav a {
      margin-left: 2em;
    }

    .footer__secondary__nav a,
    .footer__secondary__nav span {
      margin-left: 1.5em;
    }
  }

  @media screen and (max-width: 991px) {
    .footer__nav a {
      font-size: 12px;
    }

    .footer__secondary__nav a,
    .footer__secondary__nav span {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 767px) {
    .footer__primary .footer__inner {
      padding-top: 80px;
      padding-bottom: 80px;
      height: auto;
      text-align: center;
    }

    .footer__secondary .footer__inner {
      padding: 15px 0 20px;
      height: auto;
      text-align: center;
    }

    .footer__logo {
      position: static;
      top: 0;
      left: 0;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
      height: 42.73px;
      width: 164px;
      display: inline-block;
    }

    .footer__nav {
      position: static;
      top: 0;
      left: 0;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
      display: block;
      margin-top: 70px;
    }

    .footer__nav a {
      margin-top: 23px;
      margin-left: 0;
      display: block;
    }

    .footer__nav a:first-of-type {
      margin-top: 0;
    }

    .footer__region {
      position: static;
      top: 0;
      left: 0;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
    }

    .footer__secondary__nav {
      position: static;
      top: 0;
      left: 0;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
      margin-top: 50px;
    }

    .footer__secondary__nav span,
    .footer__secondary__nav a {
      display: block;
      margin-left: 0;
    }

    .footer__secondary__nav a {
      margin-top: 1.6363636364em;
    }
  }
</style>
