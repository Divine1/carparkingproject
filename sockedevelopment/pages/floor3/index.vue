<template>
  <div  class="individualfloors">
    <div>FLOOR3</div>
    <div>{{getFloor3}}</div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  computed: mapGetters(
    [
      'getFloor3'
    ]
  )
}
</script>
<style lang="scss">

</style>