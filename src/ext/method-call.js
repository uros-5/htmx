(function() {

  htmx.defineExtension('method-call', {
    onEvent: function(name, evt) {
      if (name == "htmx:oobBeforeSwap") {
        const target = evt.detail.target;
        const fragment = evt.detail.fragment;
        if (target && fragment) {
          callMethod(target, fragment)
        }
      }
      return true;
    }
  });


  /*** 
  * @param {HTMLElement} target 
  * @param {HTMLElement} fragment 
  * @description Example of hx-methods: ```method=parameter1,,parameter2;;method2=;;```
  **/
  function callMethod(target, fragment) {
    const attr = fragment.getAttribute("hx-methods");
    if (!attr) {
      return;
    }
    let methods = attr.split(";;");
    for (let method = 0; method < methods.length; method++) {
      let [name, parameters] = methods[i].split("=");
      parameters = parameters.split(",,");
      if (parameters[0] == ';;') {
        target[name]();
      }
      else {
        for (let parameter = 0; parameter < parameters.length; parameter++) {
          target[name](parameters[parameter]);
        }
      }
    }
  }
})()
