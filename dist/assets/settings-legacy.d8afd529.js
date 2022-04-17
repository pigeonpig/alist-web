;(function(){function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}System.register(['./vendor-legacy.2f408a64.js','./index.esm-legacy.f36d4d6c.js','./form-item-legacy.57f688e2.js','./index-legacy.18b38563.js'],function(exports){'use strict';var useToast,useTranslation,react,useLocation,React,Box,SimpleGrid,Flex,Button,admin,FormItem;return{setters:[function(module){useToast=module.h;useTranslation=module.j;react=module.r;useLocation=module.u;React=module.R;Box=module.n;SimpleGrid=module.as;Flex=module.F;Button=module.G;},function(module){admin=module.b;},function(module){FormItem=module.F;},function(){}],execute:function execute(){var Settings=exports('default',function(){var toast=useToast();var _useTranslation=useTranslation(),t=_useTranslation.t;var _react$exports$useSta=react.exports.useState([]),_react$exports$useSta2=_slicedToArray(_react$exports$useSta,2),settings=_react$exports$useSta2[0],setSettings=_react$exports$useSta2[1];var _useLocation=useLocation(),pathname=_useLocation.pathname;var refreshSettings=function refreshSettings(){admin.get("settings",{params:{group:parseInt(pathname.split("/").pop()||"0")}}).then(function(resp){var res=resp.data;if(res.code!==200){toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});}else{setSettings(res.data);}});};react.exports.useEffect(function(){refreshSettings();},[]);return/* @__PURE__ */React.createElement(Box,{w:"full"},/* @__PURE__ */React.createElement(SimpleGrid,{minChildWidth:"400px",spacing:"2"},settings.map(function(item){var _item$values,_settings$find;return/* @__PURE__ */React.createElement(FormItem,{key:item.key,type:item.type,label:item.key,value:item.type==="bool"?item.value==="true":item.value,readOnly:item.group===2,values:(_item$values=item.values)===null||_item$values===void 0?void 0:_item$values.split(","),description:"".concat(t(item.description),"(").concat(t(item.group===0?"public":item.group===1?"private":"readonly"),")"),onChange:function onChange(value){setSettings(settings.map(function(setting){if(setting.key===item.key){if(item.type==="number"){return _objectSpread(_objectSpread({},setting),{},{value:value.toString()});}if(item.type!=="bool"){return _objectSpread(_objectSpread({},setting),{},{value:value});}else{return _objectSpread(_objectSpread({},setting),{},{value:item.value==="true"?"false":"true"});}}return setting;}));},onDelete:item.version===((_settings$find=settings.find(function(s){return s.key==="version";}))===null||_settings$find===void 0?void 0:_settings$find.value)?void 0:function(){admin.delete("setting",{params:{key:item.key}}).then(function(resp){var res=resp.data;if(res.code!==200){toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});}else{toast({title:t(res.message),status:"success",duration:3e3,isClosable:true});refreshSettings();}});}});})),/* @__PURE__ */React.createElement(Flex,{mt:"2",justify:"end"},/* @__PURE__ */React.createElement(Button,{onClick:function onClick(){admin.post("settings",settings).then(function(resp){var res=resp.data;if(res.code!==200){toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});}else{toast({title:t(res.message),status:"success",duration:3e3,isClosable:true});}});}},t("Save"))));});}};});})();
