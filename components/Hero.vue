<template>
  <div class="max-w-reg min-h-screen flex items-center justify-between screen-height mx-auto py-20 relative">
    <div>
    <h1 class="font-serif text-2xl leading-tight text-white max-w-reg pb-4 head-title relative">
      Hi, Welcome
    </h1>
    <p class="text-white font-sans text-md max-w-lg inline-block">
      I am
      <span class="text-img-text cursor-pointer text-orange"> Evelina ( hover me )<img class="text-img-img pointer-events-none" lazyload src="~/assets/images/evelina.jpg" />
      </span>
       a front end developer from Stockholm, currently working
      <a href="https://ohmy.co" target="blank" class="text-orange">@ohmy.</a>
      Scroll 👇  to see some selected work I have done.
    </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.screen-height {
  margin-top: -88px;
}

.hej {
  &:before {
    content: '';
    width: 90%;
    height: 90%;
    background-color: white;
    position: absolute;
    z-index: -1;
  }
}

.text-img-img {
  opacity: 0;
  position: absolute;
  transition: opacity 0.5s ease-in-out;
  backface-visibility: hidden;
  top: 50%;
  right:0;
  transform: translateY(-50%);
  height: 500px;
}

.text-img-text {
  &:hover {
    .text-img-img {
      opacity: 1;
    }
  }
}
// @keyframes slideInFromLeft {
//   0% {
//     transform: translateX(-100%);
//     opacity: 0;
//   }
//   100% {
//     transform: translate3d(0px, 0%, 0px);
//     opacity: 1;
//   }
// }

// .hello {
//   animation: 1s ease-in-out slideInFromLeft;
// }

</style>
