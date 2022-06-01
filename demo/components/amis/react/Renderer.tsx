import * as React from "react";
import { render as renderAmis } from "amis";
// import getEnv from "../amisEnv";
import { EventTrack } from "../types";
// 引入toRaw ---------> devilwjp添加
import { toRaw } from "vue";

export default class AMISRendererComponent extends React.Component<
  {
    schema: any;
    amisMounted: (amisScoped) => void;
    trackerFn: (tracker: any) => void | undefined;
  },
  any
> {
  render() {
    let locale = "zh-CN";
    // const amisEnv = getEnv();

    // 请勿使用 React.StrictMode，目前还不支持
    return renderAmis(
      toRaw(this.props.schema),
      {
        // props...
        // locale: 'en-US' // 请参考「多语言」的文档
        locale,
        scopeRef: (ref: any) => this.props.amisMounted(ref), // 功能和前面 SDK 的 amisScoped 一样
      },
      {
        // ...amisEnv,
        tracker: (tracker: EventTrack, eventProps: any) => {
          console.log("eventTracker: ", tracker);
          console.log("eventProps: ", eventProps);
          if (this.props?.trackerFn) {
            this.props?.trackerFn({ tracker, eventProps });
          }
          // emit('eventTrackerEvent', { tracker, eventProps })
        },
      }
    );
  }
}
