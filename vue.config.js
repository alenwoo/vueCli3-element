module.exports = {
  //  选项...
  baseUrl: './',  // 配置基本url
  indexPath:'index.html',
  pages: {
    index: {
      // page 的入口
      entry: 'src/pages/index/index.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    compere: {
      // page 的入口
      entry: 'src/pages/compere/compere.js',
      // 模板来源
      template: 'public/compere.html',
      // 在 dist/index.html 的输出
      filename: 'compere.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'compere Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    player: {
      // page 的入口
      entry: 'src/pages/player/player.js',
      // 模板来源
      template: 'public/player.html',
      // 在 dist/index.html 的输出
      filename: 'player.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'player Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    spectator: {
      // page 的入口
      entry: 'src/pages/spectator/spectator.js',
      // 模板来源
      template: 'public/spectator.html',
      // 在 dist/index.html 的输出
      filename: 'spectator.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'spectator Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    //  subpage: 'src/subpage/main.js'
  }
}