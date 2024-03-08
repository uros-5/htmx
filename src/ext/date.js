(function() {
  htmx.defineExtension('date', {
    onEvent: function(name, evt) {
      if (name == "htmx:beforeProcessNode") {
        /** @type {HTMLElement} target **/
        // atributes fmt="0|1" to="innerHTML|some_attribute" from="date"
        const target = evt.detail.elt;
        const format = Number(target.dataset['fmt']);
        const to = target.dataset['to'];
        const from = target.dataset['from'];
        if (format == 0) {
          const dateStr = Date(from);
          const date = new Date(dateStr);
          const hour = date.getHours();
          const minute = date.getMinutes();
          target[to] = `${hour}:${minute}`;
        }
        else if (format == 1) {
          const date = new Date(Number(from));
          target[to] = date.toUTCString();
        }
      }
      return true;
    }
  })
}())
