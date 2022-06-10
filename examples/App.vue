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
import "amis/lib/themes/cxd.css";
import "amis/lib/themes/ang.css";
import "amis/lib/helper.css";
import "amis/sdk/sdk.css";
import "amis-editor/dist/style.css";
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
