"use strict";(self.webpackChunkcomponent_library=self.webpackChunkcomponent_library||[]).push([[706],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function toPropertyKey(t){var i=function toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}function _defineProperty(obj,key,value){return(key=toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/components/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FullWidth:()=>FullWidth,Large:()=>Large,Medium:()=>Medium,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Primary$parameters3,_Secondary$parameters,_Secondary$parameters2,_Large$parameters,_Large$parameters2,_Medium$parameters,_Medium$parameters2,_Small$parameters,_Small$parameters2,_FullWidth$parameters,_FullWidth$parameters2,_Users_marvintandler_component_library_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_marvintandler_component_library_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",component:__webpack_require__("./src/components/Button.tsx").z,parameters:{layout:"centered"},tags:["autodocs"]};var Primary={args:{intent:"primary",label:"Button"}},Secondary={args:{intent:"secondary",label:"Button"}},Large={args:{intent:"primary",size:"large",label:"Button"}},Medium={args:{intent:"primary",size:"medium",label:"Button"}},Small={args:{intent:"primary",size:"small",label:"Button"}},FullWidth={args:{intent:"primary",label:"Button",fullWidth:!0},parameters:{layout:"fullscreen"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  // Args are like the types your component has\n  args: {\n    intent: "primary",\n    label: "Button"\n  }\n}'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source),description:_objectSpread({story:"This is some comment that will show up in the docs"},null===(_Primary$parameters3=Primary.parameters)||void 0===_Primary$parameters3||null===(_Primary$parameters3=_Primary$parameters3.docs)||void 0===_Primary$parameters3?void 0:_Primary$parameters3.description)})}),Secondary.parameters=_objectSpread(_objectSpread({},Secondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    intent: "secondary",\n    label: "Button"\n  }\n}'},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters2=_Secondary$parameters2.docs)||void 0===_Secondary$parameters2?void 0:_Secondary$parameters2.source)})}),Large.parameters=_objectSpread(_objectSpread({},Large.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    intent: "primary",\n    size: "large",\n    label: "Button"\n  }\n}'},null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2=_Large$parameters2.docs)||void 0===_Large$parameters2?void 0:_Large$parameters2.source)})}),Medium.parameters=_objectSpread(_objectSpread({},Medium.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Medium$parameters=Medium.parameters)||void 0===_Medium$parameters?void 0:_Medium$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    intent: "primary",\n    size: "medium",\n    label: "Button"\n  }\n}'},null===(_Medium$parameters2=Medium.parameters)||void 0===_Medium$parameters2||null===(_Medium$parameters2=_Medium$parameters2.docs)||void 0===_Medium$parameters2?void 0:_Medium$parameters2.source)})}),Small.parameters=_objectSpread(_objectSpread({},Small.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Small$parameters=Small.parameters)||void 0===_Small$parameters?void 0:_Small$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    intent: "primary",\n    size: "small",\n    label: "Button"\n  }\n}'},null===(_Small$parameters2=Small.parameters)||void 0===_Small$parameters2||null===(_Small$parameters2=_Small$parameters2.docs)||void 0===_Small$parameters2?void 0:_Small$parameters2.source)})}),FullWidth.parameters=_objectSpread(_objectSpread({},FullWidth.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_FullWidth$parameters=FullWidth.parameters)||void 0===_FullWidth$parameters?void 0:_FullWidth$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    intent: "primary",\n    label: "Button",\n    fullWidth: true\n  },\n  parameters: {\n    layout: "fullscreen"\n  }\n}'},null===(_FullWidth$parameters2=FullWidth.parameters)||void 0===_FullWidth$parameters2||null===(_FullWidth$parameters2=_FullWidth$parameters2.docs)||void 0===_FullWidth$parameters2?void 0:_FullWidth$parameters2.source)})})},"./src/components/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ThemeProvider.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonStyles=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)("pointer-cursor rounded-skin font-bold visited:no-underline focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-skin-primary-500 focus-visible:outline-offset-2",{variants:{intent:{primary:"text-skin-primary-500-contrast border-none",secondary:""},size:{small:"px-space-2xs py-space-3xs text-fluid-xs",medium:"px-space-xs py-space-3xs text-fluid-s",large:"px-space-s py-space-2xs text-fluid-m"},fullWidth:{true:"w-full"},theme:{"gradient-theme":"gradient-theme-button bg-gradient-to-br from-skin-primary-100 via-skin-primary-500 to-skin-primary-100","neon-theme":"-translate-y-[.5em] active:after:w-[.1em] active:after:-right-[.1em] active:after:-bottom-[.1em] active:before:h-[.1em] active:before:-right-[.1em] active:before:-bottom-[.1em] active:translate-y-0 active:translate-x-[.3em] after:transition-all after:duration-150 bg-skin-primary-500 relative transition-all duration-150 after:absolute after:h-full after:w-[0.5em] after:right-[-0.5em] after:bottom-[-0.25em] after:bg-skin-primary-700 after:skew-y-[45deg] before:absolute before:-right-[0.25em] before:-bottom-[0.5em] before:w-full before:h-[0.5em] before:skew-x-[45deg] before:bg-skin-primary-900 dark:before:bg-skin-primary-700 before:transition-all before:duration-150"}},compoundVariants:[{intent:"secondary",theme:"gradient-theme",class:"relative text-transparent after bg-clip-text before:bg-gradient-to-br before:from-skin-primary-100 before:via-skin-primary-500 before:to-skin-primary-100 before:absolute before:inset-0 before:rounded-skin before:-z-20 after:absolute after:inset-1 after:bg-skin-background active:after:bg-gradient-to-br active:after:from-skin-primary-500 active:after:to-skin-primary-100 active:text-skin-primary-500-contrast dark:active:text-skin-background after:-z-10 after:rounded-skin"},{intent:"secondary",theme:"neon-theme",class:"neon-theme-button-secondary-border dark:text-skin-on-background bg-transparent -translate-y-[.5em] active:after:w-[.1em] active:after:-right-[.1em] active:after:-bottom-[.1em] active:before:h-[.1em] active:before:-right-[.1em] active:before:-bottom-[.1em] active:translate-y-0 active:translate-x-[.3em] after:transition-all after:duration-150 relative transition-all duration-150 after:absolute after:h-full after:w-[0.5em] after:right-[-0.5em] after:bottom-[-0.25em] after:bg-skin-primary-700 after:skew-y-[45deg] before:absolute before:-right-[0.25em] before:-bottom-[0.5em] before:w-full before:h-[0.5em] before:skew-x-[45deg] before:bg-skin-primary-900 before:transition-all before:duration-150"}],defaultVariants:{intent:"primary",size:"medium",theme:"gradient-theme"}}),Button=function Button(_ref){var intent=_ref.intent,size=_ref.size,label=_ref.label,fullWidth=_ref.fullWidth,theme=(0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.F)().theme;return __jsx("button",{type:"button",className:buttonStyles({intent,fullWidth,theme,size})},label)};Button.displayName="Button",Button.__docgenInfo={description:"This is some comment that will show up in the docs",methods:[],displayName:"Button",props:{intent:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"You can also describe what a prop does and it'll show up in Storybook autodocs"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};try{Button.displayName="Button",Button.__docgenInfo={description:"This is some comment that will show up in the docs",displayName:"Button",props:{intent:{defaultValue:null,description:"You can also describe what a prop does and it'll show up in Storybook autodocs",name:"intent",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);