// @ts-check
import { $, set_title, set_main, html } from "./common.mjs";
import { range } from "./utils.mjs";
import { request_api_events_$get } from "./request.mjs";
import { show_modal } from "./modal.mjs";

set_title("Index View");

const calendar = html`<div id="calendar" class="grid grid-cols-7">
  <div class="p-2 text-center font-bold">SUN</div>
  <div class="p-2 text-center font-bold">MON</div>
  <div class="p-2 text-center font-bold">TUE</div>
  <div class="p-2 text-center font-bold">WED</div>
  <div class="p-2 text-center font-bold">TUR</div>
  <div class="p-2 text-center font-bold">FRI</div>
  <div class="p-2 text-center font-bold">SAT</div>
</div>`;

set_main(calendar);

/** @type {ReturnType<$>} */
const date_elems = $(
  [
    ...range(23, 31).map((day) => `2023-04-${day.toString().padStart(2, "0")}`),
    ...range(1, 32).map((day) => `2023-05-${day.toString().padStart(2, "0")}`),
    ...range(1, 31).map((day) => `2023-06-${day.toString().padStart(2, "0")}`),
  ].flatMap((date_str) => {
    const date_id = `date_${date_str}`;
    /** @type {ReturnType<$>} */
    const el = html`<div id="${date_id}" class="p-2 border">
      <div class="text-xs">${date_str}</div>
      <div class="_events pt-2 grid gap-y-1"></div>
    </div>`
      .data({ date: date_str })
      .appendTo(calendar);

    return el.get();
  })
);

let events_elems = $();
request_api_events_$get().then((out) => {
  for (const event of out.data) {
    const date_str = event.startdate.split("_")[1];
    const ref = html`<div
      id="${event.id}"
      class="px-2 py-3 bg-orange-600 text-white cursor-pointer"
    >
      <div>${event.name}</div>
      <div class="text-xs mt-1 opacity-70">
        ผู้เข้าร่วม ${event.participate.length.toFixed(0)}
      </div>
    </div>`
      .appendTo(date_elems.children(`#date_${date_str} ._events`))
      .on("click", () => {
        const modal = html`<div class="bg-white px-6 py-6 w-96" />`.append(
          html`<div class="font-bold text-xl">${event.name}</div>`,
          html`<div class="">${event.startdate}</div>`,
          html`<div class="mt-4 font-bold">Participate</div>`,
          html`<div class="grid grid-cols-1 gap-1 mt-1" />`.append(
            // prettier-ignore
            ...event.participate.map((p, i) =>
                  html`<div class="p-3 text-sm rounded border bg-gray-100">
                    ${(i + 1).toString()}. ${p}
                  </div>`
              )
          ),
          html`<button></button>`
            .addClass("bg-orange-600 text-white p-2 mt-6 w-full block")
            .text("ปิด")
            .on("click", () => show_modal_ref.close())
        );
        const show_modal_ref = show_modal(modal);
      });
    events_elems = events_elems.add(ref);
  }
});
