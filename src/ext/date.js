(function() {
  htmx.defineExtension('date', {
    onEvent: function(name, evt) {
      if (name == "htmx:beforeProcessNode") {
        const target = evt.originalTarget;
        const dateStr = Date(target.innerHTML);
        const date = new Date(dateStr);
        const hour = date.getHours();
        const minute = date.getMinutes();
        target.innerHTML = `${hour}:${minute}`
      }
      return true;
    }
  })
}())
