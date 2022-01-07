const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","recipes.json"]),
	_: {
		mime: {".png":"image/png",".json":"application/json"},
		entry: {"file":"start-8eac2d5f.js","js":["start-8eac2d5f.js","chunks/vendor-480c5f1a.js"],"css":["assets/start-61d1577b.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/recipes\/?$/,
				params: null,
				path: "/recipes",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/recipes\/([^/]+?)\/?$/,
				params: (m) => ({ recipeName: m[1]}),
				path: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/random\/?$/,
				params: null,
				path: "/random",
				a: [0,5],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/recipeSummary\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/recipeSummary.json.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/recipes\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/recipes.json.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/random\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/random.json.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/([^/]+?)\.json$/,
				params: (m) => ({ recipeName: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/_recipeName_.json.ts.js'))
			}
		]
	}
});
