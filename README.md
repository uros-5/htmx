# See [HTMX base repo](https://github.com/bigskysoftware/htmx)

# Changes in this fork
- Fix outerHTML swap if parent is null (i.e. too fast clicking for example) : an error would be fired trying to access the parent's properties and block further interactions with the element => now ignored when parent is null
- `hx-error-target` and `hx-error-swap` attributes to allow swapping server's reponse on error (i.e request with a `status >= 300`). Those attributes behave exactly like, respectively, [hx-target](https://htmx.org/attributes/hx-target/) and [hx-swap](https://htmx.org/attributes/hx-swap/)
- `hx-sse-swap` attribute to override `hx-swap` attribute's value for SSE swapping, ie to allow an element to have different swapping behaviours for requests responses & for SSE. Please note that `hx-swap` is used as a fallback in case `hx-sse-swap` is not defined, so this attribute should only be used when necessary, ie to split swapping behaviours apart. 
- The [HX-Trigger](https://htmx.org/headers/hx-trigger/) header in server's response supports a comma-and-space-separated event names list, to send multiple events to trigger without data, and without having to use a JSON format. Sending for example the header `HX-Trigger: myEvent, myOtherEvent` would trigger both the events `myEvent` and `myOtherEvent` on the client
- The event sources array ([SSE](https://htmx.org/attributes/hx-sse/)) is now exposed in the htmx API, so client can add eventListeners to the same sources created by htmx with the [hx-sse](https://htmx.org/attributes/hx-sse/) attribute
