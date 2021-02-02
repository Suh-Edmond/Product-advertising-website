<template>
  <q-page>
    <div class="row q-mx-lg q-mt-lg">
      <div class="col-12 col-md-12 col-lg-12 justify-start">
        <q-btn flat color="primary" icon="arrow_back_ios" @click="goBack()" />
      </div>
    </div>
    <div class="row">
      <div class="col-3 col-md-3 col-sm-3 col-lg-3"></div>
      <div class="col-6 col-md-6 col-sm-12 col-lg-6 col-xs-12">
        <q-card class="my-card" v-for="(detail, index) in details" :key="index">
          <q-card-section>
            <div class="text-h6">Product Name : {{ detail.product_name }}</div>
            <div class="text-subtitle1">Price : {{ detail.price }} CFA</div>
            <div class="text-subtitle1">Quantity: {{ detail.quantity }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-h6">
              <q-item-label>Description</q-item-label>
            </div>
            {{ detail.description }}
          </q-card-section>
          <q-card-section>
            <q-expansion-item expand-separator label="See More">
              <q-card class="text-sm-h6">
                <q-card-section>
                  <div class="q-pb-md">
                    <q-item-label v-if="detail.discount == true"
                      >Product on discount</q-item-label
                    >
                    <q-item-label v-else>Product not on discount</q-item-label>
                  </div>
                  <div class="q-pb-md">
                    <q-item-label v-if="detail.service == true"
                      >A service</q-item-label
                    >
                    <q-item-label v-else>Not a Service</q-item-label>
                  </div>
                  <div class="q-pb-md">
                    <q-item-label v-if="detail.in_stock == true"
                      >Product in Stocked</q-item-label
                    >
                    <q-item-label v-else>Product not in Stocked</q-item-label>
                  </div>
                  <div class="q-pb-md">
                    <q-item-label v-if="detail.published == true"
                      >Published</q-item-label
                    >
                    <q-item-label v-else>Not Published</q-item-label>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      filter: "",
      product_id: this.$route.params.id
    };
  },
  computed: {
    products() {
      return this.$store.getters["products/products"];
    },
    details() {
      var id;
      var object = [];
      for (id in this.products) {
        if (id === this.product_id) {
          object.push(this.products[id]);
        }
      }
      return object;
    }
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.desc {
  font-weight: 100px;
}
</style>
