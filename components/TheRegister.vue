<script setup lang="ts">
const test = ref();
const register = async () => {
  const url = ``;
  const data = await fetch(url);
  console.log(test);
};
</script>
<template>
  <div class="flex justify-center items-center" >
    <form @submit.prevent="register" class="w-full max-w-sm">
      <div class="mb-6">
        <label
          for="phone"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Phone Number</label
        >
        <div
          class="rounded-md w-full h-10 bg-gray-200 sm:text-sm flex border border-slate-200"
        >
          <div
            class="flex text-center h-full items-center justify-center pl-2 pr-1"
          >
            +254
          </div>
          <input
            type="tel"
            placeholder="7000000"
            name="phone"
            pattern="[1-9]{1}[0-9]{1}[0-9]{3}[0-9]{4}"
            id="phone"
            class="appearance-none px-1 text-slate-900 w-full h-full rounded-r-md bg-white block focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A]"
            required
          />
        </div>
      </div>
    </form>
  </div>
</template>
