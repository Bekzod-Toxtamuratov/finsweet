<script setup>
import { reactive } from "vue";

const myData = reactive([
  {
    img: "/images/11.png",
    data: "27 Jan 2021",
    parag:
      "How one Webflow user grew his single personconsultancy from $0-100in 14 months",
    dataParag:
      "See how pivoting to Webflow changed one person’s sales strategy andallowed him to attract",
    readMore: "Read More",
    icon: "/images/Arrow3.png",
  },
  {
    img: "/images/12.png",
    data: "27 Jan 2021",
    parag:
      "How one Webflow user grew his single personconsultancy from $0-100in 14 months",
    dataParag:
      "See how pivoting to Webflow changed one person’s sales strategy andallowed him to attract",
    readMore: "Read More",
    icon: "/images/Arrow3.png",
  },
  {
    img: "/images/13.png",
    data: "27 Jan 2021",
    parag:
      "How one Webflow user grew his single personconsultancy from $0-100in 14 months",
    dataParag:
      "See how pivoting to Webflow changed one person’s sales strategy andallowed him to attract",
    readMore: "Read More",
    icon: "/images/Arrow3.png",
  },
  {
    img: "/images/14.png",
    data: "27 Jan 2021",
    parag:
      "How one Webflow user grew his single personconsultancy from $0-100in 14 months",
    dataParag:
      "See how pivoting to Webflow changed one person’s sales strategy andallowed him to attract",
    readMore: "Read More",
    icon: "/images/Arrow3.png",
  },
  {
    img: "/images/15.png",
    data: "27 Jan 2021",
    parag:
      "How one Webflow user grew his single personconsultancy from $0-100in 14 months",
    dataParag:
      "See how pivoting to Webflow changed one person’s sales strategy andallowed him to attract",
    readMore: "Read More",
    icon: "/images/Arrow3.png",
  },
  {
    img: "/images/16.png",
    data: "27 Jan 2021",
    parag:
      "How one Webflow user grew his single personconsultancy from $0-100in 14 months",
    dataParag:
      "See how pivoting to Webflow changed one person’s sales strategy andallowed him to attract",
    readMore: "Read More",
    icon: "/images/Arrow3.png",
  },
]);
</script>

<template>
  <div class="container">
    <div class="pt-[100px]  md:pt-[220px]">
      <h2
        class="mb-[16px] font-bold text-[30px] max-w-[480px] leading-[35px] md:text-[48px] md:leading-[64px] text-center md:max-w-[800px] mx-auto"
      >
        A UX Case Study on Creating a Studious Environment for Students
      </h2>
      <p class="leading-[28px] text-[16px] font-medium text-center mb-[32px]">
        Andrew Jonson Posted on 27th January 2021
      </p>
      <img
        class="mb-[48px]"
        src="/images/people-working-in-front-of-computer-3182763.png"
      />

      <p
        class="max-md:text-sm mb-[16px] max-w-[470px] max-md:leading-6 md:max-w-[730px] mx-auto text-center leading-7 text-[16px] font-normal"
      >
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the stars had ceased to twinkle. By the same
        illusion which lifts the horizon of the sea to the level of the
        spectator on a hillside.
      </p>
      <p
        class="text-[#2405F2] leading-7 text-[16px] font-normal text-center mb-[128px]"
      >
        Read more
      </p>
    </div>
    <div>
      <h2
        class="text-[30px] md:text-[48px] font-bold text-[#282938] text-center mb-[48px]"
      >
        Our Blog
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[64px] mb-[128px] justify-center items-center"
      >
        <div
          v-for="(item, index) in myData"
          :key="index"
          class="p-4 max-w-sm mx-auto"
        >
          <img :src="item.img" class="w-full" />
          <p class="text-base mt-[32px] mb-[16px]">
            {{ item.data }}
          </p>
          <h6 class="text-2xl font-normal max-w-[404px] mb-[16px]">
            {{ item.parag }}
          </h6>
          <p class="font-normal text-base max-w-[404px] mb-[24px]">
            {{ item.dataParag }}
          </p>
          <div class="flex gap-6 items-center">
            <p>{{ item.readMore }}</p>
            <img class="w-[24px] h-[18px]" :src="item.icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
