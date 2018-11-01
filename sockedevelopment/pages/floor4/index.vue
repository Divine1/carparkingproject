<template>
  <div  class="individualfloors">
    <Floors :floorno="'4'" :slotno="getAllFloors.floor4"/>
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

