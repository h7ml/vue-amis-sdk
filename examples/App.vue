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