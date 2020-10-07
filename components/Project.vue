<template>
  <div class="pb-48">
    <img lazyload :src="project.image" class="w-9/12 pb-6"/>
    <div class="pl-6 project-text relative">
      <h3 class="text-lg text-white font-serif pb-2"> {{project.title}} </h3>
      <h2 class="font-sans text-white font-bold uppercase text-sm pb-8"> {{project.subtitle}} </h2>
      <p class="text-white font-sans max-w-md pb-4 project-html" v-html="project.text">  </p>

      <div class="flex pt-10 pb-8">
        <div v-for="item in project.techniques" :key="item" class="mr-3 text-xs font-sans text-white uppercase font-bold">
        {{item}}
        </div>
      </div>
      <p class="font-serif text-md text-white"> Go to website</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    project: [Object, Array]
  }
}
</script>

<style lang="scss">

.project-text {
  &:before {
    content:'';
    height: 100%;
    width: 1px;
    background-color: white;
    position: absolute;
    left: 0;
  }
}

.project-html {
  a {
    @apply text-orange;
  }
}
</style>
