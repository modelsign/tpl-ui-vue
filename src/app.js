Vue.config.debug = true;

new Vue(
    {
      el        : '#app',
      components: {},
      data () {
        return {
          color : '#5dc596',
          size  : '15px',
          margin: '2px',
          radius: '100%'
        };
      }
    }
);
