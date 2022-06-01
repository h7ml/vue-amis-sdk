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
  name: 'task',
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
      "title": "异步任务",
        "body": [
        "<p class=\"text-danger\"></p>",
        {
          "type": "tasks",
          "name": "tasks",
          "items": [
            {
              "label": "hive 任务",
              "key": "hive",
              "status": 4,
              "remark": "查看详情<a target=\"_blank\" href=\"http://www.baidu.com\">日志</a>。"
            },
            {
              "label": "小流量",
              "key": "partial",
              "status": 4
            },
            {
              "label": "全量",
              "key": "full",
              "status": 4
            }
          ]
        },
        {
          "type": "tasks",
          "name": "tasks",
          "className": "b-a bg-white table-responsive m-t",
          "checkApi": "/amis/api/mock2/task"
        }
      ]
    },
    }
  }
})
</script>