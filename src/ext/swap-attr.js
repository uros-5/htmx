(function() {
  htmx.defineExtension('swap-attr', {
    onEvent: function(name, evt) {
      if (name == "htmx:oobBeforeSwap") {
        const target = evt.originalTarget;
        const fragment = evt.detail.fragment;
        if (target && fragment) {
          dataSwap(target, fragment)
        }
      }
      return true;
    },
  })

  /*** 
  * @param {HTMLElement} target 
  * @param {HTMLElement} fragment 
  ***/
  function dataSwap(target, fragment) {
    const attr = fragment.getAttribute("hx-data-attr");
    if (!attr) {
      return;
    }
    let parts = attr.split(";;");
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].split("=");
      if (part.length != 2) { continue }
      const name = part[0];
      const value = part[1];
      target.setAttribute(name, value);
    }
  }
})()
