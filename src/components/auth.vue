<template>
  <q-form @submit="submitForm">
    <q-input
      v-if="tabs === 'Register'"
      outlined
      v-model="user.username"
      label="Username"
      dense
      lazy-rules
      :rules="[val => (val && val.length > 0) || 'Please enter your name']"
    />
    <q-input
      outlined
      v-model="user.email"
      label="Email"
      dense
      type="email"
      lazy-rules
      :rules="[val => (val && val.length > 0) || 'Please enter your email']"
    />
    <q-input
      v-if="tabs == 'Register'"
      outlined
      v-model="user.telephone"
      label="Telephone"
      dense
      lazy-rules
      :rules="[val => (val && val.length > 0) || 'Please enter your telephne']"
    />
    <q-input
      outlined
      v-model="user.password"
      label="Password"
      dense
      type="password"
      lazy-rules
      :rules="[val => (val && val.length > 0) || 'Please enter your email']"
    />

    <div class="row">
      <q-space />
      <q-btn
        type="submit"
        color="primary"
        :label="tabs"
        no-caps
        style="width: 110px"
      />
    </div>
  </q-form>
</template>

<script>
export default {
  props: ["tabs"],
  data() {
    return {
      user: {
        name: null,
        email: null,
        telephone: null,
        password: null
      }
    };
  },
  methods: {
    submitForm() {
      if (this.tabs == "Register") {
        // this.$store.dispatch("products/registerUser", this.user).then()
      } else {
      }
    }
  }
};
</script>
