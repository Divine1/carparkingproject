<template>
  <div id="allfloors">
    <!-- <h2>All floors</h2>
    <h4>allfloors: {{getAllFloors.floor1}}</h4> -->
    <div class="floor">
      <div>FLOOR1</div>
      <div>{{getAllFloors.floor1}}</div>
    </div>
    <div class="floor">
      <div>FLOOR2</div>
      <div>{{getAllFloors.floor2}}</div>
    </div>
    <div class="floor">
      <div>FLOOR3</div>
      <div>{{getAllFloors.floor3}}</div>
    </div>
    <div class="floor">
      <div>FLOOR4</div>
      <div>{{getAllFloors.floor4}}</div>
    </div>
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

<style lang="scss">
  #allfloors{
    .floor{
      height: 25vh;
      display: flex;
      justify-content: center;
      align-items: center;
      div{
        display: inline-block;
        font-size: 10vh;
      }
      div:nth-child(2){
        padding: 0 4vw;;
      }
    }
  }
</style>
