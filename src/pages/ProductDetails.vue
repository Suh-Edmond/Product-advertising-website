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
      <div class="col-3 col-md-3 col-sm-3 col-lg-3"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      filter: "",
      columns: [
        {
          name: "product_name",
          required: true,
          label: "Product Name",
          align: "left",
          field: "product_name",
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "price",
          align: "center",
          label: "Price",
          field: "price",
          sortable: true
        },
        {
          name: "quantity",
          label: "Quantity",
          field: "quantity",
          sortable: true
        },
        { name: "description", label: "Description", field: "description" },
        { name: "condition", label: "Condition", field: "condition" },
        { name: "discount", label: "On Discount?", field: "discount" },
        { name: "service", label: "A Service?", field: "service" },
        { name: "in_stock", label: "In Stocked?", field: "in_stock" }
      ]
    };
  }
};
</script>

<style scoped></style>
