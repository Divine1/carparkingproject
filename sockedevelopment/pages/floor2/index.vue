<template>
  <div  class="individualfloors">
    <Floors :floorno="'2'" :slotno="getAllFloors.floor2"/>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';
import Floors from '@/components/Floors.vue';
export default {
  components:{
    Floors
  },
  computed: mapGetters(
    [
      'getAllFloors'
    ]
  )
}
</script>
