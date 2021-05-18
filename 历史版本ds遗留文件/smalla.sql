/*
 Navicat Premium Data Transfer

 Source Server         : damon_dong_47_102_97_25
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : 47.102.97.25:3308
 Source Schema         : smalla

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 09/04/2021 12:37:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for basedepartment
-- ----------------------------
DROP TABLE IF EXISTS `basedepartment`;
CREATE TABLE `basedepartment`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `department_id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `department_name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of basedepartment
-- ----------------------------
INSERT INTO `basedepartment` VALUES ('15589421956703814', '1', '行政');
INSERT INTO `basedepartment` VALUES ('15589422008215688', '2', '开发');
INSERT INTO `basedepartment` VALUES ('15589422073820960', '3', '设计');

-- ----------------------------
-- Table structure for basedictionaries
-- ----------------------------
DROP TABLE IF EXISTS `basedictionaries`;
CREATE TABLE `basedictionaries`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dictionaries_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `dictionaries_describe` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of basedictionaries
-- ----------------------------
INSERT INTO `basedictionaries` VALUES ('1', 'basejudge', '允许判断');
INSERT INTO `basedictionaries` VALUES ('15583154069411284', 'ceshilist', '测试字典');
INSERT INTO `basedictionaries` VALUES ('15585797916955808', 'logtype', '日志类型');
INSERT INTO `basedictionaries` VALUES ('2', 'basekey', '是否判断');
INSERT INTO `basedictionaries` VALUES ('3', 'basefieldtype', '字段类型');
INSERT INTO `basedictionaries` VALUES ('4', 'basetabletype', '表类型');

-- ----------------------------
-- Table structure for basedictionariescatalog
-- ----------------------------
DROP TABLE IF EXISTS `basedictionariescatalog`;
CREATE TABLE `basedictionariescatalog`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dictionaries_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `table_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `field_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `dictionaries_type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of basedictionariescatalog
-- ----------------------------
INSERT INTO `basedictionariescatalog` VALUES ('1', 'basejudge', 'basetable', 'C', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('15583254461248236', 'basekey', 'leavenote', 'ratify', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('15583279718784968', 'basekey', 'scholarship', 'ratify', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('15583385959114108', 'ceshilist', 'leavenote', 'offState', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('15585799243427924', 'logtype', 'baselogger', 'log_type', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('15586632374808790', 'basejudge', 'basetable', 'is_operate', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('15586685522739488', 'basekey', 'basefields', 'is_pagination', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('15591112078883900', 'basekey', 'basenotices', 'isread', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('15591156634303556', 'basekey', 'basetable', 'is_workflow', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('15657930895837544', 'basekey', 'treenodes', 'isleaf', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('2', 'basejudge', 'basetable', 'U', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('3', 'basejudge', 'basetable', 'D', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('4', 'basejudge', 'basefields', 'C', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('5', 'basejudge', 'basefields', 'U', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('6', 'basekey', 'basefields', 'is_key', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('7', 'basefieldtype', 'basefields', 'field_type', 'static');
INSERT INTO `basedictionariescatalog` VALUES ('8', 'basetabletype', 'basetable', 'table_type', 'static');

-- ----------------------------
-- Table structure for basedictionariesdata
-- ----------------------------
DROP TABLE IF EXISTS `basedictionariesdata`;
CREATE TABLE `basedictionariesdata`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `base_key` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `base_value` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `dictionaries_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `key_describe` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of basedictionariesdata
-- ----------------------------
INSERT INTO `basedictionariesdata` VALUES ('1', '0', '不允许', 'basejudge', NULL);
INSERT INTO `basedictionariesdata` VALUES ('15583385722331604', '0', '请假中', 'ceshilist', NULL);
INSERT INTO `basedictionariesdata` VALUES ('15583385898877042', '1', '请假成功', 'ceshilist', 'null');
INSERT INTO `basedictionariesdata` VALUES ('15585799141267942', 'info', 'info', 'logtype', '应用程序的运行过程');
INSERT INTO `basedictionariesdata` VALUES ('15585800589250780', 'debug', 'debug', 'logtype', '信息事件');
INSERT INTO `basedictionariesdata` VALUES ('15585800740050618', 'warn', 'warn', 'logtype', '出现潜在错误的情形');
INSERT INTO `basedictionariesdata` VALUES ('15585801018069576', 'error', 'error', 'logtype', '发生错误事件,不影响系统运行');
INSERT INTO `basedictionariesdata` VALUES ('15585801563990704', 'fatal', 'fatal', 'logtype', '导致应用程序的退出');
INSERT INTO `basedictionariesdata` VALUES ('15666678887069380', '2', '外键', 'basekey', '无');
INSERT INTO `basedictionariesdata` VALUES ('2', '1', '允许', 'basejudge', NULL);
INSERT INTO `basedictionariesdata` VALUES ('3', '0', '值', 'basekey', 'null');
INSERT INTO `basedictionariesdata` VALUES ('4', '1', '主键', 'basekey', 'null');
INSERT INTO `basedictionariesdata` VALUES ('5', 'text', '文本框', 'basefieldtype', NULL);
INSERT INTO `basedictionariesdata` VALUES ('6', 'select', '下拉列表', 'basefieldtype', NULL);
INSERT INTO `basedictionariesdata` VALUES ('7', 'base', '基础表', 'basetabletype', NULL);
INSERT INTO `basedictionariesdata` VALUES ('8', 'work', '工作表', 'basetabletype', NULL);

-- ----------------------------
-- Table structure for basefields
-- ----------------------------
DROP TABLE IF EXISTS `basefields`;
CREATE TABLE `basefields`  (
  `id` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `field_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `field_describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `init_data` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `table_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `C` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1',
  `U` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1',
  `is_key` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `field_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `is_pagination` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `is_key2_table_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of basefields
-- ----------------------------
INSERT INTO `basefields` VALUES ('0', 'id', '数据表id', NULL, 'basetable', '0', '0', '1', 'text', NULL, NULL);
INSERT INTO `basefields` VALUES ('00', 'table_name', '数据表名', NULL, 'basetable', '1', '0', '0', 'text', NULL, NULL);
INSERT INTO `basefields` VALUES ('000', 'table_describe', '数据表描述', NULL, 'basetable', '1', '1', '0', 'text', NULL, NULL);
INSERT INTO `basefields` VALUES ('0000', 'C', '增加内容允许', '1', 'basetable', '1', '1', '0', 'select', NULL, NULL);
INSERT INTO `basefields` VALUES ('00000', 'U', '更新内容允许', '1', 'basetable', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('000000', 'D', '删除内容允许', '1', 'basetable', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('0000000', 'table_type', '数据库表类型', 'work', 'basetable', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('1', 'id', '字段id', NULL, 'basefields', '0', '0', '1', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('10', 'field_name', '字段名', NULL, 'basefields', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('100', 'field_describe', '字段描述', NULL, 'basefields', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('1000', 'init_data', '字段默认值', NULL, 'basefields', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('10000', 'table_name', '所属表名', 'null', 'basefields', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('100000', 'C', '是否允许添加值', '1', 'basefields', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('1000000', 'U', '是否允许修改值', '1', 'basefields', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('10000000', 'is_key', '是否是主键', '0', 'basefields', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('100000000', 'field_type', '字段类型', 'text', 'basefields', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('15574543669434044', 'id', '请假单id', '', 'leavenote', '0', '0', '1', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15574544012071316', 'name', '请假人', '他', 'leavenote', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15574544773117784', 'starttime', '开始时间', '1990-3-4', 'leavenote', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15574548154562484', 'endtime', '结束时间', '2012-2-1', 'leavenote', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15579895142510792', 'id', '基础字典目录表id', '', 'basedictionariescatalog', '0', '0', '1', NULL, '0', NULL);
INSERT INTO `basefields` VALUES ('15579896047881486', 'dictionaries_name', '字典名', 'basejudge', 'basedictionariescatalog', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15579896511325364', 'table_name', '所在表名', 'null', 'basedictionariescatalog', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15579896828945686', 'field_name', '所属字段名', 'null', 'basedictionariescatalog', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15579897119252172', 'id', '基础字典数据id', '', 'basedictionariesdata', '0', '0', '1', NULL, '0', NULL);
INSERT INTO `basefields` VALUES ('15579897774533562', 'base_key', '字典键值', '0', 'basedictionariesdata', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15579897947494312', 'base_value', '字典值', 'null', 'basedictionariesdata', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15579898195196516', 'dictionaries_name', '字典名', 'null', 'basedictionariesdata', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15580000521390528', 'dictionaries_type', '字典类型', 'static', 'basedictionariescatalog', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15580624644096728', 'id', '基础字典表id', '', 'basedictionaries', '0', '0', '1', NULL, '0', NULL);
INSERT INTO `basefields` VALUES ('15580625027695890', 'dictionaries_name', '字典名', 'basejudge', 'basedictionaries', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15580625205777538', 'dictionaries_describe', '字典描述', '否', 'basedictionaries', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15583254461248236', 'ratify', '是否批准', '1', 'leavenote', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('15583279209422768', 'id', '申请奖学金id', '', 'scholarship', '0', '0', '1', NULL, '0', NULL);
INSERT INTO `basefields` VALUES ('15583279453838972', 'name', '申请者', '董富宝', 'scholarship', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15583279718784968', 'ratify', '是否批准', '1', 'scholarship', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('15583385959114108', 'offState', '请假状态', '0', 'leavenote', '1', '1', '0', 'select', '1', NULL);
INSERT INTO `basefields` VALUES ('15585791622172400', 'id', '日志表id', '', 'baselogger', '0', '0', '1', NULL, '0', NULL);
INSERT INTO `basefields` VALUES ('15585799243427924', 'log_type', '日志类型', 'info', 'baselogger', '1', '1', '0', 'select', '1', NULL);
INSERT INTO `basefields` VALUES ('15585799825993222', 'key_describe', '键值描述', '无', 'basedictionariesdata', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15585802372491670', 'log_content', '日志内容', '无', 'baselogger', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15585802871926356', 'log_time', '日志产生时间', '2019-05-25 10:57:23', 'baselogger', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15586632374808790', 'is_operate', '是否允许操作', '0', 'basetable', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('15586685522739488', 'is_pagination', '控制页签', '0', 'basefields', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('15589418523284460', 'id', '基础用户表id', '', 'baseusers', '0', '0', '1', NULL, NULL, NULL);
INSERT INTO `basefields` VALUES ('15589419249681724', 'user_id', '用户账户', 'admin', 'baseusers', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15589419506626456', 'user_name', '用户名', '系统A', 'baseusers', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15589421211754914', 'id', '基础部门表id', '', 'basedepartment', '0', '0', '1', NULL, NULL, NULL);
INSERT INTO `basefields` VALUES ('15589421623430136', 'department_id', '部门号', '1', 'basedepartment', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15589421851672132', 'department_name', '部门名', '系统', 'basedepartment', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15590932424078804', 'id', '通知统计表id', '', 'basenotices', '0', '0', '1', NULL, NULL, NULL);
INSERT INTO `basefields` VALUES ('15590933156419350', 'user_id', '用户id', '1', 'basenotices', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15590933337434588', 'department_id', '部门id', '1', 'basenotices', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15590933639592988', 'table_name', '通知操作表名', '1', 'basenotices', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15590933864171100', 'rowid', '所在表行id', '1', 'basenotices', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15591112078883900', 'isread', '是否已经发送', '0', 'basenotices', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('15591156634303556', 'is_workflow', '是否支持工作流', '0', 'basetable', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('15595437996633884', 'user_password', '用户密码', '111111', 'baseusers', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15625023323853114', 'id', '基础getway服务表id', '', 'basegetwayserve', '0', '0', '1', NULL, NULL, NULL);
INSERT INTO `basefields` VALUES ('15625025606030280', 'serveraddress', '服务地址', 'http://localhost:8080/', 'basegetwayserve', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15625026056118784', 'serversystem', '服务系统', 'system(英文名)', 'basegetwayserve', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15625026682590424', 'serversedescribe', '服务描述', '服务', 'basegetwayserve', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15645653916088276', 'id', '反馈建议表id', '', 'hm_advice', '0', '0', '1', NULL, NULL, NULL);
INSERT INTO `basefields` VALUES ('15645654275611418', 'title', '标题', '11', 'hm_advice', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15645654441442154', 'date', '发布日期', '1', 'hm_advice', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15645654530888546', 'content', '内容', '1', 'hm_advice', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15645654654884940', 'file', '文件路径', '1', 'hm_advice', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15657928204247924', 'id', '节点目录设置id', '', 'treenodes', '0', '0', '1', NULL, NULL, NULL);
INSERT INTO `basefields` VALUES ('15657929400582788', 'wid', '唯一鉴别值', '0', 'treenodes', '1', '0', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15657929718194608', 'upwid', '所属父wid', 'null', 'treenodes', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15657929938679684', 'icon', '前面地图标', 'null', 'treenodes', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15657930095171852', 'title', '所属名', 'null', 'treenodes', '1', '1', '0', 'text', '0', NULL);
INSERT INTO `basefields` VALUES ('15657930895837544', 'isleaf', '是否为叶子节点', 'null', 'treenodes', '1', '1', '0', 'select', '0', NULL);
INSERT INTO `basefields` VALUES ('15666680247040460', 'isW', '测试外键', '1', 'treenodes', '1', '1', '2', 'text', '0', 'hm_advice');

-- ----------------------------
-- Table structure for basegetwayserve
-- ----------------------------
DROP TABLE IF EXISTS `basegetwayserve`;
CREATE TABLE `basegetwayserve`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `serveraddress` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `serversystem` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `serversedescribe` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of basegetwayserve
-- ----------------------------
INSERT INTO `basegetwayserve` VALUES ('15625027552980194', 'http://localhost:9080', 'dsapi', 'ds开发客户端');
INSERT INTO `basegetwayserve` VALUES ('15626780187684768', 'http://localhost:9081', 'schoolManageApi', 'x校园资讯系统服务');

-- ----------------------------
-- Table structure for baselogger
-- ----------------------------
DROP TABLE IF EXISTS `baselogger`;
CREATE TABLE `baselogger`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `log_type` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `log_content` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `log_time` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of baselogger
-- ----------------------------
INSERT INTO `baselogger` VALUES ('15586713583628876', 'debug', '无', '2019-05-25 10:57:23');
INSERT INTO `baselogger` VALUES ('15586713677057648', 'warn', '无', '2019-05-25 10:57:23');
INSERT INTO `baselogger` VALUES ('15586735159058648', 'info', '无', '2019-05-25 10:57:23');
INSERT INTO `baselogger` VALUES ('15586735173784274', 'info', '无', '2019-05-25 10:57:23');
INSERT INTO `baselogger` VALUES ('15586735184838912', 'info', '无', '2019-05-25 10:57:23');

-- ----------------------------
-- Table structure for basenotices
-- ----------------------------
DROP TABLE IF EXISTS `basenotices`;
CREATE TABLE `basenotices`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `department_id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `table_name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `rowid` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `isread` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of basenotices
-- ----------------------------
INSERT INTO `basenotices` VALUES ('15596276269722424', '15589420772393712', '', 'leavenote', '15595312999903732', '0');
INSERT INTO `basenotices` VALUES ('15596276269726928', '15589420678702226', '', 'leavenote', '15595312999903732', '1');
INSERT INTO `basenotices` VALUES ('15596277156985996', '15589420772393712', '', 'leavenote', '15595312999903732', '0');
INSERT INTO `basenotices` VALUES ('15596277156997700', '15589420678702226', '', 'leavenote', '15595312999903732', '1');
INSERT INTO `basenotices` VALUES ('15596277499822404', '15589420678702226', '', 'leavenote', '2', '1');
INSERT INTO `basenotices` VALUES ('15596277499826994', '15589420772393712', '', 'leavenote', '2', '0');

-- ----------------------------
-- Table structure for basetable
-- ----------------------------
DROP TABLE IF EXISTS `basetable`;
CREATE TABLE `basetable`  (
  `id` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `table_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `table_describe` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `C` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `U` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `D` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `table_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `is_operate` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `is_workflow` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of basetable
-- ----------------------------
INSERT INTO `basetable` VALUES ('1', 'basefields', '基础字段表', '1', '1', '1', 'base', '0', '0');
INSERT INTO `basetable` VALUES ('15574543669434044', 'leavenote', '请假单', '1', '1', '1', 'work', '1', '1');
INSERT INTO `basetable` VALUES ('15579895142510792', 'basedictionariescatalog', '基础字典目录表', '1', '1', '1', 'base', '0', '0');
INSERT INTO `basetable` VALUES ('15579897119252172', 'basedictionariesdata', '基础字典数据', '1', '1', '1', 'base', '0', '0');
INSERT INTO `basetable` VALUES ('15580624644096728', 'basedictionaries', '基础字典表', '1', '1', '1', 'base', '1', '0');
INSERT INTO `basetable` VALUES ('15583279209422768', 'scholarship', '申请奖学金', '1', '1', '1', 'work', '1', '1');
INSERT INTO `basetable` VALUES ('15585791622172400', 'baselogger', '日志表', '1', '1', '1', 'base', '1', '0');
INSERT INTO `basetable` VALUES ('15589418523284460', 'baseusers', '基础用户表', '1', '1', '1', 'base', '1', '0');
INSERT INTO `basetable` VALUES ('15589421211754914', 'basedepartment', '基础部门表', '1', '1', '1', 'base', '1', '0');
INSERT INTO `basetable` VALUES ('15590932424078804', 'basenotices', '通知统计表', '1', '1', '1', 'base', '1', '0');
INSERT INTO `basetable` VALUES ('15625023323853114', 'basegetwayserve', '基础getway服务表', '1', '1', '1', 'base', '1', '0');
INSERT INTO `basetable` VALUES ('15645653916088276', 'hm_advice', '反馈建议表', '1', '1', '1', 'work', '1', '0');
INSERT INTO `basetable` VALUES ('15657928204247924', 'treenodes', '节点目录设置', '1', '1', '1', 'work', '1', '0');
INSERT INTO `basetable` VALUES ('2', 'basetable', '基础数据表', '1', '1', '1', 'base', '1', '0');

-- ----------------------------
-- Table structure for baseusers
-- ----------------------------
DROP TABLE IF EXISTS `baseusers`;
CREATE TABLE `baseusers`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_password` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_jurisdiction` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of baseusers
-- ----------------------------
INSERT INTO `baseusers` VALUES ('15589420678702226', 'admin', '系统A', 'admin', 'ds_superadmin');
INSERT INTO `baseusers` VALUES ('15589420772393712', 'admina', '系统B', '111111', 'ds_superadmin');
INSERT INTO `baseusers` VALUES ('15627664312700122', 'admin2', NULL, 'admin2', 'ds_superadmin');

-- ----------------------------
-- Table structure for hm_advice
-- ----------------------------
DROP TABLE IF EXISTS `hm_advice`;
CREATE TABLE `hm_advice`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `date` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `file` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of hm_advice
-- ----------------------------

-- ----------------------------
-- Table structure for leavenote
-- ----------------------------
DROP TABLE IF EXISTS `leavenote`;
CREATE TABLE `leavenote`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `starttime` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `endtime` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ratify` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `offState` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of leavenote
-- ----------------------------
INSERT INTO `leavenote` VALUES ('15574548547191776', '董富宝', '2019-5-10', '2019-5-12', '0', '0');
INSERT INTO `leavenote` VALUES ('15583266072893504', '皮卡丘', '1990-3-4', '2012-2-1', '0', '1');
INSERT INTO `leavenote` VALUES ('15595312999903732', '他', '1990-3-4', '2012-2-1', '1', '0');
INSERT INTO `leavenote` VALUES ('2', '22', '33', '44', '1', '0');

-- ----------------------------
-- Table structure for scholarship
-- ----------------------------
DROP TABLE IF EXISTS `scholarship`;
CREATE TABLE `scholarship`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ratify` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of scholarship
-- ----------------------------
INSERT INTO `scholarship` VALUES ('15583280031591152', '董富宝', '0');
INSERT INTO `scholarship` VALUES ('15583280066006792', '董富宝', '0');

-- ----------------------------
-- Table structure for treenodes
-- ----------------------------
DROP TABLE IF EXISTS `treenodes`;
CREATE TABLE `treenodes`  (
  `id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `wid` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `upwid` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `icon` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `title` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `isleaf` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `isW` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of treenodes
-- ----------------------------
INSERT INTO `treenodes` VALUES ('15657931560628460', '0', '', '第一', '第一第一节点', '0', NULL);
INSERT INTO `treenodes` VALUES ('15657931853258340', '22', '', '第二', '第二第一节点', '0', NULL);
INSERT INTO `treenodes` VALUES ('15657932186614222', '2', '', '第三第一', '第三第一节点', '0', NULL);
INSERT INTO `treenodes` VALUES ('15657932681989856', '01', '0', '第一第二', '第一第二节点', '1', NULL);
INSERT INTO `treenodes` VALUES ('15657933128218628', '02', '0', '第一第三', '第一第三节点', '0', NULL);
INSERT INTO `treenodes` VALUES ('15663066543275224', '03', '', '下拉', '安徽省大家好', '0', NULL);

SET FOREIGN_KEY_CHECKS = 1;
