<template>
  <div class="login">
    <div class="form">
      <div class="login-form">
        <span class="material-icons">lock</span>
        <input type="text" placeholder="name" v-model="name" />
        <input type="text" placeholder="family" v-model="family" />
        <button @click="saveItem">login</button>
      </div>
    </div>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      name: "",
      family: "",
    };
  },
  methods: {
    saveItem() {
      let name = this.name;
      let family = this.family;
      this.items.push(name + " " + family);
      // this.name = "";
    },
    deleteItem(id) {
      this.items.splice(id);
    },
  },
};
</script>

<style>
.login {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
  font-family: "Comfortaa", cursive;
}

.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  border-radius: 10px;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
}

.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  border-radius: 5px;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: "Comfortaa", cursive;
}

.form input:focus {
  background: #dbdbdb;
}

.form button {
  font-family: "Comfortaa", cursive;
  text-transform: uppercase;
  outline: 0;
  background: #4b6cb7;
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.form button:active {
  background: #395591;
}

.form span {
  font-size: 75px;
  color: #4b6cb7;
}
</style>
