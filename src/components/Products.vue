<template>
  <q-page class="q-mt-xl" :class="$q.screen.xs ? 'q-mx-sm' : 'q-mx-md'">
    <div :class="$q.screen.md ? 'q-mx-md' : ''">
      <q-table
        :data="products"
        :columns="columns"
        row-key="name"
        table-style="overflow-y:hidden"
        table-class="content"
        :filter="filter"
        dense
      >
        <!-- slot for columns names -->
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <!-- slot for edit and delete actions -->
        <template v-slot:body-cell-action1="props">
          <q-td :props="props">
            <q-btn
              color="secondary"
              icon-right="info"
              no-caps
              flat
              dense
              to="/home/user/products/props.id"
            >
            </q-btn>
          </q-td>
        </template>
        <template v-slot:body-cell-action2="props">
          <q-td :props="props">
            <q-btn
              color="primary"
              icon-right="edit"
              no-caps
              flat
              dense
              @click="editProduct(props.row)"
            >
            </q-btn>
          </q-td>
        </template>
        <template v-slot:body-cell-action3="props">
          <q-td :props="props">
            <q-btn
              color="negative"
              icon-right="delete"
              no-caps
              flat
              dense
              @click="deleteProduct(props.row)"
            >
            </q-btn>
          </q-td>
        </template>
        <!-- //slot for edit and delete actions -->
        <template v-slot:top-right>
          <div class="row q-mt-sm">
            <q-input
              outlined
              dense
              debounce="300"
              placeholder="Search"
              v-model="filter"
              color="primary"
              :class="$q.screen.xs ? 'full-width' : ''"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <!-- slot for edit product details -->
          <div>
            <q-dialog v-model="show_dialog_edit" persistent>
              <FormEdit> </FormEdit>
            </q-dialog>
          </div>
          <div>
            <q-dialog v-model="show_dialog_delete">
              <q-card class="my-card">
                <q-card-section class="row items-center">
                  <div>
                    <q-item-label class="q-ml-sm text-h5 text-weight-bold"
                      >Do you want to delete this Product</q-item-label
                    >
                  </div>
                </q-card-section>
                <q-card-section>
                  <q-item-label class="text-weight-bold text-h6 q-ml-md">
                    <span>"{{ product.product_name }}"</span></q-item-label
                  >
                </q-card-section>
                <q-card-actions align="right">
                  <q-btn
                    label="Cancel"
                    size="sm"
                    no-caps
                    color="primary"
                    v-close-popup
                  />
                  <q-btn
                    label="Delete"
                    size="sm"
                    no-caps
                    color="negative"
                    v-close-popup
                  />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </div>
        </template>
        <template v-slot:top-left>
          <q-item-label
            class="text-h4 text-weight-bold"
            style="font-family:Times"
            >Our Products</q-item-label
          >
        </template>
      </q-table>
    </div>
    <div class="row justify-start q-ml-md q-mt-xl">
      <div class="col-12 col-md-12">
        <q-btn
          round
          color="primary"
          @click="prompt = true"
          icon="add"
          size="lg"
        />
      </div>
    </div>
    <q-dialog v-model="prompt" persistent>
      <Form></Form>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      filter: null,
      prompt: false,
      show_dialog_edit: false, //attribute to controll edit popup component
      show_dialog_delete: false, //attribute to controll delete popup component
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
      editedIndex: -1,
      columns: [
        {
          name: "id",
          required: true,
          label: "S/N",
          align: "left",
          field: "id",
          format: val => `${val}`,
          sortable: true
        },
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
        {
          name: "action1",
          label: " ",
          field: "action1",
          headerStyle: "font-size: 15px; font-weight:bolder"
        },
        {
          name: "action2",
          label: "",
          field: "action2",
          headerStyle: "font-size: 15px; font-weight:bolder"
        },
        {
          name: "action3",
          label: " ",
          field: "action3",
          headerStyle: "font-size: 15px; font-weight:bolder"
        }
      ]
    };
  },

  methods: {
    //edit a selected item
    editProduct(product) {
      this.editedIndex = this.products.indexOf(product);
      this.product = Object.assign({}, product);
      console.log(this.product);
      this.show_dialog_edit = true;
    },
    submitEdit() {
      // this function has to work out the edit operationn
      if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.product);
      }
      this.closeEdit();
      console.log(this.product);
    },
    //this function closes the popup edit component
    closeEdit() {
      this.show_dialog_edit = false;
    },
    //this function closes the delete popup component
    closeDelete() {
      this.show_dialog_delete = false;
    },
    //delete a selected item
    deleteProduct(product) {
      // const index = this.data.indexOf(product);
      this.show_dialog_delete = true;
      // this.data.splice(index, 1); the delete linecode
    },

    addFields() {
      //console.log(this.totalFormNumber)
      this.pharmacyproduct.push({
        openingDays: null,
        startTime: null,
        closeTime: null
      });
      if (this.totalFormNumber != 7) {
        this.totalFormNumber = this.totalFormNumber + 1;
      }
    },

    Submit() {
      //this.$store.dispatch("AddPharmacyproduct", this.Pharmacyproduct).then(res => {
      console.log(this.pharmacyproduct);
      // })
    }
  },
  components: {
    Form: require("components/Form.vue").default,
    FormEdit: require("components/FormEdit.vue").default
  }
};
</script>
<style>
.my-card1 {
  width: 350px;
}
.my-card {
  width: 300px;

  /* width: 100%;
  max-width: 800px;
 
  width: 800px;
 
  width: 300px;
 
  width: 300px; */
}
</style>
