 

<script>
export default {
  props: ["product", "id"],
  data() {
    return {
      filter: null,
      prompt: false
    };
  },
  
  methods: {
     
    
    //delete a selected item
    deleteProduct(id) {
      this.$q
        .dialog({
          message: "Do you want to delete this product?",
          cancel: true,
          persistent: true,
          size: "40px"
        })
        .onOk(() => {
          this.$store.dispatch("products/delete", id);
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        });
    }
  },
  components: {
    FormEdit: require("components/FormEdit").default
  }
};
 
