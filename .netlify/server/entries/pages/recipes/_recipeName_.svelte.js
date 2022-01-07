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
  default: () => U5BrecipeNameu5D,
  load: () => load
});
var import_index_26cab624 = __toModule(require("../../../chunks/index-26cab624.js"));
var import_RecipePage_01d639d4 = __toModule(require("../../../chunks/RecipePage-01d639d4.js"));
var import_utils_260f11e9 = __toModule(require("../../../chunks/utils-260f11e9.js"));
async function load({ fetch, params }) {
  const { recipeName } = params;
  const res = await fetch(`/api/${recipeName}.json`);
  if (res.ok)
    return { props: { recipe: await res.json() } };
  return { status: res.status, error: new Error() };
}
const U5BrecipeNameu5D = (0, import_index_26cab624.c)(($$result, $$props, $$bindings, slots) => {
  let { recipe } = $$props;
  if ($$props.recipe === void 0 && $$bindings.recipe && recipe !== void 0)
    $$bindings.recipe(recipe);
  return `${(0, import_index_26cab624.v)(import_RecipePage_01d639d4.R, "RecipePage").$$render($$result, { recipe }, {}, {})}`;
});
