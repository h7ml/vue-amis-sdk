# vue-amis-sdk

<div align="center">

[![version](https://img.shields.io/npm/v/vue-amis-sdk/latest)](https://github.com/h7ml/vue-amis-sdk/blob/master/package.json#L36)
[![language](https://img.shields.io/github/languages/top/h7ml/vue-amis-sdk)](https://github.com/h7ml/vue-amis-sdk/search?l=css)
[![last](https://img.shields.io/github/last-commit/h7ml/vue-amis-sdk.svg)](https://github.com/h7ml/vue-amis-sdk/commits)
[![stars](https://img.shields.io/badge/Hosted-Vercel-brightgreen?style=flat&logo=Vercel)](https://amis.vercel.app/)

<img src="https://img.shields.io/github/commit-activity/m/h7ml/vue-amis-sdk" alt="ommit-activity">
<img src="https://badgen.net/badge/package/%40dgiot%2Fdgiot-mqtt-dashboard/blue"
alt="package" maxretrytimes="3" class="m-1 transition-all duration-1000">
<img src="https://badgen.net/npm/v/vue-amis-sdk" alt="Npm Version"
maxretrytimes="3" class="m-1 transition-all duration-1000">
<img src="https://badgen.net/npm/node/vue-amis-sdk" alt="Node Version"
maxretrytimes="3" class="m-1 transition-all duration-1000">
<br>
<img src="https://badgen.net/jsdelivr/hits/npm/vue-amis-sdk"
alt="Jsdeliver Month Downloads" maxretrytimes="3" class="m-1 transition-all duration-1000">
<img src="https://badgen.net/packagephobia/install/vue-amis-sdk"
alt="Install Size" maxretrytimes="3" class="m-1 transition-all duration-1000">
<img src="https://badgen.net/npm/types/vue-amis-sdk" alt="Type Support"
maxretrytimes="3" class="m-1 transition-all duration-1000">
<br>
<img src="https://img.shields.io/librariesio/release/npm/vue-amis-sdk"
alt="Outdated Dep" maxretrytimes="3" class="m-1 transition-all duration-1000">
<img src="https://img.shields.io/snyk/vulnerabilities/npm/vue-amis-sdk"
alt="Vulnerablities" maxretrytimes="3" class="m-1 transition-all duration-1000">
<a href="https://www.npmjs.com/package/vue-amis-sdk"><img src="https://img.shields.io/npm/l/vue-amis-sdk" alt="License"></a>

</div>

## Installation

```bash
yarn add vue-amis-sdk --save
```

## Quick Start

### [Serve.vue](https://github.com/h7ml/vue-amis-sdk/blob/master/dev/serve.vue)

```javascript
<template>
  <div id="app">
    <vue-amis-sdk id="editorName" theme="cxd" className="is-fixed" :preview="isPreview" :isMobile="isMobile" @onChange="onChange" :value="schema"  />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      isPreview:false,
      isMobile:false,
      post: {
        json: '',
        amis_page_id: 15,
      },
      baseURL: 'https://h7ml.cn',

      schema: {},
    }
  },
  onLoad() {
    
  },
  methods: {
    onChange(e) {
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```


### Online examples

- [amis-admin-vue Online examples](amis-admin-vue.vercel.app/index)
- [amis-admin-vue repo](https://github.com/h7ml/amis-admin-vue/tree/master)
