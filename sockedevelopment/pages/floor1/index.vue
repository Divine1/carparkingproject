<template>
  <div  class="individualfloors">
    <!-- <h1>floor1</h1>
    <h3>floor1 {{getFloor1}}</h3> -->
    <div>FLOOR1</div>
    <div>{{getFloor1}}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: mapGetters(
    [
      'getFloor1'
    ]
  )
}
</script>

<style lang="scss">

</style>
