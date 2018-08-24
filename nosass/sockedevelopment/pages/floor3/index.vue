<template>
  <div  class="individualfloors">
    <div>FLOOR3</div>
    <div>{{getAllFloors.floor3}}</div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  computed: mapGetters(
    [
      'getAllFloors'
    ]
  )
}
</script>
