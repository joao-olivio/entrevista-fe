<template>
    <div class="playbutton-container">
            <img  tabindex="0" aria-label="Play Button" class="play-button" src="../../../assets/Icon Play.svg" alt="Play Button">
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
.playbutton-container {
    width: 50%;
}
.play-button {
    cursor: pointer;
}
.play-button:hover {
    opacity: 0.9;
}
.playbutton-button:focus {
    outline: 2px solid black;
}
</style>