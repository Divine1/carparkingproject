<template>
  <div class="individualfloors">
    <div>FLOOR2</div>
    <div>{{getFloor2}}</div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  computed: mapGetters(
    [
      'getFloor2'
    ]
  )
}
</script>


<style lang="scss">

</style>
