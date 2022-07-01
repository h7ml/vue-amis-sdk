import VueAmisSdk from "./src/VueAmisSdk.vue";
VueAmisSdk.install = function (Vue) {
  Vue.component(VueAmisSdk.name, VueAmisSdk);
};

export default VueAmisSdk;
