<template>
  <section>
    <h2 class="title-section">Last<br class="break"> Episodes</h2>
    <span class="title-section--before"></span>
    <div class="blue-circle"></div>

    <div class="menu">
        <ul class="menu--ul">
            <li>All</li>
            <li>Development</li>
            <li>Design</li>
            <li>Project Management</li>
        </ul>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
    .title-section {
        font-size: 40px;
        line-height: 42px;
        letter-spacing: -1.5px;
        font-weight: 900;
        border-bottom: 2px solid #5CD0FE;
        margin: 40px 0px 10px -56px;
        padding: 0px 0px 20px;
    }

    .title-section--before::before {
        content: 'Episodes';
        font-size: 74px;
        line-height: 76px;
        letter-spacing: -3.7px;
        font-weight: 900;
        color: #F0F0F0;
        position: absolute;
        top: 50px;
        left: 2%;
        z-index: -999;
    }

    .menu, .blue-circle {
        display: none;
    }

    @media (min-width: 375px) {
        .title-section--before::before {
            left: 10%;
        }
    }

    @media (min-width: 480px) {
        .break {
            display: none;
        }

        .title-section {
            font-size: 80px;
            line-height: 109px;
            letter-spacing: -4px;
            border-bottom: 4px solid #5CD0FE;
            margin: 40px 0px 10px 0px;
            padding: 0px 0px 10px;
        }

        .title-section--before::before {
            content: 'Episodes';
            font-size: 200px;
            line-height: 273px;
            letter-spacing: -10px;
            font-weight: 900;
            color: #F0F0F0;
            position: absolute;
            top: -30px;
            left: 36%;
        }

        .blue-circle {
            display: flex;
            width: 554px;
            height: 554px;
            border-radius: 100%;
            background-color: #5DD1FF;
            position: absolute;
            z-index: -999;
            left: 6px;
            top: 0px;
        }

        .menu {
            display: flex;
            margin-bottom: 20px;
        }

        .menu--ul {
            display: flex;
            list-style: none;
        }

        .menu--ul li {
            margin: 0px 10px;
            text-transform: uppercase;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: 2.31px;
            font-weight: 700;
            border-bottom: 3px solid transparent;
            padding-bottom: 10px;
        }

        .menu--ul li:active {
            border-bottom: 3px solid #000000;
            padding-bottom: 10px;
        }
    }
</style>