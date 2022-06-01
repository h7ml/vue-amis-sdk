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
  name: 'carousel',
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
        "title": "轮播图",
        "data": {
          "carousel0": [
            "/amis/static/photo/bd3eb13533fa828b13b24500f31f4134960a5a44_81bbc2d.jpg",
            "/amis/static/photo/da6376bf988c_3360340.jpg",
            "/amis/static/photo/3893101144_bff2dc9.jpg"
          ],
          "carousel1": [
            {
              "html": "<div style=\"width: 100%; height: 300px; background: #e3e3e3; text-align: center; line-height: 300px;\">carousel data in form</div>"
            },
            {
              "image": "/amis/static/photo/bd3eb13533fa828b13b24500f31f4134960a5a44_81bbc2d.jpg"
            },
            {
              "image": "/amis/static/photo/3893101144_bff2dc9.jpg"
            }
          ]
        },
        "body": [
          {
            "type": "grid",
            "columns": [
              {
                "type": "panel",
                "title": "直接页面配置",
                "body": {
                  "type": "carousel",
                  "controlsTheme": "light",
                  "height": "300",
                  "options": [
                    {
                      "image": "/amis/static/photo/da6376bf988c_3360340.jpg"
                    },
                    {
                      "html": "<div style=\"width: 100%; height: 300px; background: #e3e3e3; text-align: center; line-height: 300px;\">carousel data</div>"
                    },
                    {
                      "image": "/amis/static/photo/3893101144_bff2dc9.jpg"
                    }
                  ]
                }
              },
              {
                "type": "panel",
                "title": "使用itemSchema配置",
                "body": {
                  "type": "carousel",
                  "name": "carousel0",
                  "controlsTheme": "dark",
                  "height": "300",
                  "itemSchema": {
                    "type": "tpl",
                    "tpl": "<div style=\"height: 100%; background-image: url(<%=data.item%>); background-position: center center; background-size: cover;\"></div>"
                  }
                }
              }
            ]
          },
          {
            "type": "grid",
            "columns": [
              {
                "type": "form",
                "title": "表单内展示",
                "sm": 6,
                "body": [
                  {
                    "type": "carousel",
                    "controlsTheme": "dark",
                    "name": "carousel1",
                    "label": "carousel",
                    "animation": "slide",
                    "height": "300"
                  }
                ]
              }
            ]
          }
        ]
      },
    }
  }
})
</script>