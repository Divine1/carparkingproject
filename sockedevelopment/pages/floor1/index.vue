<template>
  <div  class="individualfloors">
    <Floors :floorno="'1'" :slotno="getAllFloors.floor1"/>  
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

