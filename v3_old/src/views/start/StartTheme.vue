<template>
  <div>
    <h2>{{ $t('app.aside.nav.theme') }}</h2>
    <p class="tip"> 默认支持 light 和 dark 两种主题样式，通过调用 VXETable.setTheme('light') 方式修改组件主题样式</p>
    <pre>
      <pre-code class="javascript">
        import { VXETable } from 'vxe-table'

        // 切换为默认主题
        // VXETable.setTheme('light')

        // 切换为暗黑主题
        VXETable.setTheme('dark')
      </pre-code>
    </pre>

    <p class="tip">通过修复 css 变量（<a href="https://gitee.com/x-extends/vxe-table/blob/main/styles/theme/light.scss" status="primary">全量变量</a>）方式修改组件主题样式，给 html 加个 class="my-theme"，示例：</p>
    <pre>
      <pre-code class="css">
        html.my-theme {
          // 主题色
          --vxe-ui-font-primary-color: #44bf16;
        }
      </pre-code>
    </pre>
  </div>
</template>
