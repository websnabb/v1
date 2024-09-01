import { c as createComponent, r as renderTemplate, a as renderComponent } from '../../chunks/astro/server_ebvU0YCB.mjs';
import 'kleur/colors';
import { $ as $$LandingLayout } from '../../chunks/LandingLayout_9qtuhE5p.mjs';
import { $ as $$Hero2 } from '../../chunks/Hero2_YdYNcxtc.mjs';
import { $ as $$CallToAction } from '../../chunks/CallToAction_D8ZFySw2.mjs';
export { renderers } from '../../renderers.mjs';

const $$ClickThrough = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Click-through Landing Page Demo"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$LandingLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Click-through Demo", "title": "Click-through Landing Page: The Perfect Bridge to Conversion!", "subtitle": "Learn how to design a Click-Through Landing Page that seamlessly guides visitors to your main offer.", "actions": [
    { variant: "primary", text: "Call to Action", href: "#", icon: "tabler:square-rounded-arrow-right" },
    { text: "Learn more", href: "#" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Click-through Landing Page Hero Image"
  } })} ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "Coming soon", "subtitle": "We are working on the content of these demo pages. You will see them very soon. Stay tuned Stay tuned!", "actions": [
    {
      variant: "primary",
      text: "Download Template",
      href: "https://github.com/onwidget/astrowind",
      icon: "tabler:download"
    }
  ] })} ` })}`;
}, "/Users/jmenor/Github/astrowind-main/src/pages/landing/click-through.astro", void 0);

const $$file = "/Users/jmenor/Github/astrowind-main/src/pages/landing/click-through.astro";
const $$url = "/websnabb/landing/click-through";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ClickThrough,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
