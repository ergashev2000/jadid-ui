/*! For license information please see components-Divider-Divider-stories.6c7571be.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkjadid_ui_test=self.webpackChunkjadid_ui_test||[]).push([[823],{"./src/components/Divider/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DashedDivider:()=>DashedDivider,Default:()=>Default,LeftAligned:()=>LeftAligned,RightAligned:()=>RightAligned,VerticalDivider:()=>VerticalDivider,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Divider_stories});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Divider=({children,className,dashed=!1,variant="solid",orientation="center",orientationMargin,plain=!0,style,type="horizontal"})=>{const isHorizontal="horizontal"===type,lineClass=classnames_default()({"border-dashed":dashed,"border-dotted":!dashed&&"dotted"===variant,"border-solid":!dashed&&"solid"===variant}),dividerClass=classnames_default()("relative","flex","items-center","text-black",{"justify-start":"left"===orientation,"justify-center":"center"===orientation,"justify-end":"right"===orientation},className),lineStyle=isHorizontal?"h-[1px] w-full":"w-[1px] h-full",orientationStyles={marginLeft:"left"===orientation?orientationMargin:void 0,marginRight:"right"===orientation?orientationMargin:void 0};return(0,jsx_runtime.jsx)("div",{className:dividerClass,style,role:"separator","aria-orientation":type,children:isHorizontal?(0,jsx_runtime.jsxs)("div",{className:"flex items-center w-full",children:["left"===orientation?null:(0,jsx_runtime.jsx)("span",{className:`flex-1 ${lineStyle} bg-gray-300 dark:bg-gray-600 ${lineClass}`}),children&&(0,jsx_runtime.jsx)("span",{className:"px-2 text-sm dark:text-gray-300 "+(plain?"":"font-semibold"),style:orientationStyles,children}),"right"===orientation?null:(0,jsx_runtime.jsx)("span",{className:`flex-1 ${lineStyle} bg-gray-300 dark:bg-gray-600 ${lineClass}`})]}):(0,jsx_runtime.jsx)("span",{className:`h-full w-[1px] bg-gray-300 dark:bg-gray-600 ${lineClass}`})})};Divider.displayName="Divider";const Divider_Divider=Divider;try{Divider.displayName="Divider",Divider.__docgenInfo={description:"",displayName:"Divider",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},dashed:{defaultValue:{value:"false"},description:"",name:"dashed",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"solid"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"dashed"'},{value:'"solid"'},{value:'"dotted"'}]}},orientation:{defaultValue:{value:"center"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},orientationMargin:{defaultValue:null,description:"",name:"orientationMargin",required:!1,type:{name:"string | number"}},plain:{defaultValue:{value:"true"},description:"",name:"plain",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},type:{defaultValue:{value:"horizontal"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Divider/Divider.tsx#Divider"]={docgenInfo:Divider.__docgenInfo,name:"Divider",path:"src/components/Divider/Divider.tsx#Divider"})}catch(__react_docgen_typescript_loader_error){}const Divider_stories={title:"Layout/Divider",component:Divider_Divider,argTypes:{children:{control:"text"},className:{control:"text"},dashed:{control:"boolean"},variant:{control:"select",options:["solid","dashed","dotted"]},orientation:{control:"select",options:["left","center","right"]},plain:{control:"boolean"},type:{control:"select",options:["horizontal","vertical"]},orientationMargin:{control:"text"}}},Template=args=>(0,jsx_runtime.jsx)(Divider_Divider,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={children:"Default Divider",dashed:!1,variant:"solid",orientation:"left",plain:!0,type:"horizontal"};const DashedDivider=Template.bind({});DashedDivider.args={children:"Dashed Divider",dashed:!0,variant:"dashed",orientation:"center",plain:!1};const LeftAligned=Template.bind({});LeftAligned.args={children:"Left Aligned Divider",dashed:!1,variant:"solid",orientation:"left",plain:!1,orientationMargin:"20px"};const RightAligned=Template.bind({});RightAligned.args={children:"Right Aligned Divider",dashed:!1,variant:"solid",orientation:"right",plain:!1,orientationMargin:"20px"};const VerticalDivider=Template.bind({});VerticalDivider.args={type:"vertical",dashed:!0,variant:"dotted",className:"h-24"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Divider {...args} />",...Default.parameters?.docs?.source}}},DashedDivider.parameters={...DashedDivider.parameters,docs:{...DashedDivider.parameters?.docs,source:{originalSource:"args => <Divider {...args} />",...DashedDivider.parameters?.docs?.source}}},LeftAligned.parameters={...LeftAligned.parameters,docs:{...LeftAligned.parameters?.docs,source:{originalSource:"args => <Divider {...args} />",...LeftAligned.parameters?.docs?.source}}},RightAligned.parameters={...RightAligned.parameters,docs:{...RightAligned.parameters?.docs,source:{originalSource:"args => <Divider {...args} />",...RightAligned.parameters?.docs?.source}}},VerticalDivider.parameters={...VerticalDivider.parameters,docs:{...VerticalDivider.parameters?.docs,source:{originalSource:"args => <Divider {...args} />",...VerticalDivider.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DashedDivider","LeftAligned","RightAligned","VerticalDivider"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);