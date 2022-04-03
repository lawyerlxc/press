# Hello VuePress

[个人页面](./user.md)

VuePress 2 已经发布 :tada: ！

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: '你好， VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>
这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />
![VuePress Logo](/images/hero.png)