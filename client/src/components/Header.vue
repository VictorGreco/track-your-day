<template>
  <div id="Header">
    <nav class="navbar">
        <img role="button" :src="menu" height="20" width="20">
        <img class="userImg" :src="userImg || genericUser" width="45" height="45" alt="">
    </nav>
  </div>
</template>

<script>
import genericUser from "@/assets/genericUser.svg";
import menu from "@/assets/menu.svg";

export default {
  name: "Header",
  data: () => {
    return {
      genericUser,
      menu
    }
  },
  props: {
    userImg: String
  }
};
</script>

<style scoped>
.userImg {
  border-radius: 50%;
  background-color: gray;
}
</style>
