<template>
    <div class="viewmore-container">
        <button class="viewmore-button" >
            <p href="#">View More</p>
        </button>
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
/* CA:

Apply CSS from example
 */
.viewmore-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.viewmore-button {
    cursor: pointer;
    width: 146px;
    height: 50px;
    font-family:'Open Sans';
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    line-height: 18px;
    letter-spacing: 1px;
    color: #111111;
    text-transform: capitalize;
    margin: 0;
    border: 2px solid #000000;
    box-shadow: 0px 1px 30px #00000000;
    background: transparent;
    
}
.viewmore-button:focus {
    outline: 2px solid #000000;
}
</style>