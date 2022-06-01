<template>
  <div className="amis-renderer-box">
    <AMIS ref="amisRender" :schema="amisjson" :trackerFn="eventTrackerEvent" :amisMounted="amisMounted" />
  </div>

</template>
<script lang="ts" >
// import './style/themes/cxd.less'
import 'amis/lib/themes/cxd.css';

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/css/v4-shims.css'
// import { applyReactInVue } from 'veaury'
import { lazyReactInVue } from 'veaury'
// 这是一个React组件
// import AMISRendererComponent from './react/Renderer.tsx'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Index',
  components: {
    // 使用高阶组件 'applyReactInVue'
    // AMIS: applyReactInVue(AMISRendererComponent)
    AMIS: lazyReactInVue(() => import('./react/Renderer.tsx'))

  },
  props: {
    // amisjson: {
    //   type: Object,
    //   required: true,
    // },
  },
  emits: ['amisMounted', 'eventTrackerEvent'],
  setup(props, { emit }) {

    function amisMounted(amisScoped) {
      emit("amisMounted", amisScoped)
    }
    function eventTrackerEvent(params: TrackerEventArgs) {
      emit("eventTrackerEvent", params)
    }
    return {
      amisMounted,
      eventTrackerEvent,
      amisjson:{
        "type": "page",
        "title": "修改 ${params.id}",
        "remark": null,
        "toolbar": [
          {
            "type": "button",
            "actionType": "link",
            "link": "/crud/list",
            "label": "返回列表"
          }
        ],
        "body": [
          {
            "type": "form",
            "initApi": "/api/sample/${params.id}",
            "api": "/api/sample/$id",
            "redirect": "/crud/list",
            "controls": [
              {
                "type": "text",
                "name": "engine",
                "label": "Engine",
                "required": true
              },
              {
                "type": "divider"
              },
              {
                "type": "text",
                "name": "browser",
                "label": "Browser",
                "required": true
              },
              {
                "type": "divider"
              },
              {
                "type": "text",
                "name": "platform",
                "label": "Platform(s)",
                "required": true
              },
              {
                "type": "divider"
              },
              {
                "type": "text",
                "name": "version",
                "label": "Engine version"
              },
              {
                "type": "divider"
              },
              {
                "type": "select",
                "name": "grade",
                "label": "CSS grade",
                "options": ["A", "B", "C", "D", "X"]
              }
            ]
          }
        ]
      },
    }
  }
})
</script>