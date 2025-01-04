import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // 作者信息相关
  author: {
    name: "void0720",
    url: "https://github.com/void0720",
  },
  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "https://github.com/void0720",
  // 自定义仓库链接文字。默认从 `repo` 中自动推断为
  // "GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  repoLabel: "GitHub",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  // 博客博主信息相关
  blog: {
    avatar: '/assets/images/developer.svg',
    name: 'void0720',
    description: "致力于成为一名全站工程师的咸鱼",
    intro: "/intro.html",
    medias: {
      Email: "mailto:void0720@163.com",
      Gitee: "https://gitee.com/void0720m",
      GitHub: "https://github.com/void0720",
      Gmail: "mailto:dongxb0720@gmail.com",
      个人博客: {
        icon: '<svg t="1735989766470" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40554" width="200" height="200"><path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m-229.12-443.6224c18.176-15.6416 27.264-36.1472 27.264-61.44 0-20.352-6.016-36.864-17.9456-49.6128-11.9808-12.7232-27.9296-20.224-47.872-22.5792v-0.8192c15.9744-5.2224 28.4672-14.0032 37.5552-26.3936 9.0624-12.3648 13.5936-26.9312 13.5936-43.7248 0-20.0704-7.4752-36.352-22.4768-48.896-15.0016-12.544-35.2512-18.7648-60.8256-18.7648H128.0256V603.904h86.1952c27.648 0 50.5344-7.8336 68.6848-23.5264z m-120.2176-240.896H202.496c37.8112 0 56.704 14.3872 56.704 43.1104 0 16.64-5.4272 29.5168-16.2816 38.656-10.8544 9.1648-25.7792 13.7216-44.7488 13.7216H162.6624v-95.488z m0 126.6432H202.496c47.5648 0 71.3472 17.4848 71.3472 52.3776 0 16.7936-5.6064 29.9776-16.7936 39.6032-11.2384 9.6256-26.9824 14.4384-47.36 14.4384H162.688v-106.4192z m202.9568-158.592V603.904h33.792V307.5328h-33.792z m267.1872 266.368c19.0208-20.2752 28.5696-47.2576 28.5696-80.9216 0-34.4064-8.8576-61.2864-26.496-80.64-17.6896-19.4048-42.24-29.0816-73.728-29.0816-33.024 0-59.2128 9.984-78.592 29.9008-19.3792 19.968-29.0816 47.6416-29.0816 83.1232 0 32.5632 9.3184 58.752 27.9552 78.464 18.6112 19.712 43.5456 29.5936 74.752 29.5936 32.0256 0 57.5744-10.1632 76.6208-30.4384z m-144.6912-78.8992c0-25.984 6.3232-46.3616 18.9696-61.1328 12.6464-14.7968 29.824-22.1952 51.5584-22.1952 21.8624 0 38.6816 7.168 50.432 21.4528 11.776 14.3104 17.6384 34.6624 17.6384 61.056 0 26.112-5.888 46.2592-17.664 60.416-11.7248 14.1568-28.544 21.248-50.4064 21.248-21.4528 0-38.5792-7.1936-51.3536-21.632-12.8-14.464-19.1744-34.176-19.1744-59.2128z m407.5264 87.4496v-194.2528h-33.8176v29.2608h-0.8192c-13.7728-22.8096-34.8672-34.2272-63.3344-34.2272-29.952 0-53.5808 10.5984-70.8352 31.744-17.2544 21.1968-25.856 49.7152-25.856 85.6064 0 31.616 7.9872 56.832 24.0128 75.5968 16.0256 18.7648 37.1712 28.16 63.4112 28.16 32.3328 0 56.5248-13.4912 72.6272-40.448h0.8192v23.1168c0 21.6576-3.9936 39.0656-12.0064 52.224l-17.0752 18.0736-0.7424 0.512c-5.3504 3.3024-43.1872 24.4992-97.3824-0.4096-58.5728-26.9568-141.8752-29.184-162.4064 41.3952l24.1664 18.5856s0-33.2032 37.4272-46.4896c27.8016-9.856 58.0608 2.6112 81.9968 12.8768v0.128c6.912 3.5072 14.1824 6.3744 21.8624 8.6272l0.384 0.1024a168.448 168.448 0 0 0 46.2336 6.144c74.2144 0 111.3344-38.784 111.3344-116.3264z m-51.6608-26.8032c-11.904 13.4656-27.3408 20.224-46.3104 20.224-18.688 0-33.7152-7.0656-45.056-21.1712-11.3408-14.08-17.024-32.8704-17.024-56.3968 0-27.3664 5.888-48.64 17.7408-63.8208 11.8272-15.1808 28.16-22.784 49.0752-22.784 16.9216 0 31.0272 5.9648 42.3936 17.92a60.416 60.416 0 0 1 17.024 43.1104v31.1552c0 21.0176-5.9648 38.272-17.8432 51.7632z" fill="#62AFFE" p-id="40555"></path></svg>',
        link: "#",
      },
    },
  },
  // 配置深色模式，可选值为：
  // "switch": 在深色模式，浅色模式和自动之间切换 (默认)
  // "toggle": 在深色模式和浅色模式之间切换
  // "auto": 自动根据用户设备主题或当前时间决定是否应用深色模式
  // "enable": 强制深色模式
  // "disable": 禁用深色模式
  darkmode: "toggle",
  // 全局设置图标资源
  iconAssets: "fontawesome-with-brands",
  // 桌面模式的目录下会有一个打印按钮，如果要关闭，则设置为false
  print: false,
  // 全屏按钮
  fullscreen: false,
  // 专注模式
  focus: true,
  // 纯净模式,在这个模式下，我们会禁用一些花哨的动画以及一些色彩，只提供功能
  pure: false,
  // 配置站点浅色模式的图标，请填入绝对路径
  logo: "/assets/icon/logo_light.svg",
  // 配置站点深色模式的图标，请填入绝对路径
  logoDark: "/assets/icon/logo_dark.svg",
  // 文档在仓库中的目录
  docsDir: "src",
  // 关闭编辑功能
  editLink: false,
  // 导航栏
  navbar,
  // 侧边栏
  sidebar,
  // 页脚
  footer: "void0720 | 代码改变世界，技术成就未来。 | 记录每一个技术成果背后的故事。",
  // 是否默认显示页脚
  displayFooter: true,
  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    // 回到顶部按钮
    backToTop: true,
    blog: true,
    components: {
      components: ["Badge", "VPCard"],
    },
    // 显示搜索
    slimsearch: false
  },
});
