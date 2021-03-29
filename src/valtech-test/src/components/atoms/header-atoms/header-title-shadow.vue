<template>
    <div>
        <p class="header-shadow">Episodes</p>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>

<style>
.header-shadow {
    color: #F0F0F0;
    font-weight: 800;
    font-family: 'Open Sans';
    margin: 0;
    z-index: -2;
    white-space: nowrap;
    position: absolute;
}
 
@media (max-width: 600px) { 
    .header-shadow {
        font-size: 74px;
        letter-spacing: -3.7px;
        line-height: 60px;
        top: 30px;
        left: 13px;
    }
}

@media (min-width: 600px) and (max-width: 1023px) { 
    .header-shadow {
        font-size: 74px;
        letter-spacing: -3.7px;
        line-height: 60px;
        top: 30px;
        left: 13px;
    }
}

@media (min-width: 1024px) { 
    .header-shadow {
        font-size: 200px;
        letter-spacing: -10px;
        line-height: 273px;
        top: 10px;
        right: 56px;
    }
}
</style>