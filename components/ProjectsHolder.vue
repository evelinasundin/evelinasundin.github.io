<template>
  <div class="max-w-reg mx-auto py-20">
  <h2 class="text-lg font-serif text-white pb-24"> Selected Work </h2>
  <Project v-for="project in work" :key="project.id" :project="project" />
  </div>
</template>

<script>
import { WORK as work } from '~/static/constants.js'
export default {
  data() {
    return {
      work: work
    }
  }
}
</script>
