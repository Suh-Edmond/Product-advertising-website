<template>
  <q-page>
    <div class="row">
      <div class="col-3 col-md-3 col-sm-3 col-lg-3"></div>
      <div class="col-6 col-md-6 col-sm-12 col-lg-6 col-xs-12 q-pt-lg">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6">Product Name</div>
            <div class="text-subtitle1">Price CFA</div>
            <div class="text-subtitle1">Quantity</div>
          </q-card-section>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
            dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
          <q-card-section>
            <q-expansion-item expand-separator label="See More">
              <q-card>
                <q-card-section>Discount</q-card-section>
                <q-card-section>Service</q-card-section>
                <q-card-section>Instock</q-card-section>
                <q-card-section>Published</q-card-section>
              </q-card>
            </q-expansion-item>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-3 col-md-3 col-sm-3 col-lg-3">
        <q-btn label="click" @click="showId()"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      filter: ""
    };
  },
  computed: {
    products() {
      return this.$store.getters["products/products"];
    }
  },
  methods: {
    showId() {
      console.log(this.products);
    }
  }
};
</script>

<style scoped></style>
