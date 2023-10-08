//小仓库:关于layout组件相关配置仓库
import { defineStore } from 'pinia'

const useLayoutSettingStore = defineStore('settingStore', {
  state: () => {
    return {
      fold: false, //用户控制菜单折叠还是收起控制
    }
  },
})

export default useLayoutSettingStore
