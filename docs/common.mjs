// @ts-check
// @ts-ignore
import Cash from "https://esm.sh/cash-dom@8.1.5";
import { base_path } from "./config.mjs";

/** @type {typeof import("cash-dom")["default"]} */
export const $ = Cash;
const app = $("#app");
/**
 * create Cash$ from string html tagged template string
 * @param {TemplateStringsArray} str
 * @param  {(string | string[])[]} args
 * @returns {ReturnType<typeof $>}
 */
export function html(str, ...args) {
  const res = $(
    str.raw
      .map((s, i) => {
        const tok = [args[i] ?? ""].flat(Infinity).join("");
        return `${s}${tok}`;
      })
      .join("")
  );
  return res;
}

const header = $(/*html*/ `<nav class="px-4 py-2 border-b flex justify-between">
  <span id="header-title" class="font-bold">DEFAULT TITLE</span>
  <div class="flex justify-end gap-x-2">
    <a class="underline" href="${base_path}/">Home</a>
    <a class="underline" href="${base_path}/about.html">About</a>
    <a class="underline" href="${base_path}/admin.html">Admin</a>
    <a class="underline" href="https://github.com/krist7599555/example-vanilla-cash-dom">Github</a>
  </div>
</nav>`).appendTo(app);

export const main = html`<main>
  <div class="bg-red-600 h-screen p-8 text-white grid place-content-center">
    DEFAULT MAIN
  </div>
</main>`.appendTo(app);

/**
 * @param {string} title
 */
export function set_title(title) {
  header.children("#header-title").text(title);
  document.documentElement.title = title;
}

/**
 * @param {Cash} el
 */
export function set_main(el) {
  el.replaceAll(main);
}
