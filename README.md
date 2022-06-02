# vue-amis-sdk

## about
- This project is based on [vuera](https://github.com/akxcv/vuera) and mainly focuses on the encapsulation of [amis-editor](https://www.npmjs.com/package/amis-editor)
- You can edit at [this](https://vue-amis-sdk.vercel.app/). The [proxy](https://github.com/h7ml/vue-amis-sdk/blob/master/vercel.json) mode is enabled. You can copy the JSON of [amis](https://aisuda.bce.baidu.com/amis/examples/index). It supports direct rendering

<div align="center">

[![language](https://img.shields.io/github/languages/top/h7ml/vue-amis-sdk)](https://github.com/h7ml/vue-amis-sdk/search?l=css)
[![last](https://img.shields.io/github/last-commit/h7ml/vue-amis-sdk.svg)](https://github.com/h7ml/vue-amis-sdk/commits)
[![stars](https://img.shields.io/badge/Hosted-Vercel-brightgreen?style=flat&logo=Vercel)](https://amis.vercel.app/)
[![amis](https://img.shields.io/badge/amis-1.9.0-red.svg)](https://www.npmjs.com/package/amis/v/1.9.0)
[![amis-editor](https://img.shields.io/badge/amisEditor-4.1.0.20-red.svg)](https://www.npmjs.com/package/amis-editor/v/4.1.0-beta.20)

<img alt="npm" src="https://img.shields.io/npm/v/amis-editor">
<img src="https://img.shields.io/github/commit-activity/m/h7ml/vue-amis-sdk" alt="ommit-activity">
<img src="https://badgen.net/badge/package/vue-amis-sdk/blue"
alt="package" maxretrytimes="3" class="m-1 transition-all duration-1000">
<img src="https://badgen.net/npm/v/vue-amis-sdk" alt="Npm Version"
maxretrytimes="3" class="m-1 transition-all duration-1000">
<img src="https://badgen.net/npm/node/vue-amis-sdk" alt="Node Version"
maxretrytimes="3" class="m-1 transition-all duration-1000">
<br>
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

### [App.vue](https://github.com/h7ml/vue-amis-sdk/blob/master/examples/App.vue#L1)

```javascript
<template>
  <div id='app'>
    <vue-amis-sdk
      id='editorName'
      theme='cxd'
      className='is-fixed'
    :preview='isPreview'
    :isMobile='isMobile'
    @onChange='onChange'
    :value='schema'
    />
  </div>
</template>
<script>
  export default {
  name: 'App',
  data() {
  return {
  isPreview: false,
  isMobile: false,
  schema: {}
}
},
  methods: {
  onChange(e) {
  console.log(e)
}
}
}
</script>
```

### version

| [vue-amis-sdk](https://www.npmjs.com/package/vue-amis-sdk)                                                              | [amis](https://www.npmjs.com/package/amis)                                                               | [amis-editor](https://www.npmjs.com/package/amis-editor)                                                                 |
|-------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [![amis-editor](https://badgen.net/badge/vue-amis-sdk/1.10.0/blue)](https://www.npmjs.com/package/vue-amis-sdk/v/1.10.0) | [![amis](https://img.shields.io/badge/amis-1.9.0-green.svg)](https://www.npmjs.com/package/amis/v/1.9.0) | [![amis-editor](https://badgen.net/badge/vue-amis-sdk/4.1.0-beta.28/blue)](https://www.npmjs.com/package/amis-editor/v/4.1.0-beta.28) |

### repo
- [vue-amis-sdk editor](https://vue-amis-sdk.vercel.app/)
- [vue-amis-sdk repo](https://github.com/h7ml/vue-amis-sdk)
