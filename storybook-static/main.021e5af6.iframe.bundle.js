(self.webpackChunkmiddle=self.webpackChunkmiddle||[]).push([[179],{"./config/storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>storybook_preview});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles.Z,options);styles.Z&&styles.Z.locals&&styles.Z.locals;var themeDecorator=__webpack_require__("./src/shared/config/storybook/decorators/themeDecorator.tsx"),ThemeContext=__webpack_require__("./src/app/providers/ThemeProvider/lib/ThemeContext.ts"),react_router_dom=__webpack_require__("./node_modules/react-router-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RouterDecorator=story=>(0,jsx_runtime.jsx)(react_router_dom.VK,{children:story()});RouterDecorator.displayName="RouterDecorator";try{RouterDecorator.displayName="RouterDecorator",RouterDecorator.__docgenInfo={description:"",displayName:"RouterDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/storybook/decorators/RouterDecorator.tsx#RouterDecorator"]={docgenInfo:RouterDecorator.__docgenInfo,name:"RouterDecorator",path:"src/shared/config/storybook/decorators/RouterDecorator.tsx#RouterDecorator"})}catch(__react_docgen_typescript_loader_error){}const storybook_preview={decorators:[(0,themeDecorator.F)(ThemeContext.Q2.LIGHT),story=>story(),RouterDecorator],parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}}},"./src/app/providers/ThemeProvider/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q2:()=>ThemeContext.Q2,f6:()=>ui_ThemeProvider,Fg:()=>useTheme});var react=__webpack_require__("./node_modules/react/index.js"),ThemeContext=__webpack_require__("./src/app/providers/ThemeProvider/lib/ThemeContext.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const defaultTheme=localStorage.getItem(ThemeContext.a1)||ThemeContext.Q2.LIGHT,ThemeProvider=({children})=>{const[theme,setTheme]=(0,react.useState)(defaultTheme),defaultProps=(0,react.useMemo)((()=>({theme,setTheme})),[theme]);return(0,jsx_runtime.jsx)(ThemeContext.Ni.Provider,{value:defaultProps,children})};ThemeProvider.displayName="ThemeProvider";const ui_ThemeProvider=ThemeProvider;try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}const useTheme=()=>{const{theme,setTheme}=(0,react.useContext)(ThemeContext.Ni);return{theme,toggleTheme:()=>{const newTheme=theme===ThemeContext.Q2.LIGHT?ThemeContext.Q2.DARK:ThemeContext.Q2.LIGHT;setTheme(newTheme),localStorage.setItem(ThemeContext.a1,newTheme)}}}},"./src/app/providers/ThemeProvider/lib/ThemeContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ni:()=>ThemeContext,Q2:()=>Theme,a1:()=>LOCAL_STORAGE_THEME_KEY});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let Theme=function(Theme){return Theme.LIGHT="light",Theme.DARK="dark",Theme}({});const ThemeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),LOCAL_STORAGE_THEME_KEY="theme"},"./src/shared/config/storybook/decorators/themeDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>ThemeDecorator});var app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/providers/ThemeProvider/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ThemeDecorator=theme=>StoryComponent=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(app_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_0__.f6,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:`app ${theme}`,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StoryComponent,{})})});try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/storybook/decorators/themeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/storybook/decorators/themeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,':root{--font-family-main: verdana, "Times New Roman", sans-serif;--font-size-m: 16px;--font-line-m: 24px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-size-l: 24px;--font-line-l: 32px;--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--font-size-xl: 32px;--font-line-xl: 40px;--font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);--navbar-height: 50px;--sidebar-width: 300px;--sidebar-width-collapsed: 80px;--modal-z-index: 10;--overlay-color: rgba(0 0 0 / 60%);--red-light: #f00;--red-dark: #ce0505}.dark{--bg-color: #605f5fd1;--inverted-bg-color: #e8e8ea;--primary-color: #214997c5;--secondary-color: #1a9bf6;--inverted-primary-color: #2e53a5;--inverted-secondary-color: #4875fc;--link-color: #8ab4f8;--skeleton-color: #1515ad;--skeleton-shadow: #2b2be8;--code-bcg: #0b0b6a}.light{--bg-color: #e8e8ea;--inverted-bg-color: #b3b3f3;--primary-color: #0041cd;--secondary-color: #0232c2;--inverted-primary-color: #47adf5;--inverted-secondary-color: #233579;--link-color: #004cc7;--skeleton-color: #fff;--skeleton-shadow: rgba(0 0 0 / 20%);--code-bcg: #e6e6ef}.app,.map{font:var(--font-m);color:var(--primary-color);min-height:100vh;background:var(--bg-color)}.content-page{display:flex}.page-wrapper{flex-grow:1;padding:20px 20px 20px 40px;height:calc(100vh - var(--navbar-height));overflow-y:auto}',"",{version:3,sources:["webpack://./src/app/styles/variables/global.scss","webpack://./src/app/styles/themes/dark.scss","webpack://./src/app/styles/themes/normal.scss","webpack://./src/app/styles/index.scss"],names:[],mappings:"AAAA,MACI,0DAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CACA,oBAAA,CACA,oBAAA,CACA,4EAAA,CAGA,qBAAA,CACA,sBAAA,CACA,+BAAA,CAGA,mBAAA,CAGA,kCAAA,CACA,iBAAA,CACA,mBAAA,CCvBJ,MACI,qBAAA,CACA,4BAAA,CACA,0BAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CACA,qBAAA,CAGA,yBAAA,CACA,0BAAA,CAGA,mBAAA,CCdJ,OACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CACA,qBAAA,CAGA,sBAAA,CACA,oCAAA,CAGA,mBAAA,CCTJ,UAEI,kBAAA,CACA,0BAAA,CACA,gBAAA,CACA,0BAAA,CAGJ,cACI,YAAA,CAGJ,cACI,WAAA,CACA,2BAAA,CACA,yCAAA,CACA,eAAA",sourcesContent:[':root {\n    --font-family-main: verdana, "Times New Roman", sans-serif;\n    --font-size-m: 16px;\n    --font-line-m: 24px;\n    --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\n    --font-size-l: 24px;\n    --font-line-l: 32px;\n    --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\n    --font-size-xl: 32px;\n    --font-line-xl: 40px;\n    --font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);\n\n    // sizes\n    --navbar-height: 50px;\n    --sidebar-width: 300px;\n    --sidebar-width-collapsed: 80px;\n\n    // z-index\n    --modal-z-index: 10;\n\n    // overlay-color\n    --overlay-color: rgba(0 0 0 / 60%);\n    --red-light: #f00;\n    --red-dark: #ce0505;\n}\n',".dark {\n    --bg-color: #605f5fd1;\n    --inverted-bg-color: #e8e8ea;\n    --primary-color: #214997c5;\n    --secondary-color: #1a9bf6;\n    --inverted-primary-color: #2e53a5;\n    --inverted-secondary-color: #4875fc;\n    --link-color: #8ab4f8;\n\n    //  skeleton\n    --skeleton-color: #1515ad;\n    --skeleton-shadow: #2b2be8;\n\n    // code background\n    --code-bcg: #0b0b6a;\n}\n",".light {\n    --bg-color: #e8e8ea;\n    --inverted-bg-color: #b3b3f3;\n    --primary-color: #0041cd;\n    --secondary-color: #0232c2;\n    --inverted-primary-color: #47adf5;\n    --inverted-secondary-color: #233579;\n    --link-color: #004cc7;\n\n    //  skeleton\n    --skeleton-color: #fff;\n    --skeleton-shadow: rgba(0 0 0 / 20%);\n\n    // code background\n    --code-bcg: #e6e6ef;\n}\n",'// @import "reset";\n@import "variables/global";\n@import "themes/dark";\n@import "themes/normal";\n\n.app,\n.map {\n    font: var(--font-m);\n    color: var(--primary-color);\n    min-height: 100vh;\n    background: var(--bg-color);\n}\n\n.content-page {\n    display: flex;\n}\n\n.page-wrapper {\n    flex-grow: 1;\n    padding: 20px 20px 20px 40px;\n    height: calc(100vh - var(--navbar-height));\n    overflow-y: auto;\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./shared/ui/AppLink/AppLink.stories":["./src/shared/ui/AppLink/AppLink.stories.tsx",210],"./shared/ui/AppLink/AppLink.stories.":["./src/shared/ui/AppLink/AppLink.stories.tsx",210],"./shared/ui/AppLink/AppLink.stories.tsx":["./src/shared/ui/AppLink/AppLink.stories.tsx",210],"./shared/ui/Button/Button.stories":["./src/shared/ui/Button/Button.stories.tsx",982],"./shared/ui/Button/Button.stories.":["./src/shared/ui/Button/Button.stories.tsx",982],"./shared/ui/Button/Button.stories.tsx":["./src/shared/ui/Button/Button.stories.tsx",982],"./widgets/Navbar/ui/Navbar.stories":["./src/widgets/Navbar/ui/Navbar.stories.tsx",811],"./widgets/Navbar/ui/Navbar.stories.":["./src/widgets/Navbar/ui/Navbar.stories.tsx",811],"./widgets/Navbar/ui/Navbar.stories.tsx":["./src/widgets/Navbar/ui/Navbar.stories.tsx",811],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",363],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories.":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",363],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",363]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api");const external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject.createChannel)({page:"preview"});if(external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===dist.global.CONFIG_TYPE){const serverChannel=(0,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject.createChannel)({});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setServerChannel(serverChannel),window.__STORYBOOK_SERVER_CHANNEL__=serverChannel}const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./config/storybook/preview.ts")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[937],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);