<template>
  <div>
    <amis-editor
      id="editorName"
      :theme="theme"
      :className="className"
      :preview="isPreview"
      :isMobile="isMobile"
      @onChange="onChange"
      @onPreview="onPreview"
      @onSave="onSave"
      :value="schema"
      :plugins="plugins"
      :showCustomRenderersPanel="showCustomRenderersPanel"
    />
  </div>
</template>
<script>
// import "amis/lib/themes/cxd.css";
// import "amis/lib/themes/ang.css";
// import "amis/lib/helper.css";
// import "amis/sdk/sdk.css";
// import "amis-editor/dist/style.css";

import { Editor } from "amis-editor";
import { ReactInVue } from "vuera";
export default {
  name: "VueAmisSdk",
  components: {
    AmisEditor: ReactInVue(Editor),
    // Editor
  },
  props: {
    isPreview: {
      type: Boolean,
      default: false,
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
    showCustomRenderersPanel: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "ang",
    },
    className: {
      type: String,
      default: "ang",
    },
    value: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      schema: {},
    };
  },
  mounted() {
    this.schema = this.value;
  },
  methods: {
    setSchema(obj) {
      this.schema = obj;
    },
    getSchema() {
      return this.schema;
    },
    onChange(e) {
      this.schema = e;
      this.$emit("change", e);
    },
    onSave(e) {
      console.log(e)
      this.$emit("onSave", e);
    },
    onPreview(e) {
      console.log(e)
      this.$emit("onPreview", e);
    },
  },
};
</script>
