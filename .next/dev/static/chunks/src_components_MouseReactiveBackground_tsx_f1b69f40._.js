(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MouseReactiveBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MouseReactiveBackground",
    ()=>MouseReactiveBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MouseReactiveBackground() {
    _s();
    const [mouse, setMouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [smooth, setSmooth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const onMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MouseReactiveBackground.useCallback[onMove]": (e)=>{
            const x = e.clientX / window.innerWidth * 100;
            const y = e.clientY / window.innerHeight * 100;
            setMouse({
                x,
                y
            });
        }
    }["MouseReactiveBackground.useCallback[onMove]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MouseReactiveBackground.useEffect": ()=>{
            window.addEventListener("mousemove", onMove);
            return ({
                "MouseReactiveBackground.useEffect": ()=>window.removeEventListener("mousemove", onMove)
            })["MouseReactiveBackground.useEffect"];
        }
    }["MouseReactiveBackground.useEffect"], [
        onMove
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MouseReactiveBackground.useEffect": ()=>{
            const tick = {
                "MouseReactiveBackground.useEffect.tick": ()=>{
                    setSmooth({
                        "MouseReactiveBackground.useEffect.tick": (prev)=>({
                                x: prev.x + (mouse.x - prev.x) * 0.08,
                                y: prev.y + (mouse.y - prev.y) * 0.08
                            })
                    }["MouseReactiveBackground.useEffect.tick"]);
                }
            }["MouseReactiveBackground.useEffect.tick"];
            const id = requestAnimationFrame(function loop() {
                tick();
                requestAnimationFrame(loop);
            });
            return ({
                "MouseReactiveBackground.useEffect": ()=>cancelAnimationFrame(id)
            })["MouseReactiveBackground.useEffect"];
        }
    }["MouseReactiveBackground.useEffect"], [
        mouse.x,
        mouse.y
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        style: {
            "--mouse-x": `${smooth.x}%`,
            "--mouse-y": `${smooth.y}%`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-slate-950"
            }, void 0, false, {
                fileName: "[project]/src/components/MouseReactiveBackground.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mouse-gradient absolute inset-0 opacity-100"
            }, void 0, false, {
                fileName: "[project]/src/components/MouseReactiveBackground.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mouse-mesh absolute inset-0 opacity-[0.4]"
            }, void 0, false, {
                fileName: "[project]/src/components/MouseReactiveBackground.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mouse-spot absolute -translate-x-1/2 -translate-y-1/2 w-[80vmax] h-[80vmax] rounded-full opacity-30"
            }, void 0, false, {
                fileName: "[project]/src/components/MouseReactiveBackground.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MouseReactiveBackground.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(MouseReactiveBackground, "M7TlGID7jnECZ3BaI/2Me8BpId0=");
_c = MouseReactiveBackground;
var _c;
__turbopack_context__.k.register(_c, "MouseReactiveBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_MouseReactiveBackground_tsx_f1b69f40._.js.map