<template>
  <q-card style="width: 550px">
    <q-bar class="bg-primary text-white">
      <q-space />
      <q-btn dense flat icon="close" v-close-popup> </q-btn>
    </q-bar>
    <q-card-section class=" flex flex-center  q-mb-md bg-primary ">
      <div class="text-h5  text-white">Add New Product</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-h6">Product Name*</div>
      <q-input dense v-model="product.product_name" outlined />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-h6">Price*</div>
      <q-input dense v-model="product.price" outlined />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-h6">Quantity*</div>
      <q-input dense v-model="product.quantity" outlined />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-h6">Description*</div>

      <q-input v-model="product.description" outlined type="textarea" />
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-h6">Condition*</div>
      <q-select outlined v-model="product.condition" :options="options" dense />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-h6">
        A Service ? <span> <q-toggle v-model="product.service"/></span>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-h6">
        Published ? <span> <q-toggle v-model="product.published"/></span>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-h6">
        In Stocked ? <span><q-toggle v-model="product.in_stock"/></span>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-h6">
        On Discount ?<span> <q-toggle v-model="product.discount"/></span>
      </div>
    </q-card-section>
    <q-card-actions class="text-primary justify-center">
      <q-btn
        style="width:150px"
        size="lg"
        no-caps
        rounded
        color="primary"
        label="Add Product"
        v-close-popup
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  data() {
    return {
      product: {
        product_name: null,
        price: null,
        quantity: null,
        description: null,
        condition: null,
        service: false,
        in_stock: false,
        published: false,
        discount: false
      },
      options: ["Good", "Best", "Normal", "Natural", "Great"]
    };
  }
};
</script>
