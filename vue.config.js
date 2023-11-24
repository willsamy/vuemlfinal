const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        // Modifique as opções do vue-loader aqui
        return options;
      });

    config.module
      .rule('vue')
      .use('vue-auto-import-loader')
      .loader('vue-auto-import-loader')
      .options({
        match(originalTag, { kebabTag, camelTag, path, component }) {
          if (kebabTag.startsWith('prime-')) {
            return [camelTag, `import ${camelTag} from '${path}'`];
          }
        }
      });
  },
});
