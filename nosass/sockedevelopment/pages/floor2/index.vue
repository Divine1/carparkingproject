<template>
  <div  class="individualfloors">
    <div>FLOOR2</div>
    <div>{{getAllFloors.floor2}}</div>
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
