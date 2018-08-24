<template>
  <div  class="individualfloors">
    <div>FLOOR4</div>
    <div>{{getAllFloors.floor4}}</div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  asyncData(context){
    console.log("in asyncData floor4")
    //console.log(process.env)
  },
  computed: mapGetters(
    [
      'getAllFloors'
    ]
  )
}
</script>

