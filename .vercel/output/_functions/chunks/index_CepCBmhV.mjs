import { c as createComponent } from './astro-component_KGJ3KNm4.mjs';
import 'piccolore';
import { l as renderHead, n as renderSlot, r as renderTemplate, o as renderComponent, m as maybeRenderHead } from './entrypoint_DeB1kvn6.mjs';
import 'clsx';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "The Studio" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="The Studio — Creative Production Management"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><link rel="stylesheet" href="/styles/global.css">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/viikkas/the_studio_astro/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script src="/scripts/app.js"><\/script> <script src="/scripts/post_production.js"><\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "The Studio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="app"></div> <div class="stat-bar" id="sbar" style="display:none"> <div class="stat"><div class="dot dg"></div><span id="st-r">—</span></div> <div class="stat"><div class="dot dgr"></div><span id="st-i">0 images</span></div> <div class="stat"><div class="dot db"></div><span id="st-v">0 videos</span></div> <div class="stat" style="margin-left:auto"><span id="st-m" style="color:var(--t4)">no model</span></div> </div> <div id="modal-root"></div> ` }));
}, "/Users/viikkas/the_studio_astro/src/pages/index.astro", void 0);

const $$file = "/Users/viikkas/the_studio_astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
