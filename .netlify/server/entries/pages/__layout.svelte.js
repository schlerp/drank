var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _layout
});
var import_index_26cab624 = __toModule(require("../../chunks/index-26cab624.js"));
const getStores = () => {
  const stores = (0, import_index_26cab624.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var NavLink_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "li.svelte-x3igi3{list-style-type:none;display:inline-block;font-family:var(--ff-nav-link);font-size:1.5rem;font-weight:bolder;background-color:var(--bg-nav-link);color:var(--fg-nav-link);padding:0.5rem 1rem 0.5rem 1rem;border-radius:2rem}li.svelte-x3igi3:hover{background-color:var(--bg-nav-link-hover)}li.active.svelte-x3igi3{background-color:var(--bg-nav-link-active);color:var(--fg-nav-link-active)}li.active.svelte-x3igi3:hover{background-color:var(--bg-nav-link-active-hover)}a.svelte-x3igi3{color:inherit;text-decoration:inherit;cursor:inherit;background-color:inherit}",
  map: null
};
const NavLink = (0, import_index_26cab624.c)(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_26cab624.a)(page, (value) => $page = value);
  let { navPath } = $$props;
  if ($$props.navPath === void 0 && $$bindings.navPath && navPath !== void 0)
    $$bindings.navPath(navPath);
  $$result.css.add(css$3);
  isActive = $page.url.pathname === navPath.href;
  $$unsubscribe_page();
  return `<li class="${["svelte-x3igi3", isActive ? "active" : ""].join(" ").trim()}"><a${(0, import_index_26cab624.b)("href", navPath.href, 0)} class="${"svelte-x3igi3"}">${(0, import_index_26cab624.e)(navPath.text)}</a>
</li>`;
});
var Navbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "ul.svelte-199dm48{display:flex;flex-direction:row;gap:1rem;padding:1rem;margin:0}",
  map: null
};
const Navbar = (0, import_index_26cab624.c)(($$result, $$props, $$bindings, slots) => {
  let currentPath;
  page.subscribe((x) => {
    currentPath = x.url.pathname;
    console.log(currentPath);
  });
  const navPaths = [
    { href: "/", text: "Home" },
    { href: "/recipes", text: "Recipes" },
    { href: "/random", text: "Random" }
  ];
  $$result.css.add(css$2);
  return `<nav><ul class="${"svelte-199dm48"}">${(0, import_index_26cab624.d)(navPaths, (navPath) => `${(0, import_index_26cab624.v)(NavLink, "NavLink").$$render($$result, { navPath }, {}, {})}`)}</ul>
</nav>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-qf4x4q{width:calc(100% - 8rem);display:flex;flex-direction:row;align-items:center;gap:1rem;justify-content:space-between;background-color:var(--bg-header);padding-left:4rem;padding-right:4rem}div.svelte-qf4x4q{display:inline-block;margin:1rem}h1.svelte-qf4x4q{font-family:var(--ff-header-logo);font-size:4rem;letter-spacing:0.3rem;color:var(--fg-header-logo);margin-top:0;margin-bottom:0}h2.svelte-qf4x4q{font-family:var(--ff-header-logo-alt);margin-top:-1rem;margin-left:3rem;margin-bottom:0;top:3rem;left:2rem;font-size:1rem;color:var(--fg-header-logo-alt);letter-spacing:normal}@media only screen and (max-width: 720px){header.svelte-qf4x4q{flex-direction:column;gap:0.5rem}}",
  map: null
};
const Header = (0, import_index_26cab624.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-qf4x4q"}"><div class="${"svelte-qf4x4q"}"><h1 class="${"svelte-qf4x4q"}">Drank</h1>
		<h2 class="${"svelte-qf4x4q"}">Classy drinks for classy people</h2></div>
	${(0, import_index_26cab624.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
</header>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Raleway&family=Waterfall&display=swap');:root{--pal-primary:#db5a42;--pal-primary-soft:#e3a587;--pal-secondary:#e8ae68;--pal-secondary-soft:#ffd275;--pal-background:#f8e1dd;--pal-background-soft:#fafafa;--pal-text:#444;--pal-text-light:#efefef;--ff-heading:'Waterfall', serif;--ff-content:'Raleway', sans-serif;--bg-header:var(--pal-background);--fg-header-logo:var(--pal-primary);--fg-header-logo-alt:var(--pal-text);--ff-header-logo:var(--ff-heading);--ff-header-logo-alt:var(--ff-heading);--ff-nav-link:var(--ff-heading);--bg-nav-link:var(--pal-primary-soft);--fg-nav-link:var(--pal-text);--bg-nav-link-active:var(--pal-secondary-soft);--fg-nav-link-active:var(--pal-text);--bg-nav-link-hover:var(--pal-secondary);--bg-nav-link-active-hover:var(--pal-primary);--fg-recipes-list:var(--pal-text);--bg-recipes-list:#fff;--ff-recipe-heading:var(--ff-heading);--ff-recipe-content:var(--ff-content)}html, body{margin:0;height:100%;width:100%;background-color:var(--pal-background-soft);color:var(--pal-text);font-family:var(--ff-content)}.content-wrapper.svelte-1tnkdil{display:flex;flex-direction:row;justify-content:center}.content.svelte-1tnkdil{width:min(80%, 800px)}",
  map: null
};
const _layout = (0, import_index_26cab624.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte"}">${(0, import_index_26cab624.v)(Header, "Header").$$render($$result, {}, {}, {})}

	<div class="${"content-wrapper svelte-1tnkdil"}"><div class="${"content svelte-1tnkdil"}">${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
