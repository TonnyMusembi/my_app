<script setup lang="ts">
import { fetch } from "ofetch";

const pending = ref();
const test = ref();
// const products = ref();
const login = () => {
  console.log(test);
};

const update = async () => {
  console.log(test);
  const option = {
    // method: "GET",
    // url: "https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode",
    params: { zip: "94111" },
    headers: {
      "X-RapidAPI-Key": "68a17b08dbmshe68484fe4f7905bp16ece9jsn2069f40c2728",
      "X-RapidAPI-Host": "us-weather-by-zip-code.p.rapidapi.com",
    },
  };

  const data = await fetch(
    `https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode`,
    option
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};

// update();
const headers = {
  headers: {
    "X-RapidAPI-Key": "68a17b08dbmshe68484fe4f7905bp16ece9jsn2069f40c2728",
    "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  },
};
const url = `https://api-football-beta.p.rapidapi.com/timezone`;
const products = useFetch(url, headers)

  .then((res) => {
    console.log(res.data);
  })
  // const data = await res.json();
  .catch((er) => {
    console.log(er);
  });
console.log(products);
const ul = `jfjf`;
const reset = async () => {
  const res = await fetch(ul)
    .then((res) => {
      console.log(res)
    })
    .catch((er) => {
      console.log(er)
    })


}


</script>
<template>
  <div class="flex justify-center items-center h-screen">
    <form @submit.prevent="update" class="w-full max-w-sm">
      <div class="mb-6">
        <label for="phone" class="block text-sm font-semibold leading-6 text-gray-900">Phone Number</label>
        <div class="rounded-md w-full h-10 bg-gray-200 sm:text-sm flex border border-slate-200">
          <div class="flex text-center h-full items-center justify-center pl-2 pr-1">
            +254
          </div>
          <input type="tel" placeholder="7000000" name="phone" pattern="[1-9]{1}[0-9]{1}[0-9]{3}[0-9]{4}" id="phone"
            class="appearance-none px-1 text-slate-900 w-full h-full rounded-r-md bg-white block focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A]"
            required />
        </div>
      </div>
      <div class="mb-6">
        <label for="password" class="block text-sm font-semibold leading-6 text-gray-900">Password</label><input
          type="password" name="password" placeholder="******************" id="password"
          class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
          aria-required required minlength="6" />
      </div>
      <button type="submit"
        class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-[#37899A] hover:text-sky-50/80 hover:bg-green-500 w-full">
        <Spin v-if="pending" />
        <span v-else>Login</span>
      </button>
      <p class="mt-6 text-center">
        <a href="/password/reset" class="text-sm hover:underline">Forgot password?</a>
      </p>
    </form>
  </div>
  <div class="mb-6 flex justify-center">
    <button class="bg-cyan-500 hover:bg-cyan-400 text-white rounded px-5 py-2">
      Next Page
    </button>
  </div>
</template>
