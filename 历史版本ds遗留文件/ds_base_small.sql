/*
 Navicat Premium Data Transfer

 Source Server         : damon_dong_47_102_97_25
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : 47.102.97.25:3308
 Source Schema         : ds_base_small

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 09/04/2021 12:37:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ds_base_dic_map
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_dic_map`;
CREATE TABLE `ds_base_dic_map`  (
  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_table_dic_id` int(20) NOT NULL,
  `ds_field_dic_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_dic_id` int(20) NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_dic_map
-- ----------------------------
INSERT INTO `ds_base_dic_map` VALUES ('0', 0, 'ds_table_name', 3);
INSERT INTO `ds_base_dic_map` VALUES ('1', 0, 'ds_table_system', 2);
INSERT INTO `ds_base_dic_map` VALUES ('2', 3, 'ds_table_dic_id', 3);
INSERT INTO `ds_base_dic_map` VALUES ('3', 3, 'ds_dic_id', 4);
INSERT INTO `ds_base_dic_map` VALUES ('4', 1, 'ds_belong_table_name', 3);
INSERT INTO `ds_base_dic_map` VALUES ('5', 1, 'ds_key_type', 0);
INSERT INTO `ds_base_dic_map` VALUES ('6', 1, 'ds_key_dic_foreign', 4);
INSERT INTO `ds_base_dic_map` VALUES ('7', 1, 'ds_field_type', 1);
INSERT INTO `ds_base_dic_map` VALUES ('8', 1, 'ds_key_foreign', 3);

-- ----------------------------
-- Table structure for ds_base_dictionaries
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_dictionaries`;
CREATE TABLE `ds_base_dictionaries`  (
  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_dic_key` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_dic_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_dic_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_dic_describe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_dictionaries
-- ----------------------------
INSERT INTO `ds_base_dictionaries` VALUES ('0', '0', '主键', 'ds_dic_key', '');
INSERT INTO `ds_base_dictionaries` VALUES ('1', '1', '外键', 'ds_dic_key', '');
INSERT INTO `ds_base_dictionaries` VALUES ('2', '2', '值', 'ds_dic_key', '');
INSERT INTO `ds_base_dictionaries` VALUES ('3', '0', '文本', 'ds_dic_fields_type', '');
INSERT INTO `ds_base_dictionaries` VALUES ('4', '1', '下拉框', 'ds_dic_fields_type', '');
INSERT INTO `ds_base_dictionaries` VALUES ('51', '0', 'base', 'ds_dic_system_name', '');
INSERT INTO `ds_base_dictionaries` VALUES ('101', '0', 'ds_base_tables', 'ds_dic_tables', '');
INSERT INTO `ds_base_dictionaries` VALUES ('103', '2', 'ds_base_dictionaries', 'ds_dic_tables', '');
INSERT INTO `ds_base_dictionaries` VALUES ('102', '1', 'ds_base_fields', 'ds_dic_tables', '');
INSERT INTO `ds_base_dictionaries` VALUES ('201', '0', 'ds_dic_key', 'ds_dic_name', '主键外键字典');
INSERT INTO `ds_base_dictionaries` VALUES ('202', '1', 'ds_dic_fields_type', 'ds_dic_name', '字段类型');
INSERT INTO `ds_base_dictionaries` VALUES ('203', '2', 'ds_dic_system_name', 'ds_dic_name', '系统字典');
INSERT INTO `ds_base_dictionaries` VALUES ('204', '3', 'ds_dic_tables', 'ds_dic_name', '表字典');
INSERT INTO `ds_base_dictionaries` VALUES ('104', '3', 'ds_base_dic_map', 'ds_dic_tables', NULL);
INSERT INTO `ds_base_dictionaries` VALUES ('205', '4', 'ds_dic_name', 'ds_dic_name', '字典字典');
INSERT INTO `ds_base_dictionaries` VALUES ('105', '5', 'ds_base_user', 'ds_dic_tables', '');
INSERT INTO `ds_base_dictionaries` VALUES ('301', '0', 'superadmin', 'ds_dic_jurisdiction', NULL);
INSERT INTO `ds_base_dictionaries` VALUES ('206', '5', 'ds_dic_jurisdiction', 'ds_dic_name', '权限字典');
INSERT INTO `ds_base_dictionaries` VALUES ('106', '4', 'ds_base_jurisdiction', 'ds_dic_tables', '');

-- ----------------------------
-- Table structure for ds_base_fields
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_fields`;
CREATE TABLE `ds_base_fields`  (
  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_field_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_field_describe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_belong_table_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_init_data` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_key_type` int(10) NOT NULL DEFAULT 0,
  `ds_key_dic_foreign` int(20) NULL DEFAULT NULL,
  `ds_field_type` int(10) NOT NULL DEFAULT 0,
  `ds_key_foreign` int(10) NULL DEFAULT NULL,
  INDEX `ds_fields_tables_key`(`ds_belong_table_name`) USING BTREE,
  CONSTRAINT `ds_fields_tables_key` FOREIGN KEY (`ds_belong_table_name`) REFERENCES `ds_base_tables` (`ds_table_name`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_fields
-- ----------------------------
INSERT INTO `ds_base_fields` VALUES ('0', 'id', '基础数据表id', '0', NULL, 0, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('1', 'ds_table_name', '基础数据表名', '0', NULL, 2, 3, 1, NULL);
INSERT INTO `ds_base_fields` VALUES ('2', 'ds_table_describe', '表的描述', '0', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('3', 'ds_table_system', '表所属的系统', '0', NULL, 2, 2, 1, NULL);
INSERT INTO `ds_base_fields` VALUES ('11', 'id', '基础字段表的id', '1', NULL, 0, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('12', 'ds_field_name', '字段名', '1', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('13', 'ds_field_describe', '字段描述', '1', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('14', 'ds_field_belong_table_name', '字段所属表', '1', NULL, 2, 3, 1, NULL);
INSERT INTO `ds_base_fields` VALUES ('15', 'ds_init_data', '字段初始值', '1', NULL, 0, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('16', 'ds_key_type', '字段键类型', '1', NULL, 2, 0, 1, NULL);
INSERT INTO `ds_base_fields` VALUES ('17', 'ds_key_dic_foreign', '下拉框所属字典', '1', NULL, 2, 3, 1, NULL);
INSERT INTO `ds_base_fields` VALUES ('18', 'ds_field_type', '字段类型', '1', NULL, 2, 1, 1, NULL);
INSERT INTO `ds_base_fields` VALUES ('19', 'ds_key_foreign', '外键所连表', '1', NULL, 2, 3, 1, NULL);
INSERT INTO `ds_base_fields` VALUES ('31', 'id', '基础字典表id', '2', NULL, 0, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('32', 'ds_dic_key', '字典键值', '2', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('33', 'ds_dic_value', '字典值', '2', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('34', 'ds_dic_name', '字典名', '2', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('35', 'ds_dic_describe', '字典键描述', '2', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('36', 'id', '字典字典映射表id', '3', NULL, 0, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('37', 'ds_table_dic_id', '表名', '3', NULL, 2, 3, 1, NULL);
INSERT INTO `ds_base_fields` VALUES ('38', 'ds_field_dic_name', '字段名', '3', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('39', 'ds_dic_id', '字典名', '3', NULL, 2, 4, 1, NULL);
INSERT INTO `ds_base_fields` VALUES ('51', 'id', '用户表id', '5', NULL, 0, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('52', 'ds_user_account', '用户账号', '5', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('53', 'ds_user_password', '用户密码', '5', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('54', 'ds_user_name', '用户名', '5', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('55', 'ds_user_jurisdiction', '用户权限', '5', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('61', 'id', '权限表id', '4', NULL, 0, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('62', 'ds_jurisdiction_name', '权限名', '4', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('63', 'ds_jurisdiction_table', '权限表名', '4', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('64', 'ds_jurisdiction_C', '是否允许增加', '4', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('65', 'ds_jurisdiction_U', '是否允许更新', '4', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('66', 'ds_jurisdiction_R', '是否允许查询', '4', NULL, 2, NULL, 0, NULL);
INSERT INTO `ds_base_fields` VALUES ('67', 'ds_jurisdiction_D', '是否允许删除', '4', NULL, 2, NULL, 0, NULL);

-- ----------------------------
-- Table structure for ds_base_jurisdiction
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_jurisdiction`;
CREATE TABLE `ds_base_jurisdiction`  (
  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_jurisdiction_name` int(11) NULL DEFAULT NULL,
  `ds_jurisdiction_table` int(11) NULL DEFAULT NULL,
  `ds_jurisdiction_C` int(11) NULL DEFAULT NULL,
  `ds_jurisdiction_U` int(11) NULL DEFAULT NULL,
  `ds_jurisdiction_R` int(11) NULL DEFAULT NULL,
  `ds_jurisdiction_D` int(11) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_jurisdiction
-- ----------------------------

-- ----------------------------
-- Table structure for ds_base_tables
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_tables`;
CREATE TABLE `ds_base_tables`  (
  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_table_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_table_describe` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_table_system` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  INDEX `ds_table_name`(`ds_table_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_tables
-- ----------------------------
INSERT INTO `ds_base_tables` VALUES ('0', '0', '基础数据表', '0');
INSERT INTO `ds_base_tables` VALUES ('1', '1', '基础字段表', '0');
INSERT INTO `ds_base_tables` VALUES ('2', '2', '基础字典表', '0');
INSERT INTO `ds_base_tables` VALUES ('3', '3', '字典字段映射表', '0');
INSERT INTO `ds_base_tables` VALUES ('4', '5', '基础用户表', '0');
INSERT INTO `ds_base_tables` VALUES ('5', '4', '基础权限表', '0');

-- ----------------------------
-- Table structure for ds_base_user
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_user`;
CREATE TABLE `ds_base_user`  (
  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_user_account` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_user_password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_user_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_user_jurisdiction` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_user
-- ----------------------------
INSERT INTO `ds_base_user` VALUES ('0', 'admin', 'admin', '超级管理员', 'superadmin');

SET FOREIGN_KEY_CHECKS = 1;
