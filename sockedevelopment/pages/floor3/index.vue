<template>
  <div  class="individualfloors">
    <Floors :floorno="'3'" :slotno="getAllFloors.floor3"/>
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
