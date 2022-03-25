// 组件类型
var ComponentType;
(function (ComponentType) {
  ComponentType["primary"] = "primary";
  ComponentType["secondary"] = "secondary";
  ComponentType["success"] = "success";
  ComponentType["danger"] = "danger";
  ComponentType["warning"] = "warning";
  ComponentType["info"] = "info";
  ComponentType["light"] = "light";
  ComponentType["dark"] = "dark";
})(ComponentType || (ComponentType = {}));
// 数据类型
var DataType;
(function (DataType) {
  DataType["number"] = "number";
  DataType["boolean"] = "boolean";
  DataType["string"] = "string";
  DataType["array"] = "array";
  DataType["json"] = "json";
})(DataType || (DataType = {}));

export { ComponentType as C, DataType as D };
