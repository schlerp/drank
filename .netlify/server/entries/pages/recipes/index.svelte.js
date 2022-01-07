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
  default: () => Recipes,
  load: () => load
});
var import_index_26cab624 = __toModule(require("../../../chunks/index-26cab624.js"));
var import_utils_260f11e9 = __toModule(require("../../../chunks/utils-260f11e9.js"));
var RecipeList_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.wrapper.svelte-1ldsf9b{padding-top:2rem}input.search.svelte-1ldsf9b{width:calc(100% - 2rem);padding:1rem;border-radius:1rem;border:none;outline:0}ul.svelte-1ldsf9b{display:flex;flex-direction:column;gap:1rem;list-style:none;padding:0}div.card.svelte-1ldsf9b{gap:1rem;justify-content:space-between;align-items:center;border-radius:1rem;color:var(--fg-recipes-list);background-color:var(--bg-recipes-list);padding:1rem;box-shadow:0.1rem 0.1rem 0.2rem #ccc}div.svelte-1ldsf9b{display:flex;flex-direction:row;flex-wrap:wrap;gap:0.5rem}div.paginationControls.svelte-1ldsf9b{justify-content:space-between;align-items:center}a.svelte-1ldsf9b{text-decoration:none;color:inherit}img.svelte-1ldsf9b{height:6rem;border-radius:1rem}span.svelte-1ldsf9b{color:#ccc}button.svelte-1ldsf9b{padding:1rem;border-radius:1rem;outline:none;border:none;background-color:var(--pal-primary-soft)}button.hidden.svelte-1ldsf9b{display:none}button.isCurrentPage.svelte-1ldsf9b{background-color:var(--pal-primary)}@media only screen and (max-width: 600px){.recipe.svelte-1ldsf9b{display:flex;flex-direction:column;flex-wrap:wrap;gap:0.5rem}div.paginationControls.svelte-1ldsf9b{justify-content:space-between;align-items:center;flex-direction:column}}",
  map: null
};
const RecipeList = (0, import_index_26cab624.c)(($$result, $$props, $$bindings, slots) => {
  let { allRecipes } = $$props;
  let { paginationSize = 10 } = $$props;
  let recipePages;
  let recipes = allRecipes;
  let currentPage = 1;
  let pageIndexes = [-2, -1, 0, 1, 2];
  let maxPageIndex = 1;
  let filterText = "";
  if ($$props.allRecipes === void 0 && $$bindings.allRecipes && allRecipes !== void 0)
    $$bindings.allRecipes(allRecipes);
  if ($$props.paginationSize === void 0 && $$bindings.paginationSize && paginationSize !== void 0)
    $$bindings.paginationSize(paginationSize);
  $$result.css.add(css);
  {
    {
      recipes = allRecipes.filter((r) => r.name.toLowerCase().includes(filterText.toLowerCase())).sort(function(a, b) {
        return a.name.localeCompare(b.name);
      });
      maxPageIndex = Math.ceil(recipes.length / paginationSize);
      recipePages = Array.from({ length: maxPageIndex }, (v, k) => k).map((pageIndex) => recipes.slice(paginationSize * pageIndex, paginationSize * (pageIndex + 1)));
      currentPage = 1;
    }
  }
  return `<div class="${"wrapper svelte-1ldsf9b"}"></div>
<div class="${"card svelte-1ldsf9b"}"><input class="${"search svelte-1ldsf9b"}" type="${"text"}" placeholder="${"filter"}"${(0, import_index_26cab624.b)("value", filterText, 0)}></div>

<ul class="${"svelte-1ldsf9b"}">${recipePages[currentPage - 1] ? `${(0, import_index_26cab624.d)(recipePages[currentPage - 1], (recipe) => `<a${(0, import_index_26cab624.b)("href", `/recipes/${recipe.name}`, 0)} class="${"svelte-1ldsf9b"}"><div class="${"card recipe svelte-1ldsf9b"}"><img${(0, import_index_26cab624.b)("alt", recipe.imageDescription, 0)}${(0, import_index_26cab624.b)("src", recipe.imageUrl, 0)} class="${"svelte-1ldsf9b"}">
					<h3>${(0, import_index_26cab624.e)((0, import_utils_260f11e9.t)(recipe.name))}</h3>
					<span class="${"svelte-1ldsf9b"}">${(0, import_index_26cab624.e)(recipe.source)}</span></div>
			</a>`)}` : ``}
	<div class="${"paginationControls svelte-1ldsf9b"}"><div class="${"svelte-1ldsf9b"}"><button class="${"svelte-1ldsf9b"}">${(0, import_index_26cab624.e)("|<")}</button>
			<button class="${"svelte-1ldsf9b"}">${(0, import_index_26cab624.e)("<")}</button></div>
		<div class="${"svelte-1ldsf9b"}">${(0, import_index_26cab624.d)(pageIndexes, (pageIndex) => `${currentPage + pageIndex > 0 && currentPage + pageIndex <= maxPageIndex ? `<button class="${[
    "svelte-1ldsf9b",
    currentPage === currentPage + pageIndex ? "isCurrentPage" : ""
  ].join(" ").trim()}">${(0, import_index_26cab624.e)(currentPage + pageIndex)}
					</button>` : `<button class="${"hidden svelte-1ldsf9b"}">${(0, import_index_26cab624.e)(currentPage + pageIndex)}
					</button>`}`)}</div>
		<div class="${"svelte-1ldsf9b"}"><button class="${"svelte-1ldsf9b"}">${(0, import_index_26cab624.e)(">")}</button>
			<button class="${"svelte-1ldsf9b"}">${(0, import_index_26cab624.e)(">|")}</button></div></div>
</ul>`;
});
async function load({ fetch }) {
  const res = await fetch(`/api/recipes.json`);
  if (res.ok)
    return { props: { allRecipes: await res.json() } };
  return { status: res.status, error: new Error() };
}
const Recipes = (0, import_index_26cab624.c)(($$result, $$props, $$bindings, slots) => {
  let { allRecipes } = $$props;
  if ($$props.allRecipes === void 0 && $$bindings.allRecipes && allRecipes !== void 0)
    $$bindings.allRecipes(allRecipes);
  return `${(0, import_index_26cab624.v)(RecipeList, "RecipeList").$$render($$result, { allRecipes }, {}, {})}`;
});
