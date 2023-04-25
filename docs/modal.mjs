import { $ } from "./common.mjs";

/**
 *
 * @param {ReturnType<$>} el
 */
export function show_modal(el) {
  const ref = $(
    /* html */ `<div id="modal" class="bg-black/60 fixed inset-0 py-4 grid place-content-center"></div>`
  )
    .append(el)
    .appendTo(document.body)
    .on("click", (e) => {
      if (e.target === e.currentTarget) {
        close();
      }
    });
  function close() {
    ref.remove();
  }
  return {
    ref,
    close,
  };
}
