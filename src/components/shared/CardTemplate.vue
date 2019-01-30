<template>
  <div class="cardTemplate">
    <div class="card mb-4 shadow-sm">
      <img 
        class="card-img-top mt-2"
        v-bind:src="item.productImage"
        alt="Card img cap"
        style="max-height: 700px; max-width: 127.135px; margin: auto"
      >
      <div class="card-body">
        <h6 class="card-text">{{item.productName}}</h6>
        <p class="card-text">{{item.productDescription}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="navigateProductDetail(item)">
              View
            </button>

            <button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="buyItem(item)">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";  

  export default Vue.extend({
    name: "CardTemplate",
    props: ["item"], // Denna lär komma från någon annan template? En db hämtning? 
    data() {
      return {
        showModal: false
      };
    },
    components: {},
    methods: {
      navigateProductDetail(product: any) {
        this.$router.push({
          name: "productDetails",
          params: { id: product._id}
        });
      },
      buyItem(product: any) {
        // Here we should link to product url. Get it from ddb.
      },
      mounted() {}
    }
  });
</script>
