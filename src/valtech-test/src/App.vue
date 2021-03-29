<template>
  <div>
    <header-molecule></header-molecule>
    <tab-molecule @subjectSelected="subjectSelected=$event"></tab-molecule>
    <card-molecule :subjectSelected="subjectSelected"></card-molecule>
    <viewmore-button></viewmore-button>
  </div>
</template>

<script>
import ViewmoreButton from './components/atoms/viewmore-button/viewmore-button.vue'
import CardMolecule from './components/molecules/card-molecule.vue'
import HeaderMolecule from './components/molecules/header-molecule.vue'
import TabMolecule from './components/molecules/tab-molecule.vue'

export default {
  name: 'App',
  data () {
    return {
      subjectSelected: 'Subject-1'
    }
  },
  components: {
    HeaderMolecule,
    TabMolecule,
    CardMolecule,
    ViewmoreButton
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');
html {
  background-color: #F9F9F9;
}
</style>
