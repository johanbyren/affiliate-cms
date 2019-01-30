<template>
  <div class="products">
    <div class="row">
      <div class="col-md-4" v-for="(item, index) in product_list" :key="index">
        <card-template :item="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import CardTemplate from "./shared/CardTemplate.vue";

  export default Vue.extend({
    name: 'Products',
    props: ["product_list"],
    components: { CardTemplate },
    data() {
      return {
        selectedProduct: Object
      };
    },
    mounted() {}
  })
</script>

<style>
  .footerIcons {
    font-size: 95%;
  }
  .card {
    height: 490px;
  }
  .card-text {
    height: 70px;
    overflow: hidden;
  }
</style>