<template>
    <div class="header-title-div">
        <p class="header-title">Last Episodes</p>
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
.header-title-div {
    display: flex;
    flex-flow: column-reverse;
    height: 91px;
    width: fit-content;
}

.header-title {
    color: #111111;
    font-weight: 800;
    font-family: 'Open Sans';
    margin: 0 40px;
    display:inline-block;
}

.header-title:after {    
    background: #5CD0FE 0% 0% no-repeat padding-box;
    width: 100%;
    height: 2px;
    display: block;
    content: "";
    position:relative;
    top: 24px;
}
 
@media (max-width: 600px) { 
    .header-title {
        font-size: 40px;
        text-align: left;
        letter-spacing: -1.5px;
        line-height: 36px;
    }
}

@media (min-width: 600px) and (max-width: 1023px) { 
    .header-title {
        font-size: 40px;
        text-align: left;
        letter-spacing: -1.5px;
        line-height: 36px;
    }
}

@media (min-width: 1024px) { 
    .header-title {
        font-size: 80px;
        text-align: center;
        letter-spacing: -4px;
        line-height: 109px;
    }
    .header-title-div {
        display: flex;
        justify-content: center;
        height: 109px;
        width: auto;
        place-items: center;
        margin-top: 80px;
    }
    .header-title:after {    
        height: 4px;
        top: 8px;
    }
}
</style>