<template>
    <div>
        <div class="floor">
            <div>FLOOR</div>
            <div style="color:#00008b">{{floorno}}</div>
        </div>
        <div class="slots">
            <div>AVAILABLE SLOTS</div>
            <div  style="color:#00008b">{{slotno}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props :["floorno","slotno"]
}
</script>

