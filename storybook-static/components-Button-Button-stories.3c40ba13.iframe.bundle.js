/*! For license information please see components-Button-Button-stories.3c40ba13.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkjadid_ui_test=self.webpackChunkjadid_ui_test||[]).push([[721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BlockButton:()=>BlockButton,CircleButton:()=>CircleButton,Danger:()=>Danger,Default:()=>Default,Disabled:()=>Disabled,GhostButton:()=>GhostButton,LinkButton:()=>LinkButton,Loading:()=>Loading,Primary:()=>Primary,WithEndIcon:()=>WithEndIcon,WithStartIcon:()=>WithStartIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Button",component:_Button__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{onClick:{action:"clicked"},size:{control:{type:"radio",options:["large","middle","small"]}},type:{control:{type:"radio",options:["primary","default","dashed","link","text"]}},shape:{control:{type:"radio",options:["default","circle","round"]}},startIcon:{control:{type:"none"}},endIcon:{control:{type:"none"}},loading:{control:"boolean"},disabled:{control:"boolean"},danger:{control:"boolean"},ghost:{control:"boolean"},block:{control:"boolean"},href:{control:"text"}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.A,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={children:"Default Button",type:"default",size:"md",disabled:!1};const Primary=Template.bind({});Primary.args={children:"Primary Button",type:"primary",size:"md"};const Danger=Template.bind({});Danger.args={children:"Danger Button",type:"primary",danger:!0,size:"md"};const Loading=Template.bind({});Loading.args={children:"Loading Button",type:"primary",loading:!0,size:"md"};const Disabled=Template.bind({});Disabled.args={children:"Disabled Button",type:"default",disabled:!0,size:"md"};const WithStartIcon=Template.bind({});WithStartIcon.args={children:"Button with Start Icon",type:"primary",size:"md",startIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"text-red-500",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M6 7L7 6L4.70711 3.70711L5.19868 3.21553C5.97697 2.43724 7.03256 2 8.13323 2C11.361 2 14 4.68015 14 7.93274C14 11.2589 11.3013 14 8 14C6.46292 14 4.92913 13.4144 3.75736 12.2426L2.34315 13.6569C3.90505 15.2188 5.95417 16 8 16C12.4307 16 16 12.3385 16 7.93274C16 3.60052 12.4903 0 8.13323 0C6.50213 0 4.93783 0.647954 3.78447 1.80132L3.29289 2.29289L1 0L0 1V7H6Z",fill:"#fff"})})})};const WithEndIcon=Template.bind({});WithEndIcon.args={children:"Button with End Icon",type:"primary",size:"md",endIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"text-red-500",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M6 7L7 6L4.70711 3.70711L5.19868 3.21553C5.97697 2.43724 7.03256 2 8.13323 2C11.361 2 14 4.68015 14 7.93274C14 11.2589 11.3013 14 8 14C6.46292 14 4.92913 13.4144 3.75736 12.2426L2.34315 13.6569C3.90505 15.2188 5.95417 16 8 16C12.4307 16 16 12.3385 16 7.93274C16 3.60052 12.4903 0 8.13323 0C6.50213 0 4.93783 0.647954 3.78447 1.80132L3.29289 2.29289L1 0L0 1V7H6Z",fill:"#fff"})})})};const BlockButton=Template.bind({});BlockButton.args={children:"Block Button",type:"primary",size:"md",block:!0};const LinkButton=Template.bind({});LinkButton.args={children:"Link Button",type:"link",href:"#"};const CircleButton=Template.bind({});CircleButton.args={children:"Circle button",type:"primary",shape:"circle",size:"md"};const GhostButton=Template.bind({});GhostButton.args={children:"Ghost Button",type:"primary",ghost:!0,size:"md"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Primary.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Danger.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Loading.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...Disabled.parameters?.docs?.source}}},WithStartIcon.parameters={...WithStartIcon.parameters,docs:{...WithStartIcon.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...WithStartIcon.parameters?.docs?.source}}},WithEndIcon.parameters={...WithEndIcon.parameters,docs:{...WithEndIcon.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...WithEndIcon.parameters?.docs?.source}}},BlockButton.parameters={...BlockButton.parameters,docs:{...BlockButton.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...BlockButton.parameters?.docs?.source}}},LinkButton.parameters={...LinkButton.parameters,docs:{...LinkButton.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...LinkButton.parameters?.docs?.source}}},CircleButton.parameters={...CircleButton.parameters,docs:{...CircleButton.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...CircleButton.parameters?.docs?.source}}},GhostButton.parameters={...GhostButton.parameters,docs:{...GhostButton.parameters?.docs,source:{originalSource:"args => <Button {...args} />",...GhostButton.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Primary","Danger","Loading","Disabled","WithStartIcon","WithEndIcon","BlockButton","LinkButton","CircleButton","GhostButton"]},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({autoInsertSpace=!0,block=!1,classNames="",danger=!1,disabled=!1,ghost=!1,href,htmlType="button",startIcon,endIcon,loading=!1,shape="default",size="middle",styles,type="default",onClick,children,title,ariaLabel,...rest},ref)=>{const buttonClass=`py-2 px-4 inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 gap-3 transition-all duration-300 ${block?"w-full":""} ${disabled?"opacity-50 cursor-not-allowed":""} ${"boolean"==typeof loading&&loading?"opacity-70 cursor-not-allowed":""} ${{xl:"px-8 py-4 text-xl",lg:"px-6 py-3 text-lg",md:"px-4 py-2 text-base",sm:"px-3 py-1.5 text-sm",xs:"px-2 py-1 text-xs"}[size]} ${{primary:"bg-blue-500 text-white hover:bg-blue-600",dashed:"border border-dashed border-gray-500 text-gray-700",link:"text-blue-500 hover:underline",text:"text-gray-500",default:"bg-gray-100 text-gray-700"}[type]} ${{circle:"rounded-full",round:"rounded-xl",default:"rounded-md"}[shape]} ${danger?"bg-red-500 text-white hover:bg-red-600":""} ${ghost?"bg-transparent text-gray-700 border border-gray-300":""} ${classNames}`.trim(),loadingIconColorClass={primary:"text-white",dashed:"text-gray-700",link:"text-blue-500",text:"text-gray-500",default:"text-gray-700"}[type],renderLoadingIcon=loading?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg",{className:`animate-spin h-5 w-5 ${loadingIconColorClass} transition-opacity duration-300`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"})]}):null;return href?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",{ref,href,target:"_blank",rel:"noopener noreferrer",className:buttonClass,style:styles,title,"aria-label":ariaLabel,...rest,children:[startIcon&&!loading&&startIcon,renderLoadingIcon,autoInsertSpace&&"string"==typeof children?` ${children} `:children,endIcon&&!loading&&endIcon]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button",{ref,type:htmlType,className:buttonClass,style:styles,disabled:disabled||!!loading,onClick:e=>{disabled||loading||!onClick||onClick(e)},title,"aria-label":ariaLabel,...rest,children:[startIcon&&!loading&&startIcon,renderLoadingIcon,autoInsertSpace&&"string"==typeof children?` ${children} `:children,endIcon&&!loading&&endIcon]})}));Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{autoInsertSpace:{defaultValue:{value:"true"},description:"",name:"autoInsertSpace",required:!1,type:{name:"boolean"}},block:{defaultValue:{value:"false"},description:"",name:"block",required:!1,type:{name:"boolean"}},classNames:{defaultValue:{value:""},description:"",name:"classNames",required:!1,type:{name:"string"}},danger:{defaultValue:{value:"false"},description:"",name:"danger",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},ghost:{defaultValue:{value:"false"},description:"",name:"ghost",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},htmlType:{defaultValue:{value:"button"},description:"",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean | { delay: number; }"}},shape:{defaultValue:{value:"default"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"default"'},{value:'"round"'}]}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'}]}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"CSSProperties"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"link"'},{value:'"default"'},{value:'"dashed"'},{value:'"primary"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);