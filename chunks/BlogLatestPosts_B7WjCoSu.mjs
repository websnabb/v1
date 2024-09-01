import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ebvU0YCB.mjs';
import 'kleur/colors';
import { $ as $$Grid } from './Grid_DqMHHccP.mjs';
import { c as getBlogPermalink } from './permalinks_buxey5SN.mjs';
import { h as findLatestPosts } from './blog_uuUOVLFc.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_D2tYY2J_.mjs';
import { a as $$Button } from './PageLayout_CJYqIeU-.mjs';

const $$Astro = createAstro("https://websnabb.github.io");
const $$BlogLatestPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLatestPosts;
  const {
    title = await Astro2.slots.render("title"),
    linkText = "View all posts",
    linkUrl = getBlogPermalink(),
    information = await Astro2.slots.render("information"),
    count = 4,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  const posts = await findLatestPosts({ count }) ;
  return renderTemplate`${renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8">${title && renderTemplate`<div class="md:max-w-sm"><h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2>${linkText && linkUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "link", "href": linkUrl }, { "default": ($$result3) => renderTemplate`${" "}${linkText} »
` })}`}</div>`}${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`}</div>${renderComponent($$result2, "Grid", $$Grid, { "posts": posts })}` })}` }`;
}, "/Users/jmenor/Github/astrowind-main/src/components/widgets/BlogLatestPosts.astro", void 0);

export { $$BlogLatestPosts as $ };
