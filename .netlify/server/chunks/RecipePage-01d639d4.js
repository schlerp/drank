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
  R: () => RecipePage
});
var import_index_26cab624 = __toModule(require("./index-26cab624.js"));
var import_utils_260f11e9 = __toModule(require("./utils-260f11e9.js"));
var RecipePage_svelte_svelte_type_style_lang = "";
const css = {
  code: ".bottom-spacer.svelte-7czdc9.svelte-7czdc9{height:100px}.flex-wrapper.svelte-7czdc9.svelte-7czdc9{display:flex;flex-flow:row wrap;justify-content:space-between;gap:4rem}img.svelte-7czdc9.svelte-7czdc9{width:min(100%);border-radius:1rem}figure.svelte-7czdc9.svelte-7czdc9{width:min(400px, 80%);margin:0}figcaption.svelte-7czdc9.svelte-7czdc9{font-size:0.8rem}.description-wrapper.svelte-7czdc9 p.svelte-7czdc9:first-of-type{margin-top:0}h3.svelte-7czdc9.svelte-7czdc9{font-size:4rem;font-family:var(--ff-recipe-heading);margin-block:2rem}h4.svelte-7czdc9.svelte-7czdc9{margin:0;font-size:2rem;font-family:var(--ff-recipe-heading)}li.svelte-7czdc9.svelte-7czdc9{font-family:var(--ff-recipe-content);font-size:1.2rem}p.svelte-7czdc9.svelte-7czdc9{font-family:var(--ff-recipe-content);text-align:justify;font-size:1.2rem}",
  map: null
};
const RecipePage = (0, import_index_26cab624.c)(($$result, $$props, $$bindings, slots) => {
  let { recipe } = $$props;
  if ($$props.recipe === void 0 && $$bindings.recipe && recipe !== void 0)
    $$bindings.recipe(recipe);
  $$result.css.add(css);
  return `<h3 class="${"svelte-7czdc9"}">${(0, import_index_26cab624.e)((0, import_utils_260f11e9.t)(recipe.name))}</h3>

<div class="${"flex-wrapper svelte-7czdc9"}"><div class="${"description-wrapper svelte-7czdc9"}">${(0, import_index_26cab624.d)(recipe.description, (descriptionParagraph) => `<p class="${"svelte-7czdc9"}">${(0, import_index_26cab624.e)(descriptionParagraph)}</p>`)}</div>

	<div class="${"ingredients-wrapper"}"><h4 class="${"svelte-7czdc9"}">Ingredients</h4>
		<ul>${(0, import_index_26cab624.d)(recipe.ingredients, (ingredient) => `<li class="${"svelte-7czdc9"}">${(0, import_index_26cab624.e)(ingredient)}</li>`)}</ul></div>

	<figure class="${"image-wrapper svelte-7czdc9"}"><img${(0, import_index_26cab624.b)("src", recipe.imageUrl, 0)} alt="${"a " + (0, import_index_26cab624.e)(recipe.name) + " cocktail"}" class="${"svelte-7czdc9"}">
		<figcaption aria-hidden="${"false"}" class="${"svelte-7czdc9"}">${(0, import_index_26cab624.e)(recipe.imageDescription)}</figcaption></figure>

	<div class="${"steps-wrapper"}"><h4 class="${"svelte-7czdc9"}">Steps</h4>
		<ol>${(0, import_index_26cab624.d)(recipe.steps, (step) => `<li class="${"svelte-7czdc9"}">${(0, import_index_26cab624.e)(step)}</li>`)}</ol></div></div>
<div class="${"bottom-spacer svelte-7czdc9"}"></div>`;
});
