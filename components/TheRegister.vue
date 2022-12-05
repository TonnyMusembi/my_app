<script setup lang="ts">
const test = ref();
const register = async () => {
  console.log(test);
};
</script>
<template>
  <div class="container fjustify-center items-center h-screen">
    <form @submit.prevent="register">
      <div class="mb-6">
        <label for="phone">phone number</label>
      </div>
    </form>
  </div>
</template>
