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
import "amis-ui/lib/themes/cxd.css";
import "amis-ui/lib/themes/ang.css";
import "amis-editor/dist/style.css";
// import "amis-ui/lib/helper.css";
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
