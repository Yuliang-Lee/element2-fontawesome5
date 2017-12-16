<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <i :class="['fas', fasIcon]"></i>
        <el-input :suffix-icon="`fas ${fasIcon}`" style="width: 200px" v-model="fasIcon">
          <template slot="prepend">fas://</template>
        </el-input>
        <span class="fas fa-spinner fa-spin"></span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <i :class="['far', farIcon]"></i>
        <el-input :suffix-icon="`far ${farIcon}`" style="width: 200px" v-model="farIcon">
          <template slot="prepend">far://</template>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button icon="fas fa-spinner fa-spin" type="primary" @click="handleChange">change</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      fasIcon: 'fa-user',
      farIcon: 'fa-user',
    }
  },
  methods: {
    handleChange() {
      this.fasIcon = 'fa-address-book'
      this.farIcon = 'fa-address-book'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-row {
  margin: 16px;
}
</style>
