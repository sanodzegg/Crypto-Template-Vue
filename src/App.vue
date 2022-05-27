<script>
import NavbarComp from "./components/NavbarComp.vue"
import { mapActions } from "vuex";
export default {
    name: 'App',
    components: {
      NavbarComp,
    },
    mounted: function() {
      this.getCrypto();
    },
    methods: {
      ...mapActions(["getCrypto"]),
    },
}
</script>

<template>
  <NavbarComp />
</template>

<style>
  @import url(../src/assets/style/master.css);
</style>
