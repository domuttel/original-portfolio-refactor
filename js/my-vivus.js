     var dominic = new Vivus('scribble', {
        type: 'delayed', //mapping
        pathTimingFunction: Vivus.EASE_OUT_BOUNCE,
        duration: 150,
        delay: 1,
        start: 'autostart',
        dashGap: 5,
        forceRender: false},

        function () {
          if (window.console) {
            console.log('Animation finished. [log triggered from callback]');
          }
        });