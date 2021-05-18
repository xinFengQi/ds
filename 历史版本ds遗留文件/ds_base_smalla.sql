/*
 Navicat Premium Data Transfer

 Source Server         : damon_dong_47_102_97_25
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : 47.102.97.25:3308
 Source Schema         : ds_base_smalla

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 09/04/2021 12:37:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blog_article
-- ----------------------------
DROP TABLE IF EXISTS `blog_article`;
CREATE TABLE `blog_article`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '文章名',
  `time` datetime(0) NOT NULL,
  `avter` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `looknum` int(11) NOT NULL,
  `likenum` int(11) NOT NULL DEFAULT 0,
  `replynum` int(11) NOT NULL DEFAULT 0,
  `content_text` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `content_file` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `content_md` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `tag` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `belong` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `secondbelong` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_article
-- ----------------------------
INSERT INTO `blog_article` VALUES ('15936673746867014', 'ds_is', 'ds_is', '测试的第一篇文章', '2020-07-02 13:23:16', '[\"ds0.0.2/img/HFxb1zAzeasLsiSCCjWS2Yhp.jpg\"]', 0, 0, 0, '测试这一次的前后端连调，我也不知道后端存了哪些内容和数据\n这个是加了文本域和文件和md编写的全部的展示，正常的只显示一种', '[\"ds0.0.2/img/5-xLUg3nKqnYfGmPSEeKjw6m.md\"]', '## 测试md文档在后端存了什么\n这是一个测试md数据\n## 主要是测试些换行的数据\n图片什么的暂时不测吧，肯定很多bug		\n还想测一测富文本		  \n图片及文件后期处理，先接后端请求		  \n```html\n<div>\n测试代码高亮\n</div>\n```\n', '[{\"value\":\"angular\",\"label\":\"angular\",\"checked\":true},{\"value\":\"java\",\"label\":\"java\"},{\"value\":\"前端\",\"label\":\"前端\",\"checked\":true},{\"value\":\"后端\",\"label\":\"后端\"}]', '前端', '15936605497017956', 'blog');
INSERT INTO `blog_article` VALUES ('15937781350502378', 'ds_is', 'ds_is', '搭建vue工程', '2020-06-29 20:09:03', '[\"ds0.0.2/img/0yEYq8PghyAD3E5SlPnlZCL5.jpg\"]', 0, 0, 0, NULL, 'null', NULL, '[{\"value\":\"angular\",\"label\":\"angular\",\"checked\":true},{\"value\":\"java\",\"label\":\"java\"},{\"value\":\"前端\",\"label\":\"前端\"},{\"value\":\"后端\",\"label\":\"后端\"}]', 'plan', '15937781182857116', 'plan');
INSERT INTO `blog_article` VALUES ('15937782013928620', 'ds_is', 'ds_is', '熟悉antV,增加各种组件及vuex联动', '2020-06-30 20:10:53', '[\"ds0.0.2/img/AWzwxUaMZ2EfqBdeBTE-dhew.jpg\"]', 0, 0, 0, NULL, 'null', NULL, '[{\"value\":\"angular\",\"label\":\"angular\"},{\"value\":\"java\",\"label\":\"java\"},{\"value\":\"前端\",\"label\":\"前端\"},{\"value\":\"后端\",\"label\":\"后端\"},{\"value\":\"plan\",\"label\":\"plan\",\"checked\":true}]', 'plan', '15937781182857116', 'plan');
INSERT INTO `blog_article` VALUES ('15937784064995704', 'ds_is', 'ds_is', '设计日历及目录，标签等联动', '2020-07-01 20:13:27', '[\"ds0.0.2/img/QJYhlds4T1uxGNdLm5UVw5Vc.jpg\"]', 0, 0, 0, NULL, 'null', NULL, '[{\"value\":\"angular\",\"label\":\"angular\"},{\"value\":\"java\",\"label\":\"java\"},{\"value\":\"前端\",\"label\":\"前端\"},{\"value\":\"后端\",\"label\":\"后端\"},{\"value\":\"plan\",\"label\":\"plan\",\"checked\":true}]', 'plan', '15937781182857116', 'plan');
INSERT INTO `blog_article` VALUES ('15937784473152812', 'ds_is', 'ds_is', '在ds中增加表，并增加定时器请求sql,完善跳转', '2020-07-02 20:14:58', '[\"ds0.0.2/img/P1Cjcfa4OAmvj2f3EiuIRb8k.jpg\"]', 0, 0, 0, NULL, 'null', NULL, '[{\"value\":\"angular\",\"label\":\"angular\"},{\"value\":\"java\",\"label\":\"java\"},{\"value\":\"前端\",\"label\":\"前端\"},{\"value\":\"后端\",\"label\":\"后端\"},{\"value\":\"plan\",\"label\":\"plan\",\"checked\":true}]', 'plan', '15937781182857116', 'plan');
INSERT INTO `blog_article` VALUES ('15937785138030724', 'ds_is', 'ds_is', '准备部署，重写后端，接入自己的getway中', '2020-07-03 20:16:11', '[\"ds0.0.2/img/9CTZCCSvO7qUkwEDAy7Eb_YC.jpg\"]', 0, 0, 0, NULL, 'null', NULL, '[{\"value\":\"angular\",\"label\":\"angular\"},{\"value\":\"java\",\"label\":\"java\"},{\"value\":\"前端\",\"label\":\"前端\"},{\"value\":\"后端\",\"label\":\"后端\"},{\"value\":\"plan\",\"label\":\"plan\",\"checked\":true}]', 'plan', '15937781182857116', 'plan');

-- ----------------------------
-- Table structure for blog_type
-- ----------------------------
DROP TABLE IF EXISTS `blog_type`;
CREATE TABLE `blog_type`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog_type
-- ----------------------------
INSERT INTO `blog_type` VALUES ('15936664991517628', 'blog', '博客', 'ds_is', 'ds_is');
INSERT INTO `blog_type` VALUES ('15936665066046664', 'plan', '计划', 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for bolg_summary_a
-- ----------------------------
DROP TABLE IF EXISTS `bolg_summary_a`;
CREATE TABLE `bolg_summary_a`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bolg_summary_a
-- ----------------------------
INSERT INTO `bolg_summary_a` VALUES ('15936602946207192', '前端', '前端', 'ds_is', 'ds_is');
INSERT INTO `bolg_summary_a` VALUES ('15936603106164704', '后端', '后端', 'ds_is', 'ds_is');
INSERT INTO `bolg_summary_a` VALUES ('15937781047923582', 'plan', 'plan', 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for bolg_summary_b
-- ----------------------------
DROP TABLE IF EXISTS `bolg_summary_b`;
CREATE TABLE `bolg_summary_b`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `belong` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `summary_key` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `summary_value` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bolg_summary_b
-- ----------------------------
INSERT INTO `bolg_summary_b` VALUES ('15936605497017956', 'ds_is', 'ds_is', '前端', 'angular', 'angular');
INSERT INTO `bolg_summary_b` VALUES ('15936606054205160', 'ds_is', 'ds_is', '前端', 'vue', 'vue');
INSERT INTO `bolg_summary_b` VALUES ('15936606151026602', 'ds_is', 'ds_is', '后端', 'java', 'java');
INSERT INTO `bolg_summary_b` VALUES ('15937781182857116', 'ds_is', 'ds_is', 'plan', 'plan', 'plan');

-- ----------------------------
-- Table structure for bolg_tag
-- ----------------------------
DROP TABLE IF EXISTS `bolg_tag`;
CREATE TABLE `bolg_tag`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bolg_tag
-- ----------------------------
INSERT INTO `bolg_tag` VALUES ('15936591939589524', 'angular', 'angular', 'ds_is', 'ds_is');
INSERT INTO `bolg_tag` VALUES ('15936592491263132', 'java', 'java', 'ds_is', 'ds_is');
INSERT INTO `bolg_tag` VALUES ('15936592561849848', '前端', '前端', 'ds_is', 'ds_is');
INSERT INTO `bolg_tag` VALUES ('15936592661525484', '后端', '后端', 'ds_is', 'ds_is');
INSERT INTO `bolg_tag` VALUES ('15937781730174478', 'plan', 'plan', 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for ds03_document
-- ----------------------------
DROP TABLE IF EXISTS `ds03_document`;
CREATE TABLE `ds03_document`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds03_document_pid` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `ds03_document_content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `ds03_document_author` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '沙雕网友',
  `ds03_document_time` datetime(0) NOT NULL,
  `ds03_document_title` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'md_summary',
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds03_document
-- ----------------------------
INSERT INTO `ds03_document` VALUES ('15771770563003060', 'ds_is', 'ds_is', 'root', NULL, '沙雕网友', '2019-12-24 16:44:16', 'Ds开发文档', 'md_summary');
INSERT INTO `ds03_document` VALUES ('15771771405130084', 'ds_is', 'ds_is', '15771770563003060', '# 不该写，写两次都被自己干掉了\n# 问题\n1. 这个文档只是算一个练手之做吧，其中东西确实做的垃圾，但是现在只能这样了，对于ngrx的理解确实比之前没有操作时，深太多了\n2. 下一个要做插件了，主要是为了看下syetemjs这个东西，应该会接触到一些打包的东西，我果然只有在实际项目中才能找到一些感觉，不然看的太多完全没用\n3. 搜索也没有写，果然一个东西真的需要很久很久呀，好高骛远真的不行，但是世界的节奏又太快了\n\n\n\n# 关于插件页面的问题\n1. 开发，增发完之后，增加插件时，插件名一定要和自己开发的插件名相同，同时插件是有着依赖的，如果插件管理插件没有此依赖，就会报错【未解决】\n3. pubilc-api.ts里，新增的插件一定要用createPlugin构造出来\n```\nexport function createPlugin(config: {\n  name: string;\n  module: Type<any>;\n  component: Type<any>\n}) {\n  return new NgPlugin(config.name, config.module, config.component);\n}\nexport class NgPlugin {\n  constructor(\n    public name: string,\n    public module: Type<any>,\n    public component: Type<any>) {\n  }\n}\n```', '沙雕网友', '2019-12-24 16:45:41', '记录文档', 'md_text');
INSERT INTO `ds03_document` VALUES ('15771784343490528', 'ds_is', 'ds_is', 'root', NULL, '沙雕网友', '2019-12-24 17:07:33', '杂记', 'md_summary');
INSERT INTO `ds03_document` VALUES ('15771784745674708', 'ds_is', 'ds_is', '15771784343490528', '# 不能再这里写，自己的东西，太多的bug了\n\n就是想写一些东西，可是每次想写的时候都不知道如何动笔，真是艰难，后面的东西不想学了，很多东西想做的完美，但是太难了，细细打磨真的是没有时间，也没有毅力，这和以前写小说太想了，主要是写小说看不到前路，这个起码能有口饭吃，哎，太难。\n文档和插件页面其实也好的差不多了，大致的架子搭起来了，开发在ds2中也还勉强可以用了，虽然在记事本记了很多bug.\n\n![](http://47.102.97.25:9081/getWay/ds_file/base/picDownload/adggRnxI6Zhp-urq3Ozi0T7O.jpg)\n\n不知道怎么的修改，最后还是把所有东西放到了一起，做出来了这个东西，没有意思，虽然在不断的修改，但是总感觉稍微有一点瑕疵。就不想要了，东西有时候又是越做越回去，很多时候我以为曾经的那些开发方案没有意义了，可是最后剩下的只有那些开发方案了，最后到底我最后还是在坚持什么呢？\n我很认真的转行了，以为抓住了时代的末尾，但是一转头，发现自己最后的思想才是对的，那么这一年又是否是浪费了呢，我不知道，也不想知道，东西最后是做了，不喜欢的地方太多了，从二月份开始构思，到后期的ds1,2,3三个版本，还是没有做到我最后喜欢的那个版本，虽然最后都是工作流那个停止了，3的版本还没有启动，也不想集成进去了，\n那么最后编辑器的任务估计是搞不定了，用最后的时间开发一个流程编辑器吧，然后就放弃这套系统，能干的事都干了，可以去学习其他东西了，拜拜\n\n测试增加', '沙雕网友', '2019-12-24 17:07:55', '杂记一', 'md_text');
INSERT INTO `ds03_document` VALUES ('15777579761556562', 'ds_is', 'ds_is', '15771770563003060', '<figure class=\"image image-style-side\"><img src=\"http://localhost:10002/base/picDownload/WR5tKT1byXGYGaQsn37a9WVx.jpg\"></figure><ul><li>adsdewr321123qweqwe</li><li>qweqweqwe</li></ul><h2>测试的中文</h2><ol><li>没有什么东西，图片暂时还没有解决，就是这样，先解决md渲染的，那个好看些</li><li>没有什么东西，图片暂时还没有解决，就是这样，先解决md渲染的，那个好看些</li><li>没有什么东西，图片暂时还没有解决，就是这样，先解决md渲染的，那个好看些</li><li>没有什么东西，图片暂时还没有解决，就是这样，先解决md渲染的，那个好看些</li><li>没有什么东西，图片暂时还没有解决，就是这样，先解决md渲染的，那个好看些</li><li>没有什么东西，图片暂时还没有解决，就是这样，先解决md渲染的，那个好看些</li><li>没有什么东西，图片暂时还没有解决，就是这样，先解决md渲染的，那个好看些</li><li>没有什么东西，图片暂时还没有解决，就是这样，先解决md渲染的，那个好看些</li><li>没有什么东西，图片暂时还没有解决，就是这样，先解决md渲染的，那个好看些</li><li>&nbsp;</li></ol>', '沙雕网友', '2019-12-31 10:06:16', '测试richtext', 'richtext_text');
INSERT INTO `ds03_document` VALUES ('15779483405164108', 'ds_is', 'ds_is', '15771784343490528', '增加目录又发现了一个bug，这个东西的bug真的是太多了。\n\n# 无聊就来打字吧\n\n不知道干吗了，想学不想学\n\n\n\n\n\n\n\n\n玩肯定都是别人玩剩下的，追不上，那就跟随别人，总是被打磨着自信，从哪里跌倒，就从哪里爬起来，哎\n\n\n\n\n前端用来吃饭，后端用来提升，是这样吗？', '沙雕网友', '2020-01-02 14:59:01', '杂记二', 'md_text');
INSERT INTO `ds03_document` VALUES ('15780190074519428', 'ds_is', 'ds_is', '15771770563003060', '# 测试随记\n\n## beforeEach\n在其中使用TestBed.configureTestingModule来构建测试模块，接受参数和NgModule无任何差异\n### 无模板（service, directive）\n### 有模板（component）\n\n测试与开发思考：功能与页面区分\n\n现在的开发出路在哪儿\n', '沙雕网友', '2020-01-03 10:36:47', 'Angular测试', 'md_text');
INSERT INTO `ds03_document` VALUES ('15793979073320500', 'ds_is', 'ds_is', '15771770563003060', '# angular7与angular8版本概述\n\n## 【构建】Bazel构建器\n\n1. 更快的构建时间\n2. 增量构建：您将能够仅构建和部署已更改的内容而不是整个应用程序。\n3. 您可以弹出Bazel文件，默认情况下它们是隐藏的。', '沙雕网友', '2020-01-19 09:38:27', 'angular7与8的比较', 'md_text');
INSERT INTO `ds03_document` VALUES ('15874382107711558', 'ds_is', 'ds_is', '42', '21', '沙雕网友', '2020-04-23 11:03:41', '42', 'md_summary');

-- ----------------------------
-- Table structure for ds03_typedic
-- ----------------------------
DROP TABLE IF EXISTS `ds03_typedic`;
CREATE TABLE `ds03_typedic`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds03_typedic
-- ----------------------------
INSERT INTO `ds03_typedic` VALUES ('15770889880055486', 'md_summary', 'md_summary', 'ds_is', 'ds_is');
INSERT INTO `ds03_typedic` VALUES ('15770890161330526', 'md_text', 'md_text', 'ds_is', 'ds_is');
INSERT INTO `ds03_typedic` VALUES ('15770890252864272', 'richtext_text', 'richtext_text', 'ds_is', 'ds_is');
INSERT INTO `ds03_typedic` VALUES ('15770890347654656', 'richtext_summary', 'richtext_summary', 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for ds3_homepage
-- ----------------------------
DROP TABLE IF EXISTS `ds3_homepage`;
CREATE TABLE `ds3_homepage`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds3_homepage
-- ----------------------------

-- ----------------------------
-- Table structure for ds3_plugin
-- ----------------------------
DROP TABLE IF EXISTS `ds3_plugin`;
CREATE TABLE `ds3_plugin`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_plugin_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_plugin_title` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_plugin_des` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_plugin_pluginurl` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_plugin_desurl` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `ds_plugin_avterurl` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds3_plugin
-- ----------------------------
INSERT INTO `ds3_plugin` VALUES ('15773303587057336', 'ds_is', 'ds_is', 'plugin-a', '测试插件', '测试插件，引用其他人的', '[\"ds0.0.2/img/61u3z-dkgup6npnmi6NHk18u.js\"]', '[\"ds0.0.2/img/raYvXQvKs0MideN3AgmSx-tE.jpg\"]', '[\"ds0.0.2/img/bwOK_MJAwXyDs5HW0TmiklVR.jpg\"]');
INSERT INTO `ds3_plugin` VALUES ('15773504943688620', 'ds_is', 'ds_is', 'plugin-b', '测试里面有http', '测试里面有http', '[\"ds0.0.3/plugin/plugin-b.umd.js\"]', '[\"ds0.0.3/plugin/bg047BDqPaPdxV5aJvFQGUjH.jpg\"]', '[\"ds0.0.3/plugin/UdujuuR3n3cIF7FPjhTMK443.jpg\"]');

-- ----------------------------
-- Table structure for ds_base_echartsetting
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_echartsetting`;
CREATE TABLE `ds_base_echartsetting`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_detele` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_belong_tablename` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_echarts_type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_echarts_x` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_echarts_y` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_echarts_tablename` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_echarts_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_echartextra` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_echartsetting
-- ----------------------------
INSERT INTO `ds_base_echartsetting` VALUES ('15709455867959208', 'ds_is', 'ds_is', 'ds_dic_base_table', 'ds_basepie', 'ds_table_type', NULL, 'ds_dic_base_table', 'bae_tabletype', '');
INSERT INTO `ds_base_echartsetting` VALUES ('15709785985305880', 'ds_is', 'ds_is', 'ds_dic_base_table', 'ds_basebardiagram', 'ds_table_name', NULL, 'ds_base_showlist', 'base_showlist', '');

-- ----------------------------
-- Table structure for ds_base_echartsettingfey
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_echartsettingfey`;
CREATE TABLE `ds_base_echartsettingfey`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_echarts_tablename` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_echarts_x` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_echarts_y` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `echertsetting_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_echartsettingfey
-- ----------------------------
INSERT INTO `ds_base_echartsettingfey` VALUES ('15715471260793526', 'ds_is', 'ds_is', 'ds_base_field', 'ds_field_tablename', NULL, '15709785985305880');

-- ----------------------------
-- Table structure for ds_base_field
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_field`;
CREATE TABLE `ds_base_field`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_field_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_field_describe` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_field_tablename` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_field_isemtry` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_not',
  `ds_field_initdata` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_field_type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_field_foreigntable` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_field_foreignfield` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_field_foreignvalue` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_field_show` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_field_btu_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_field_showsort` int(11) NOT NULL DEFAULT 0,
  `ds_btu_detele` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_field_span` int(11) NULL DEFAULT 8,
  `ds_field_inputspan` int(11) NOT NULL DEFAULT 12,
  `ds_field_labelspan` int(11) NULL DEFAULT 0,
  `ds_field_length` int(11) NOT NULL DEFAULT 250,
  PRIMARY KEY (`ds_id`) USING BTREE,
  INDEX `field_type`(`ds_field_type`) USING BTREE,
  INDEX `field_tablename`(`ds_field_tablename`) USING BTREE,
  INDEX `dield_foreigntable`(`ds_field_foreigntable`) USING BTREE,
  INDEX `field_isentry`(`ds_field_isemtry`) USING BTREE,
  INDEX `field_show`(`ds_field_show`) USING BTREE,
  CONSTRAINT `dield_foreigntable` FOREIGN KEY (`ds_field_foreigntable`) REFERENCES `ds_dic_base_table` (`ds_key`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `field_isemtry` FOREIGN KEY (`ds_field_isemtry`) REFERENCES `ds_dic_ifornot` (`ds_key`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `field_keytype` FOREIGN KEY (`ds_field_type`) REFERENCES `ds_dic_fieldtype` (`ds_key`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `field_show` FOREIGN KEY (`ds_field_show`) REFERENCES `ds_dic_ifornot` (`ds_key`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `field_tablename` FOREIGN KEY (`ds_field_tablename`) REFERENCES `ds_dic_base_table` (`ds_key`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_field
-- ----------------------------
INSERT INTO `ds_base_field` VALUES ('0', 'ds_id', '字段表id', 'ds_base_field', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 24, 12, 4, 250);
INSERT INTO `ds_base_field` VALUES ('1', 'ds_field_name', '字段名', 'ds_base_field', 'ds_not', '', 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 1, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('101', 'ds_id', '列表设置id', 'ds_base_showlist', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('102', 'ds_table_name', '设置所属表', 'ds_base_showlist', 'ds_not', NULL, 'ds_select', 'ds_dic_base_table', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('103', 'ds_field_id', '显示字段', 'ds_base_showlist', 'ds_not', NULL, 'ds_foreignkey', 'ds_base_field', 'ds_id', 'ds_field_describe', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('104', 'ds_is_sort', '是否可排序', 'ds_base_showlist', 'ds_not', 'ds_not', 'ds_select', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('105', 'ds_is_filter', '是否可过滤', 'ds_base_showlist', 'ds_not', 'ds_not', 'ds_select', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('106', 'ds_sort_num', '展示顺序', 'ds_base_showlist', 'ds_not', '', 'ds_sort', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('107', 'ds_belong_tablename', '字段所属表', 'ds_base_showlist', 'ds_not', NULL, 'ds_select', 'ds_dic_base_table', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('11', 'ds_field_foreignvalue', '字段关联字段值', 'ds_base_field', 'ds_is', NULL, 'ds_foreignkey', 'ds_base_field', 'ds_field_name', 'ds_field_describe', 'ds_not', NULL, 'ds_is', 10, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15704467924942516', 'ds_id', '測試表1的ds_id', 'ds_test2', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15704468195397866', 'test_ceshi1', '字段1', 'ds_test2', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706087022172952', 'ds_id', '按钮表的ds_id', 'ds_base_setbutton', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706087707199360', 'ds_btu_key', '按钮键值', 'ds_base_setbutton', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706088250003582', 'ds_btu_value', '按钮值', 'ds_base_setbutton', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706089110802284', 'ds_btu_describe', '再次确认描述', 'ds_base_setbutton', 'ds_is', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706089759124990', 'ds_id', '按钮类型的ds_id', 'ds_dic_btutype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157060897591249901', 'ds_key', '按钮类型的ds_key', 'ds_dic_btutype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157060897591249902', 'ds_value', '按钮类型的ds_value', 'ds_dic_btutype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706090610761560', 'ds_btu_type', '按钮类型', 'ds_base_setbutton', 'ds_not', 'modal', 'ds_select', 'ds_dic_btutype', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706094153756004', 'ds_field_btu_key', '按钮字段关联值', 'ds_base_field', 'ds_is', NULL, 'ds_foreignkey', 'ds_base_setbutton', 'ds_btu_key', 'ds_btu_value', 'ds_not', NULL, 'ds_is', 7, 'ds_is', 17, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706103463032008', 'ds_btu_update', '编辑', 'ds_base_setbutton', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706300004137532', 'ds_btu_fieldseting', '字段設置', 'ds_dic_base_table', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', 'DsFieldSettingComponent', 'ds_is', 8, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706300785003616', 'ds_btu_update', '編輯', 'ds_dic_base_table', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', 'DsFieldUpdataComponent', 'ds_is', 6, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706331087290594', 'ds_id', '記事本的ds_id', 'test_note', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 17, 16, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157063310872905941', 'ds_btu_update', '編輯', 'test_note', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157063310872905942', 'ds_btu_delete', '刪除', 'test_note', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15706331825930520', 'noto_text', '描述', 'test_note', 'ds_not', NULL, 'ds_textarea', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 17, 16, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15707298957837902', 'ds_btu_delete', '刪除', 'ds_dic_base_table', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', 'deleteTableOneData', 'ds_is', 7, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15707302916561726', 'ds_btu_update', '編輯', 'ds_base_field', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15707308330770604', 'ds_field_showsort', '字段編輯排序', 'ds_base_field', 'ds_not', '0', 'ds_sort', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 11, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15707314115406996', 'ds_id', '表按钮的ds_id', 'ds_base_tablebtu', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157073141154069961', 'ds_btu_update', '編輯', 'ds_base_tablebtu', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', 'DsFieldUpdataComponent', 'ds_is', 998, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157073141154069962', 'ds_btu_detele', '刪除', 'ds_base_tablebtu', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', 'deleteTableOneData', 'ds_is', 999, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15707362570985118', 'ds_btu_tablename', '按钮所属表', 'ds_base_tablebtu', 'ds_not', NULL, 'ds_select', 'ds_dic_base_table', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 2, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15707363315306972', 'ds_btu_btutype', '按钮类型', 'ds_base_tablebtu', 'ds_not', 'DsTableAddDataComponent', 'ds_foreignkey', 'ds_base_setbutton', 'ds_btu_key', 'ds_btu_value', 'ds_is', NULL, 'ds_is', 3, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15707366652103800', 'ds_btu_update', '編輯', 'ds_base_showlist', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', 'DsFieldUpdataComponent', 'ds_is', 998, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15707366872787712', 'ds_btu_delete', '删除', 'ds_base_showlist', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', 'deleteTableOneData', 'ds_is', 999, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15707634929867692', 'ds_btu_update', '编辑', 'ds_test2', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15707636860554560', 'ds_btu_detele', '删除', 'ds_test2', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15708502759340764', 'node_result', '是否解决', 'test_note', 'ds_not', 'ds_not', 'ds_select', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 5, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15708546850863432', 'ds_id', '优先级表的ds_id', 'ds_dic_priority', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157085468508634321', 'ds_btu_update', '編輯', 'ds_dic_priority', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157085468508634322', 'ds_btu_detele', '刪除', 'ds_dic_priority', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15708547296913120', 'ds_key', '优先级键', 'ds_dic_priority', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 1, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15708547780804892', 'ds_value', '优先级键值', 'ds_dic_priority', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 2, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15708550179786350', 'note_priority', '优先级', 'test_note', 'ds_not', '3', 'ds_select', 'ds_dic_priority', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 3, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15709401207424480', 'ds_id', '图表类型的ds_id', 'ds_dic_echartstype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157094012074244801', 'ds_btu_update', '編輯', 'ds_dic_echartstype', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157094012074244802', 'ds_btu_detele', '刪除', 'ds_dic_echartstype', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157094012074244803', 'ds_key', '图表类型的ds_key', 'ds_dic_echartstype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157094012074244804', 'ds_value', '图表类型的ds_value', 'ds_dic_echartstype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15709409236267702', 'ds_id', '图表设置的ds_id', 'ds_base_echartsetting', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157094092362677021', 'ds_btu_update', '編輯', 'ds_base_echartsetting', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157094092362677022', 'ds_btu_detele', '刪除', 'ds_base_echartsetting', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15709419140562250', 'ds_belong_tablename', '表名', 'ds_base_echartsetting', 'ds_not', NULL, 'ds_foreignkey', 'ds_dic_base_table', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15709420476187850', 'ds_echarts_type', '图表类型', 'ds_base_echartsetting', 'ds_not', NULL, 'ds_select', 'ds_dic_echartstype', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 1, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15709447547132258', 'ds_echarts_x', 'x轴字段', 'ds_base_echartsetting', 'ds_not', NULL, 'ds_foreignkey', 'ds_base_field', 'ds_field_name', 'ds_field_describe', 'ds_is', NULL, 'ds_is', 4, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15709452923934004', 'ds_echarts_y', 'y轴字段', 'ds_base_echartsetting', 'ds_is', '', 'ds_foreignkey', 'ds_base_field', 'ds_field_name', 'ds_field_describe', 'ds_is', NULL, 'ds_is', 5, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15709741174244344', 'ds_echarts_tablename', '数据所属表', 'ds_base_echartsetting', 'ds_not', NULL, 'ds_foreignkey', 'ds_dic_base_table', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 2, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15709800012957616', 'ds_id', '测试表2的ds_id', 'test2', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157098000129576161', 'ds_btu_update', '編輯', 'test2', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157098000129576162', 'ds_btu_detele', '刪除', 'test2', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 999, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15711404842111762', 'ds_echarts_id', '图表唯一标识', 'ds_base_echartsetting', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15711466727783208', 'ds_btu_detele', '删除', 'ds_dic_btutype', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 999, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15711466931882602', 'ds_btu_update', '編輯', 'ds_dic_btutype', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 998, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15711468672306192', 'ds_btu_update', '編輯', 'ds_dic_tabletype', 'ds_not', '998', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 998, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15711468948628800', 'ds_btu_detele', '删除', 'ds_dic_tabletype', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 999, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15711470534069392', 'ds_btu_update', '編輯', 'ds_dic_jurisdictiontype', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 998, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15711470798333216', 'ds_btu_detele', '删除', 'ds_dic_jurisdictiontype', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 999, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15711471733200882', 'ds_btu_update', '編輯', 'ds_dic_ifornot', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 998, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15711471897438656', 'ds_btu_detele', '删除', 'ds_dic_ifornot', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 999, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15711472528636088', 'ds_btu_update', '編輯', 'ds_dic_fieldtype', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 998, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15711473464340060', 'ds_btu_detele', '删除', 'ds_dic_fieldtype', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 999, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15712303644093508', 'ds_btu_detele', '删除', 'ds_base_field', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 999, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15712313715701982', 'test_checkbox', '多选框', 'test2', 'ds_not', NULL, 'ds_checkbox', 'ds_dic_tabletype', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15712315379292180', 'test_date', '时间选择器', 'test2', 'ds_not', NULL, 'ds_datepicker', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15712315656090542', 'test_textarea', '文本域', 'test2', 'ds_not', NULL, 'ds_richtext', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 18, 14, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15713238642364954', 'note_sort', '处理排序', 'test_note', 'ds_not', '0', 'ds_sort', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 4, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15713253478694448', 'test_table', '表格类型', 'ds_test2', 'ds_is', NULL, 'ds_table', 'test2', NULL, NULL, 'ds_is', NULL, 'ds_is', 17, 'ds_is', 20, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15713309534531488', 'ds_id', '记事本备注表的ds_id', 'note_romote', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_not', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157133095345314881', 'ds_btu_update', '編輯', 'note_romote', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157133095345314882', 'ds_btu_detele', '刪除', 'note_romote', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15713310021052948', 'note_dec', '备注内容', 'note_romote', 'ds_not', NULL, 'ds_textarea', NULL, '1', NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 17, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15713311094664750', 'note_remote', '记事本备注', 'test_note', 'ds_is', NULL, 'ds_table', 'note_romote', 'note_id', NULL, 'ds_is', NULL, 'ds_is', 6, 'ds_is', 17, 16, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15713312193436950', 'note_id', '记事本id', 'note_romote', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_not', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15715463008012158', 'ds_id', '图表设置表格的ds_id', 'ds_base_echartsettingfey', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157154630080121581', 'ds_btu_update', '編輯', 'ds_base_echartsettingfey', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157154630080121582', 'ds_btu_detele', '刪除', 'ds_base_echartsettingfey', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15715466857064940', 'ds_echarts_tablename', '数据所属表', 'ds_base_echartsettingfey', 'ds_not', NULL, 'ds_foreignkey', 'ds_dic_base_table', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15715467600954064', 'ds_echarts_x', 'x轴字段', 'ds_base_echartsettingfey', 'ds_not', NULL, 'ds_foreignkey', 'ds_base_field', 'ds_field_name', 'ds_field_describe', 'ds_is', NULL, 'ds_is', 1, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15715468453886026', 'ds_echarts_y', 'y轴字段', 'ds_base_echartsettingfey', 'ds_is', NULL, 'ds_foreignkey', 'ds_base_field', 'ds_field_name', 'ds_field_describe', 'ds_is', NULL, 'ds_is', 2, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15715469462034948', 'ds_echartextra', '额外设置', 'ds_base_echartsetting', 'ds_not', NULL, 'ds_table', 'ds_base_echartsettingfey', 'echertsetting_id', NULL, 'ds_is', NULL, 'ds_is', 19, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15715470566550052', 'echertsetting_id', '关联设置id', 'ds_base_echartsettingfey', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15715818873995476', 'ds_field_span', '字段显示布局', 'ds_base_field', 'ds_is', '8', 'ds_number', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 20, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15715820553909168', 'ds_field_inputspan', '字段输入布局', 'ds_base_field', 'ds_not', '12', 'ds_number', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 21, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15715828010315328', 'ds_field_labelspan', '字段label布局', 'ds_base_field', 'ds_is', '8', 'ds_number', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 22, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15716468548175406', 'ds_id', '用户表的ds_id', 'ds_baseusers', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157164685481754061', 'ds_btu_update', '編輯', 'ds_baseusers', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157164685481754062', 'ds_btu_detele', '刪除', 'ds_baseusers', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15716469553797484', 'user_id', '用户账号', 'ds_baseusers', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 1, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15716470110344136', 'user_name', '用户名', 'ds_baseusers', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15716470599485318', 'user_password', '用户密码', 'ds_baseusers', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 1, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15716471887436346', 'user_jurisdiction', '权限', 'ds_baseusers', 'ds_not', NULL, 'ds_select', 'ds_dic_jurisdiction', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 2, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15716475119176078', 'ds_id', 'getway服务的ds_id', 'ds_basegetwayserve', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157164751191760781', 'ds_btu_update', '編輯', 'ds_basegetwayserve', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157164751191760782', 'ds_btu_detele', '刪除', 'ds_basegetwayserve', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15716475858542506', 'serveraddress', '服务地址', 'ds_basegetwayserve', 'ds_not', 'http://localhost:8080', 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 2, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15716476740667790', 'serversystem', '系统名（英文）', 'ds_basegetwayserve', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 3, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15716477160177228', 'serverdescribe', '系统名', 'ds_basegetwayserve', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15721615025695128', 'ds_btu_update', '编辑', 'ds_base_jurisdiction', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 998, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15721615954784820', 'ds_btu_detele', '删除', 'ds_base_jurisdiction', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15728733116400328', 'cestts', '测试markdown', 'ds_test2', 'ds_not', NULL, 'ds_markdown', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 20, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15728734866284800', 'ds_id', '表组件字段的ds_id', 'ds_dic_tablecomponent', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157287348662848001', 'ds_btu_update', '編輯', 'ds_dic_tablecomponent', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157287348662848002', 'ds_btu_detele', '刪除', 'ds_dic_tablecomponent', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157287348662848003', 'ds_key', '表组件字段的ds_key', 'ds_dic_tablecomponent', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157287348662848004', 'ds_value', '表组件字段的ds_value', 'ds_dic_tablecomponent', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15728738120027506', 'ds_table_component', '动态组件名', 'ds_dic_base_table', 'ds_not', 'dsdefaultcomponent', 'ds_select', 'ds_dic_tablecomponent', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 10, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743183003831264', 'ds_id', '开发历程记录表的ds_id', 'ds_dev_text', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157431830038312641', 'ds_btu_update', '編輯', 'ds_dev_text', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157431830038312642', 'ds_btu_detele', '刪除', 'ds_dev_text', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743183765187976', 'ds_title', '文章标题', 'ds_dev_text', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743184111503712', 'ds_date', '文章时间', 'ds_dev_text', 'ds_not', NULL, 'ds_datepicker', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743184287002876', 'ds_content', '文章内容', 'ds_dev_text', 'ds_not', NULL, 'ds_markdown', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743209831636176', 'ds_field_length', '字段长度', 'ds_base_field', 'ds_not', '250', 'ds_number', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 6, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743214068968490', 'ds_yesy', '测试图片框', 'test2', 'ds_not', NULL, 'ds_picdiv', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 18, 14, 8, 5);
INSERT INTO `ds_base_field` VALUES ('15743244402796984', 'ds_id', '测试表3的ds_id', 'ds_test4', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157432444027969841', 'ds_btu_update', '編輯', 'ds_test4', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157432444027969842', 'ds_btu_detele', '刪除', 'ds_test4', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743244865238972', 'test1', '标题', 'ds_test4', 'ds_not', '123', 'ds_textarea', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743245494078050', 're', '第二个', 'ds_test4', 'ds_not', NULL, 'ds_checkbox', 'ds_dic_tabletype', 'ds_id', 'ds_key', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743879049786540', 'ds_id', '个人设置表的ds_id', 'ds_base_personalsetting', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_not', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157438790497865401', 'ds_btu_update', '編輯', 'ds_base_personalsetting', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157438790497865402', 'ds_btu_detele', '刪除', 'ds_base_personalsetting', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743879839988122', 'ds_personal_avtor', '个人头像', 'ds_base_personalsetting', 'ds_is', NULL, 'ds_picdiv', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 1, 'ds_is', 8, 12, 8, 1);
INSERT INTO `ds_base_field` VALUES ('15743880808369996', 'ds_personal_subcolor', '重要主题色', 'ds_base_personalsetting', 'ds_not', '#1890ff', 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 2, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743883355620948', 'ds_perponal_title', '设置名', 'ds_base_personalsetting', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743883697701140', 'ds_personal_id', '个人设置', 'ds_baseusers', 'ds_is', NULL, 'ds_table', 'ds_base_personalsetting', 'ds_perponal_id', 'ds_perponal_title', 'ds_is', NULL, 'ds_is', 3, 'ds_is', 20, 20, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743890755011196', 'ds_perponal_id', '用户id', 'ds_base_personalsetting', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_not', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15743902870570524', 'ds_isopen', '是否启用', 'ds_base_personalsetting', 'ds_not', '0', 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 10);
INSERT INTO `ds_base_field` VALUES ('15744015613143800', 'ds_user_slat', '密码盐', 'ds_baseusers', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 5, 'ds_is', 8, 12, 8, 10);
INSERT INTO `ds_base_field` VALUES ('15767391792037492', 'ds_id', '文档的ds_id', 'ds03_document', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157673917920374921', 'ds_btu_update', '編輯', 'ds03_document', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157673917920374922', 'ds_btu_detele', '刪除', 'ds03_document', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15767392785132792', 'ds03_document_pid', '所属目录id', 'ds03_document', 'ds_not', '0', 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 30);
INSERT INTO `ds_base_field` VALUES ('15767393755213366', 'ds03_document_content', '内容', 'ds03_document', 'ds_is', NULL, 'ds_markdown', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 20, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15767394130129080', 'ds03_document_author', '文档作者', 'ds03_document', 'ds_not', '沙雕网友', 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 50);
INSERT INTO `ds_base_field` VALUES ('15767394570660656', 'ds03_document_time', '创建时间', 'ds03_document', 'ds_not', NULL, 'ds_datepicker', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15767395717955204', 'ds03_document_title', '文档标题', 'ds03_document', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 50);
INSERT INTO `ds_base_field` VALUES ('15770889423450730', 'ds_id', 'ds3文档类型的ds_id', 'ds03_typedic', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157708894234507301', 'ds_btu_update', '編輯', 'ds03_typedic', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157708894234507302', 'ds_btu_detele', '刪除', 'ds03_typedic', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157708894234507303', 'ds_key', 'ds3文档类型的ds_key', 'ds03_typedic', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157708894234507304', 'ds_value', 'ds3文档类型的ds_value', 'ds03_typedic', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15770890557755826', 'ds_type', '文档类型', 'ds03_document', 'ds_not', 'md_summary', 'ds_select', 'ds03_typedic', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 5, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15773299149695840', 'ds_id', '插件的ds_id', 'ds3_plugin', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157732991496958401', 'ds_btu_update', '編輯', 'ds3_plugin', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('157732991496958402', 'ds_btu_detele', '刪除', 'ds3_plugin', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15773299898033080', 'ds_plugin_name', '插件名(英文)', 'ds3_plugin', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 30);
INSERT INTO `ds_base_field` VALUES ('15773300352308164', 'ds_plugin_title', '插件名(标题)', 'ds3_plugin', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 100);
INSERT INTO `ds_base_field` VALUES ('15773300730032600', 'ds_plugin_des', '插件描述', 'ds3_plugin', 'ds_is', NULL, 'ds_textarea', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 100);
INSERT INTO `ds_base_field` VALUES ('15773301042509600', 'ds_plugin_pluginurl', '插件地址(uma文件)', 'ds3_plugin', 'ds_not', NULL, 'ds_picdiv', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 1);
INSERT INTO `ds_base_field` VALUES ('15773302237890156', 'ds_plugin_desurl', '描述图片', 'ds3_plugin', 'ds_is', NULL, 'ds_picdiv', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 1);
INSERT INTO `ds_base_field` VALUES ('15773302603700400', 'ds_plugin_avterurl', '上传人头像', 'ds3_plugin', 'ds_is', NULL, 'ds_picdiv', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 1);
INSERT INTO `ds_base_field` VALUES ('15881679759680948', 'ds_id', 'getway第二版的ds_id', 'ds_getway_2', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('158816797596809481', 'ds_btu_update', '編輯', 'ds_getway_2', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('158816797596809482', 'ds_btu_detele', '刪除', 'ds_getway_2', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('15882293698582492', 'ds_id', 'ds3页面的ds_id', 'ds3_homepage', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('158822936985824921', 'ds_btu_update', '編輯', 'ds3_homepage', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('158822936985824922', 'ds_btu_detele', '刪除', 'ds3_homepage', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('15882298387068268', 'ds_id', 'ngDemo页面的ds_id', 'ds_ng_demo', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('158822983870682681', 'ds_btu_update', '編輯', 'ds_ng_demo', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('158822983870682682', 'ds_btu_detele', '刪除', 'ds_ng_demo', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('15882504263422292', 'ds_id', '表显示类型的ds_id', 'ds_dic_tableshowtype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('158825042634222921', 'ds_btu_update', '編輯', 'ds_dic_tableshowtype', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('158825042634222922', 'ds_btu_detele', '刪除', 'ds_dic_tableshowtype', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('158825042634222923', 'ds_key', '表显示类型的ds_key', 'ds_dic_tableshowtype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('158825042634222924', 'ds_value', '表显示类型的ds_value', 'ds_dic_tableshowtype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('15882507112793384', 'ds_tableshowtype', '显示类型', 'ds_dic_base_table', 'ds_not', 'defalute_show', 'ds_select', 'ds_dic_tableshowtype', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 9, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15936576053110734', 'ds_id', '博客文章的ds_id', 'blog_article', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 10, 250);
INSERT INTO `ds_base_field` VALUES ('159365760531107341', 'ds_btu_update', '編輯', 'blog_article', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 999, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159365760531107342', 'ds_btu_detele', '刪除', 'blog_article', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 999, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('15936578407017272', 'title', '文章名', 'blog_article', 'ds_not', '文章名', 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 1, 'ds_is', 8, 12, 8, 50);
INSERT INTO `ds_base_field` VALUES ('15936579828369772', 'time', '发布时间', 'blog_article', 'ds_not', NULL, 'ds_datepicker', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 5, 'ds_is', 8, 12, 8, 50);
INSERT INTO `ds_base_field` VALUES ('15936580212281800', 'avter', '头像', 'blog_article', 'ds_not', NULL, 'ds_picdiv', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 6, 'ds_is', 8, 12, 8, 1);
INSERT INTO `ds_base_field` VALUES ('15936580735779696', 'looknum', '观看数', 'blog_article', 'ds_not', '0', 'ds_number', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 7, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15936581155755174', 'likenum', '喜欢数', 'blog_article', 'ds_not', '0', 'ds_number', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 8, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15936581428067676', 'replynum', '回复数', 'blog_article', 'ds_not', '0', 'ds_number', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 9, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15936587902048332', 'content_text', '博客文本域', 'blog_article', 'ds_is', NULL, 'ds_textarea', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 10, 'ds_is', 24, 22, 2, 250);
INSERT INTO `ds_base_field` VALUES ('15936588327337820', 'content_file', '博客文件', 'blog_article', 'ds_is', NULL, 'ds_picdiv', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 11, 'ds_is', 24, 20, 2, 1);
INSERT INTO `ds_base_field` VALUES ('15936588621495970', 'content_md', '博客md', 'blog_article', 'ds_is', NULL, 'ds_markdown', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 12, 'ds_is', 24, 22, 2, 250);
INSERT INTO `ds_base_field` VALUES ('15936591471951540', 'ds_id', '博客tag的ds_id', 'bolg_tag', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159365914719515401', 'ds_btu_update', '編輯', 'bolg_tag', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159365914719515402', 'ds_btu_detele', '刪除', 'bolg_tag', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159365914719515403', 'ds_key', '博客tag的ds_key', 'bolg_tag', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159365914719515404', 'ds_value', '博客tag的ds_value', 'bolg_tag', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('15936599747738008', 'tag', '博客标签', 'blog_article', 'ds_not', NULL, 'ds_checkbox', 'bolg_tag', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 6, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15936602640599480', 'ds_id', '博客目录第一层的ds_id', 'bolg_summary_a', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159366026405994801', 'ds_btu_update', '編輯', 'bolg_summary_a', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159366026405994802', 'ds_btu_detele', '刪除', 'bolg_summary_a', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159366026405994803', 'ds_key', '博客目录第一层的ds_key', 'bolg_summary_a', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159366026405994804', 'ds_value', '博客目录第一层的ds_value', 'bolg_summary_a', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('15936603518970776', 'ds_id', '博客目录第二层的ds_id', 'bolg_summary_b', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159366035189707761', 'ds_btu_update', '編輯', 'bolg_summary_b', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159366035189707762', 'ds_btu_detele', '刪除', 'bolg_summary_b', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('15936603812078488', 'belong', '属于第一层目录', 'bolg_summary_b', 'ds_not', NULL, 'ds_select', 'bolg_summary_a', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15936604193196164', 'summary_key', '目录键值', 'bolg_summary_b', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 50);
INSERT INTO `ds_base_field` VALUES ('15936604660001840', 'summary_value', '目录名', 'bolg_summary_b', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 50);
INSERT INTO `ds_base_field` VALUES ('15936606875951282', 'belong', '属于一级目录', 'blog_article', 'ds_not', NULL, 'ds_select', 'bolg_summary_a', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 3, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15936663516382730', 'secondbelong', '属于二级目录', 'blog_article', 'ds_not', NULL, 'ds_foreignkey', 'bolg_summary_b', 'ds_id', 'summary_value', 'ds_is', NULL, 'ds_is', 4, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('15936664754973776', 'ds_id', '博客类型的ds_id', 'blog_type', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159366647549737761', 'ds_btu_update', '編輯', 'blog_type', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'DsFieldUpdataComponent', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159366647549737762', 'ds_btu_detele', '刪除', 'blog_type', 'ds_not', 'ds_is', 'ds_operatebtu', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_not', 'deleteTableOneData', 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159366647549737763', 'ds_key', '博客类型的ds_key', 'blog_type', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('159366647549737764', 'ds_value', '博客类型的ds_value', 'blog_type', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 0, 250);
INSERT INTO `ds_base_field` VALUES ('15936665292470268', 'type', '博客类型', 'blog_article', 'ds_not', NULL, 'ds_select', 'blog_type', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 2, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('2', 'ds_field_describe', '字段描述', 'ds_base_field', 'ds_not', '', 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 2, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('21', 'ds_id', '权限表id', 'ds_base_jurisdiction', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('22', 'ds_jurisdiction_name', '角色名', 'ds_base_jurisdiction', 'ds_not', NULL, 'ds_select', 'ds_dic_jurisdiction', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('23', 'ds_jurisdiction_type', '权限类型', 'ds_base_jurisdiction', 'ds_not', NULL, 'ds_select', 'ds_dic_jurisdictiontype', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('24', 'ds_system_name', '系统名', 'ds_base_jurisdiction', 'ds_is', NULL, 'ds_select', 'ds_dic_system', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('25', 'ds_system_jurisdiction', '系统权限', 'ds_base_jurisdiction', 'ds_is', NULL, 'ds_select', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('3', 'ds_field_tablename', '字段所属表', 'ds_base_field', 'ds_not', NULL, 'ds_select', 'ds_dic_base_table', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 3, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('4', 'ds_field_isemtry', '字段是否可以为空', 'ds_base_field', 'ds_not', 'ds_not', 'ds_select', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 6, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('41', 'ds_id', '基础表id', 'ds_dic_base_table', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('42', 'ds_key', '基础表名', 'ds_dic_base_table', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 3, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('43', 'ds_value', '基础表描述', 'ds_dic_base_table', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 2, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('44', 'ds_table_system', '表所属系统', 'ds_dic_base_table', 'ds_not', NULL, 'ds_select', 'ds_dic_system', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 4, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('45', 'ds_table_type', '表类型', 'ds_dic_base_table', 'ds_not', NULL, 'ds_select', 'ds_dic_tabletype', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 5, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('5', 'ds_field_initdata', '字段默认值', 'ds_base_field', 'ds_is', '', 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 5, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('6', 'ds_field_type', '字段类型', 'ds_base_field', 'ds_not', NULL, 'ds_select', 'ds_dic_fieldtype', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 4, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('61', 'ds_id', '字段类型字典id', 'ds_dic_fieldtype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('62', 'ds_key', '字段类型名', 'ds_dic_fieldtype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('63', 'ds_value', '字段类型描述', 'ds_dic_fieldtype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('66', 'ds_id', '是否字典id', 'ds_dic_ifornot', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('67', 'ds_key', '是否名', 'ds_dic_ifornot', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('68', 'ds_value', '是否描述', 'ds_dic_ifornot', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('7', 'ds_field_foreigntable', '字段关联表', 'ds_base_field', 'ds_is', NULL, 'ds_select', 'ds_dic_base_table', 'ds_key', 'ds_value', 'ds_not', NULL, 'ds_is', 8, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('71', 'ds_id', '角色表id', 'ds_dic_jurisdiction', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('72', 'ds_key', '角色名', 'ds_dic_jurisdiction', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('73', 'ds_value', '角色描述', 'ds_dic_jurisdiction', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('76', 'ds_id', '权限类型id', 'ds_dic_jurisdictiontype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('77', 'ds_key', '权限名', 'ds_dic_jurisdictiontype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('78', 'ds_value', '权限描述', 'ds_dic_jurisdictiontype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('8', 'ds_field_foreignfield', '字段关联表字段', 'ds_base_field', 'ds_is', NULL, 'ds_foreignkey', 'ds_base_field', 'ds_field_name', 'ds_field_describe', 'ds_not', NULL, 'ds_is', 9, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('81', 'ds_id', '系统表id', 'ds_dic_system', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('82', 'ds_key', '系统名', 'ds_dic_system', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('83', 'ds_value', '系统描述', 'ds_dic_system', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('9', 'ds_field_show', '字段是否显示', 'ds_base_field', 'ds_not', 'ds_is', 'ds_select', 'ds_dic_ifornot', 'ds_key', 'ds_value', 'ds_is', NULL, 'ds_is', 6, 'ds_is', 12, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('91', 'ds_id', '表类型id', 'ds_dic_tabletype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('92', 'ds_key', '表类型名', 'ds_dic_tabletype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);
INSERT INTO `ds_base_field` VALUES ('93', 'ds_value', '表类型', 'ds_dic_tabletype', 'ds_not', NULL, 'ds_text', NULL, NULL, NULL, 'ds_is', NULL, 'ds_is', 0, 'ds_is', 8, 12, 8, 250);

-- ----------------------------
-- Table structure for ds_base_jurisdiction
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_jurisdiction`;
CREATE TABLE `ds_base_jurisdiction`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_jurisdiction_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_jurisdiction_type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_system_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_table_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_system_jurisdiction` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  PRIMARY KEY (`ds_id`) USING BTREE,
  INDEX `jurisdiction_system`(`ds_system_name`) USING BTREE,
  INDEX `jurisdiction_isornot`(`ds_system_jurisdiction`) USING BTREE,
  INDEX `jurisdiction_type`(`ds_jurisdiction_type`) USING BTREE,
  INDEX `jurisdiction_name`(`ds_jurisdiction_name`) USING BTREE,
  INDEX `jurisdiction_table`(`ds_table_name`) USING BTREE,
  CONSTRAINT `jurisdiction_name` FOREIGN KEY (`ds_jurisdiction_name`) REFERENCES `ds_dic_jurisdiction` (`ds_key`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `jurisdiction_system` FOREIGN KEY (`ds_system_name`) REFERENCES `ds_dic_system` (`ds_key`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `jurisdiction_system_is` FOREIGN KEY (`ds_system_jurisdiction`) REFERENCES `ds_dic_ifornot` (`ds_key`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `jurisdiction_table` FOREIGN KEY (`ds_table_name`) REFERENCES `ds_dic_base_table` (`ds_key`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `jurisdiction_type_key` FOREIGN KEY (`ds_jurisdiction_type`) REFERENCES `ds_dic_jurisdictiontype` (`ds_key`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_jurisdiction
-- ----------------------------
INSERT INTO `ds_base_jurisdiction` VALUES ('0', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_dic_base_table', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_dic_system', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15704467924942516', 'ds_superadmin', 'ds_table', 'ds_test', 'ds_test2', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15706087022172952', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_base_setbutton', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15706089759124990', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_dic_btutype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15706331087290594', 'ds_superadmin', 'ds_table', 'ds_test', 'test_note', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15707314115406996', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_base_tablebtu', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15708546850863432', 'ds_superadmin', 'ds_table', 'ds_test', 'ds_dic_priority', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15709401207424480', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_dic_echartstype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15709409236267702', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_base_echartsetting', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15709800012957616', 'ds_superadmin', 'ds_table', 'ds_test', 'test2', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15713309534531488', 'ds_superadmin', 'ds_table', 'ds_test', 'note_romote', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15715463008012158', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_base_echartsettingfey', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15716468548175406', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_baseusers', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('15716475119176078', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_basegetwayserve', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157216457679129600', 'ds_test', 'ds_table', 'ds_base', 'ds_dic_base_table', 'ds_not', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157216457679129601', 'ds_test', 'ds_table', 'ds_base', 'ds_dic_system', 'ds_not', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296010', 'ds_test', 'ds_table', 'ds_test', 'test2', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296011', 'ds_test', 'ds_table', 'ds_test', 'note_romote', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296012', 'ds_test', 'ds_table', 'ds_base', 'ds_base_echartsettingfey', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296013', 'ds_test', 'ds_table', 'ds_base', 'ds_baseusers', 'ds_not', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296014', 'ds_test', 'ds_table', 'ds_base', 'ds_basegetwayserve', 'ds_not', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296015', 'ds_test', 'ds_table', 'ds_base', 'ds_dic_tabletype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296016', 'ds_test', 'ds_table', 'ds_base', 'ds_base_jurisdiction', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296017', 'ds_test', 'ds_table', 'ds_base', 'ds_dic_jurisdictiontype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296018', 'ds_test', 'ds_table', 'ds_base', 'ds_dic_ifornot', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296019', 'ds_test', 'ds_table', 'ds_base', 'ds_base_field', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157216457679129602', 'ds_test', 'ds_table', 'ds_test', 'ds_test2', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296020', 'ds_test', 'ds_table', 'ds_base', 'ds_dic_fieldtype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296021', 'ds_test', 'ds_table', 'ds_base', 'ds_dic_jurisdiction', 'ds_not', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('1572164576791296022', 'ds_test', 'ds_table', 'ds_base', 'ds_base_showlist', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157216457679129603', 'ds_test', 'ds_table', 'ds_base', 'ds_base_setbutton', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157216457679129604', 'ds_test', 'ds_table', 'ds_base', 'ds_dic_btutype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157216457679129605', 'ds_test', 'ds_table', 'ds_test', 'test_note', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157216457679129606', 'ds_test', 'ds_table', 'ds_base', 'ds_base_tablebtu', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157216457679129607', 'ds_test', 'ds_table', 'ds_test', 'ds_dic_priority', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157216457679129608', 'ds_test', 'ds_table', 'ds_base', 'ds_dic_echartstype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157216457679129609', 'ds_test', 'ds_table', 'ds_base', 'ds_base_echartsetting', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157287348662848000', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_dic_tablecomponent', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157287348662848001', 'ds_test', 'ds_table', 'ds_base', 'ds_dic_tablecomponent', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157431830038312640', 'ds_superadmin', 'ds_table', 'ds_test', 'ds_dev_text', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157431830038312641', 'ds_test', 'ds_table', 'ds_test', 'ds_dev_text', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157432444027969840', 'ds_superadmin', 'ds_table', 'ds_test', 'ds_test4', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157432444027969841', 'ds_test', 'ds_table', 'ds_test', 'ds_test4', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157438790497865400', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_base_personalsetting', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157438790497865401', 'ds_test', 'ds_table', 'ds_base', 'ds_base_personalsetting', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157673917920374920', 'ds_superadmin', 'ds_table', 'ds_d03', 'ds03_document', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157673917920374921', 'ds_test', 'ds_table', 'ds_d03', 'ds03_document', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157708894234507300', 'ds_superadmin', 'ds_table', 'ds_d03', 'ds03_typedic', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157708894234507301', 'ds_test', 'ds_table', 'ds_d03', 'ds03_typedic', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157732991496958400', 'ds_superadmin', 'ds_table', 'ds_d03', 'ds3_plugin', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('157732991496958401', 'ds_test', 'ds_table', 'ds_d03', 'ds3_plugin', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('158816797596809480', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_getway_2', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('158816797596809481', 'ds_test', 'ds_table', 'ds_base', 'ds_getway_2', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('158822936985824920', 'ds_superadmin', 'ds_table', 'ds_customization', 'ds3_homepage', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('158822936985824921', 'ds_test', 'ds_table', 'ds_customization', 'ds3_homepage', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('158822983870682680', 'ds_superadmin', 'ds_table', 'ds_customization', 'ds_ng_demo', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('158822983870682681', 'ds_test', 'ds_table', 'ds_customization', 'ds_ng_demo', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('158825042634222920', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_dic_tableshowtype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('158825042634222921', 'ds_test', 'ds_table', 'ds_base', 'ds_dic_tableshowtype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('159365760531107340', 'ds_superadmin', 'ds_table', 'blog_system', 'blog_article', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('159365760531107341', 'ds_test', 'ds_table', 'blog_system', 'blog_article', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('159365914719515400', 'ds_superadmin', 'ds_table', 'blog_system', 'bolg_tag', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('159365914719515401', 'ds_test', 'ds_table', 'blog_system', 'bolg_tag', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('159366026405994800', 'ds_superadmin', 'ds_table', 'blog_system', 'bolg_summary_a', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('159366026405994801', 'ds_test', 'ds_table', 'blog_system', 'bolg_summary_a', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('159366035189707760', 'ds_superadmin', 'ds_table', 'blog_system', 'bolg_summary_b', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('159366035189707761', 'ds_test', 'ds_table', 'blog_system', 'bolg_summary_b', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('159366647549737760', 'ds_superadmin', 'ds_table', 'blog_system', 'blog_type', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('159366647549737761', 'ds_test', 'ds_table', 'blog_system', 'blog_type', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('2', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_dic_tabletype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('3', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_base_jurisdiction', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('4', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_dic_jurisdictiontype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('5', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_dic_ifornot', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('6', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_base_field', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('7', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_dic_fieldtype', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('8', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_dic_jurisdiction', 'ds_is', 'ds_is', 'ds_is');
INSERT INTO `ds_base_jurisdiction` VALUES ('9', 'ds_superadmin', 'ds_table', 'ds_base', 'ds_base_showlist', 'ds_is', 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for ds_base_personalsetting
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_personalsetting`;
CREATE TABLE `ds_base_personalsetting`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_personal_avtor` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `ds_personal_subcolor` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '#1890ff',
  `ds_perponal_title` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_perponal_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_isopen` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_personalsetting
-- ----------------------------
INSERT INTO `ds_base_personalsetting` VALUES ('15743903480094108', 'ds_is', 'ds_is', '[\"ds0.0.2/img/BfHe5_o9wvUeEHK9_TXLiNAh.jpg\"]', '#ff0000', '测试主题', '15716474548689852', '1');

-- ----------------------------
-- Table structure for ds_base_setbutton
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_setbutton`;
CREATE TABLE `ds_base_setbutton`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_key` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_value` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_describe` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_btu_type` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'modal',
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_setbutton
-- ----------------------------
INSERT INTO `ds_base_setbutton` VALUES ('15706091115185108', 'DsTableAddDataComponent', '增加', NULL, 'modal', 'ds_is');
INSERT INTO `ds_base_setbutton` VALUES ('15706091517350548', 'DsFieldSettingComponent', '字段设置', NULL, 'modal', 'ds_is');
INSERT INTO `ds_base_setbutton` VALUES ('15706091681223932', 'DsFieldUpdataComponent', '编辑', NULL, 'modal', 'ds_is');
INSERT INTO `ds_base_setbutton` VALUES ('15706091782399002', 'deleteTableOneData', '删除', '确定删除吗\'\'', 'popconfirm', 'ds_is');

-- ----------------------------
-- Table structure for ds_base_showlist
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_showlist`;
CREATE TABLE `ds_base_showlist`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_table_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_field_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_is_sort` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_is_filter` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_belong_tablename` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `ds_sort_num` int(11) NULL DEFAULT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_delete` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  PRIMARY KEY (`ds_id`) USING BTREE,
  INDEX `ds_sort`(`ds_is_sort`) USING BTREE,
  INDEX `ds_filter`(`ds_is_filter`) USING BTREE,
  INDEX `ds_list_fieldid`(`ds_field_id`) USING BTREE,
  INDEX `ds_belong_tablename`(`ds_table_name`) USING BTREE,
  INDEX `belong_tablename`(`ds_belong_tablename`) USING BTREE,
  CONSTRAINT `belong_tablename` FOREIGN KEY (`ds_belong_tablename`) REFERENCES `ds_dic_base_table` (`ds_key`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ds_filter` FOREIGN KEY (`ds_is_filter`) REFERENCES `ds_dic_ifornot` (`ds_key`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `ds_list_fieldid` FOREIGN KEY (`ds_field_id`) REFERENCES `ds_base_field` (`ds_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ds_list_name` FOREIGN KEY (`ds_table_name`) REFERENCES `ds_dic_base_table` (`ds_key`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ds_sort` FOREIGN KEY (`ds_is_sort`) REFERENCES `ds_dic_ifornot` (`ds_key`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_showlist
-- ----------------------------
INSERT INTO `ds_base_showlist` VALUES ('0', 'ds_dic_base_table', '41', 'ds_is', 'ds_not', 'ds_dic_base_table', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('1', 'ds_dic_base_table', '42', 'ds_is', 'ds_not', 'ds_dic_base_table', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('10', 'ds_base_field', '0', 'ds_is', 'ds_not', 'ds_base_field', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('11', 'ds_base_field', '1', 'ds_is', 'ds_not', 'ds_base_field', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('12', 'ds_base_field', '2', 'ds_is', 'ds_not', 'ds_base_field', 3, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15683865619437004', 'ds_dic_system', '81', 'ds_not', 'ds_not', 'ds_dic_system', 0, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15683869062261100', 'ds_dic_system', '82', 'ds_not', 'ds_not', 'ds_dic_system', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15683869592904008', 'ds_dic_system', '83', 'ds_not', 'ds_not', 'ds_dic_system', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15683870738469128', 'ds_base_jurisdiction', '21', 'ds_not', 'ds_not', 'ds_base_jurisdiction', 0, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15683870880903840', 'ds_base_jurisdiction', '22', 'ds_not', 'ds_not', 'ds_base_jurisdiction', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15683871304509988', 'ds_dic_jurisdiction', '71', 'ds_not', 'ds_not', 'ds_dic_jurisdiction', 0, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15683871432921516', 'ds_dic_jurisdiction', '72', 'ds_not', 'ds_not', 'ds_dic_jurisdiction', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15683871758518180', 'ds_base_jurisdiction', '23', 'ds_not', 'ds_not', 'ds_base_jurisdiction', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15683875294808596', 'ds_dic_jurisdiction', '73', 'ds_not', 'ds_not', 'ds_dic_jurisdiction', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15704467924942516', 'ds_test2', '15704467924942516', 'ds_not', 'ds_not', 'ds_test2', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15704468558508440', 'ds_test2', '15704468195397866', 'ds_not', 'ds_not', 'ds_test2', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15706087022172952', 'ds_base_setbutton', '15706087022172952', 'ds_not', 'ds_not', 'ds_base_setbutton', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15706088427651688', 'ds_base_setbutton', '15706087707199360', 'ds_not', 'ds_not', 'ds_base_setbutton', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15706088483354528', 'ds_base_setbutton', '15706088250003582', 'ds_not', 'ds_not', 'ds_base_setbutton', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15706089759124990', 'ds_dic_btutype', '15706089759124990', 'ds_not', 'ds_not', 'ds_dic_btutype', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15706104358890218', 'ds_base_setbutton', '15706103463032008', 'ds_not', 'ds_not', 'ds_base_setbutton', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15706302244302832', 'ds_dic_base_table', '15706300004137532', 'ds_not', 'ds_not', 'ds_dic_base_table', 997, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15706302412602700', 'ds_dic_base_table', '15706300785003616', 'ds_not', 'ds_not', 'ds_dic_base_table', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15706331087290594', 'test_note', '15706331087290594', 'ds_not', 'ds_not', 'test_note', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157063310872905941', 'test_note', '157063310872905941', 'ds_not', 'ds_not', 'test_note', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157063310872905942', 'test_note', '157063310872905942', 'ds_not', 'ds_not', 'test_note', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15706332184106636', 'test_note', '15706331825930520', 'ds_not', 'ds_not', 'test_note', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15707299882101734', 'ds_dic_base_table', '15707298957837902', 'ds_not', 'ds_not', 'ds_dic_base_table', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15707303204873478', 'ds_base_field', '15707302916561726', 'ds_not', 'ds_not', 'ds_base_field', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15707314115406996', 'ds_base_tablebtu', '15707314115406996', 'ds_not', 'ds_not', 'ds_base_tablebtu', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157073141154069961', 'ds_base_tablebtu', '157073141154069961', 'ds_not', 'ds_not', 'ds_base_tablebtu', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157073141154069962', 'ds_base_tablebtu', '157073141154069962', 'ds_not', 'ds_not', 'ds_base_tablebtu', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15707365342938756', 'ds_base_tablebtu', '15707362570985118', 'ds_not', 'ds_not', 'ds_base_tablebtu', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15707365412795412', 'ds_base_tablebtu', '15707363315306972', 'ds_not', 'ds_not', 'ds_base_tablebtu', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15707367162462260', 'ds_base_showlist', '15707366652103800', 'ds_not', 'ds_not', 'ds_base_showlist', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15707367254769824', 'ds_base_showlist', '15707366872787712', 'ds_not', 'ds_not', 'ds_base_showlist', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15707638311368656', 'ds_test2', '15707634929867692', 'ds_not', 'ds_not', 'ds_test2', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15707641533254528', 'ds_test2', '15707636860554560', 'ds_not', 'ds_not', 'ds_test2', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15708508191786216', 'test_note', '15708502759340764', 'ds_not', 'ds_is', 'test_note', 6, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15708546850863432', 'ds_dic_priority', '15708546850863432', 'ds_not', 'ds_not', 'ds_dic_priority', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157085468508634321', 'ds_dic_priority', '157085468508634321', 'ds_not', 'ds_not', 'ds_dic_priority', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157085468508634322', 'ds_dic_priority', '157085468508634322', 'ds_not', 'ds_not', 'ds_dic_priority', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15708547987985272', 'ds_dic_priority', '15708547296913120', 'ds_is', 'ds_not', 'ds_dic_priority', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15708548047981316', 'ds_dic_priority', '15708547780804892', 'ds_not', 'ds_not', 'ds_dic_priority', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15708550693240736', 'test_note', '15708550179786350', 'ds_is', 'ds_is', 'test_note', 4, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15709401207424480', 'ds_dic_echartstype', '15709401207424480', 'ds_not', 'ds_not', 'ds_dic_echartstype', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157094012074244801', 'ds_dic_echartstype', '157094012074244801', 'ds_not', 'ds_not', 'ds_dic_echartstype', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157094012074244802', 'ds_dic_echartstype', '157094012074244802', 'ds_not', 'ds_not', 'ds_dic_echartstype', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157094012074244803', 'ds_dic_echartstype', '157094012074244803', 'ds_not', 'ds_not', 'ds_dic_echartstype', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157094012074244804', 'ds_dic_echartstype', '157094012074244804', 'ds_not', 'ds_not', 'ds_dic_echartstype', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15709409236267702', 'ds_base_echartsetting', '15709409236267702', 'ds_not', 'ds_not', 'ds_base_echartsetting', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157094092362677021', 'ds_base_echartsetting', '157094092362677021', 'ds_not', 'ds_not', 'ds_base_echartsetting', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157094092362677022', 'ds_base_echartsetting', '157094092362677022', 'ds_not', 'ds_not', 'ds_base_echartsetting', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15709421754074460', 'ds_base_echartsetting', '15709419140562250', 'ds_not', 'ds_not', 'ds_base_echartsetting', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15709421860500188', 'ds_base_echartsetting', '15709420476187850', 'ds_not', 'ds_is', 'ds_base_echartsetting', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15709800012957616', 'test2', '15709800012957616', 'ds_not', 'ds_not', 'test2', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157098000129576161', 'test2', '157098000129576161', 'ds_not', 'ds_not', 'test2', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157098000129576162', 'test2', '157098000129576162', 'ds_not', 'ds_not', 'test2', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711405481140568', 'ds_base_echartsetting', '15711404842111762', 'ds_not', 'ds_not', 'ds_base_echartsetting', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711458803868912', 'ds_dic_btutype', '157060897591249901', 'ds_not', 'ds_not', 'ds_dic_btutype', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711458893765496', 'ds_dic_btutype', '157060897591249902', 'ds_not', 'ds_not', 'ds_dic_btutype', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711467104982940', 'ds_dic_btutype', '15711466931882602', 'ds_not', 'ds_not', 'ds_dic_btutype', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711467187334428', 'ds_dic_btutype', '15711466727783208', 'ds_not', 'ds_not', 'ds_dic_btutype', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711468325032720', 'ds_dic_tabletype', '92', 'ds_not', 'ds_not', 'ds_dic_tabletype', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711468434566344', 'ds_dic_tabletype', '93', 'ds_not', 'ds_not', 'ds_dic_tabletype', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711468605437820', 'ds_dic_tabletype', '91', 'ds_not', 'ds_not', 'ds_dic_tabletype', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711469151769280', 'ds_dic_tabletype', '15711468672306192', 'ds_not', 'ds_not', 'ds_dic_tabletype', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711469229787686', 'ds_dic_tabletype', '15711468948628800', 'ds_not', 'ds_not', 'ds_dic_tabletype', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711470259352872', 'ds_dic_jurisdictiontype', '76', 'ds_not', 'ds_not', 'ds_dic_jurisdictiontype', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711470384818434', 'ds_dic_jurisdictiontype', '77', 'ds_not', 'ds_not', 'ds_dic_jurisdictiontype', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711470442227908', 'ds_dic_jurisdictiontype', '78', 'ds_not', 'ds_not', 'ds_dic_jurisdictiontype', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711471066890594', 'ds_dic_jurisdictiontype', '15711470534069392', 'ds_not', 'ds_not', 'ds_dic_jurisdictiontype', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711471137314076', 'ds_dic_jurisdictiontype', '15711470798333216', 'ds_not', 'ds_not', 'ds_dic_jurisdictiontype', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711471495833886', 'ds_dic_ifornot', '66', 'ds_not', 'ds_not', 'ds_dic_ifornot', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711471574590256', 'ds_dic_ifornot', '67', 'ds_not', 'ds_not', 'ds_dic_ifornot', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711471631673132', 'ds_dic_ifornot', '68', 'ds_not', 'ds_not', 'ds_dic_ifornot', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711472153226460', 'ds_dic_ifornot', '15711471897438656', 'ds_not', 'ds_not', 'ds_dic_ifornot', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711472222306044', 'ds_dic_ifornot', '15711471733200882', 'ds_not', 'ds_not', 'ds_dic_ifornot', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711472375101290', 'ds_dic_fieldtype', '61', 'ds_not', 'ds_not', 'ds_dic_fieldtype', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711472421284360', 'ds_dic_fieldtype', '62', 'ds_not', 'ds_not', 'ds_dic_fieldtype', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711472468233892', 'ds_dic_fieldtype', '63', 'ds_not', 'ds_not', 'ds_dic_fieldtype', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711473710265326', 'ds_dic_fieldtype', '15711473464340060', 'ds_not', 'ds_not', 'ds_dic_fieldtype', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15711473764576292', 'ds_dic_fieldtype', '15711472528636088', 'ds_not', 'ds_not', 'ds_dic_fieldtype', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15712303907451538', 'ds_base_field', '15712303644093508', 'ds_not', 'ds_not', 'ds_base_field', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15712377064637964', 'ds_base_field', '3', 'ds_not', 'ds_not', 'ds_base_field', 12, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15712385354588404', 'test2', '15712313715701982', 'ds_not', 'ds_not', 'test2', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15712385418404868', 'test2', '15712315379292180', 'ds_not', 'ds_not', 'test2', 3, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15712385476544460', 'test2', '15712315656090542', 'ds_not', 'ds_not', 'test2', 4, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15713239056558244', 'test_note', '15713238642364954', 'ds_is', 'ds_not', 'test_note', 4, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15713309534531488', 'note_romote', '15713309534531488', 'ds_not', 'ds_not', 'note_romote', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157133095345314881', 'note_romote', '157133095345314881', 'ds_not', 'ds_not', 'note_romote', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157133095345314882', 'note_romote', '157133095345314882', 'ds_not', 'ds_not', 'note_romote', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15713310892580654', 'note_romote', '15713310021052948', 'ds_not', 'ds_not', 'note_romote', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15715463008012158', 'ds_base_echartsettingfey', '15715463008012158', 'ds_not', 'ds_not', 'ds_base_echartsettingfey', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157154630080121581', 'ds_base_echartsettingfey', '157154630080121581', 'ds_not', 'ds_not', 'ds_base_echartsettingfey', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157154630080121582', 'ds_base_echartsettingfey', '157154630080121582', 'ds_not', 'ds_not', 'ds_base_echartsettingfey', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15716468548175406', 'ds_baseusers', '15716468548175406', 'ds_not', 'ds_not', 'ds_baseusers', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157164685481754061', 'ds_baseusers', '157164685481754061', 'ds_not', 'ds_not', 'ds_baseusers', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157164685481754062', 'ds_baseusers', '157164685481754062', 'ds_not', 'ds_not', 'ds_baseusers', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15716472848633236', 'ds_baseusers', '15716470110344136', 'ds_not', 'ds_not', 'ds_baseusers', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15716473383923896', 'ds_baseusers', '15716471887436346', 'ds_not', 'ds_not', 'ds_baseusers', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15716475119176078', 'ds_basegetwayserve', '15716475119176078', 'ds_not', 'ds_not', 'ds_basegetwayserve', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157164751191760781', 'ds_basegetwayserve', '157164751191760781', 'ds_not', 'ds_not', 'ds_basegetwayserve', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157164751191760782', 'ds_basegetwayserve', '157164751191760782', 'ds_not', 'ds_not', 'ds_basegetwayserve', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15716477423672066', 'ds_basegetwayserve', '15716476740667790', 'ds_not', 'ds_not', 'ds_basegetwayserve', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15716477758732454', 'ds_basegetwayserve', '15716475858542506', 'ds_not', 'ds_not', 'ds_basegetwayserve', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15728734866284800', 'ds_dic_tablecomponent', '15728734866284800', 'ds_not', 'ds_not', 'ds_dic_tablecomponent', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157287348662848001', 'ds_dic_tablecomponent', '157287348662848001', 'ds_not', 'ds_not', 'ds_dic_tablecomponent', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157287348662848002', 'ds_dic_tablecomponent', '157287348662848002', 'ds_not', 'ds_not', 'ds_dic_tablecomponent', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157287348662848003', 'ds_dic_tablecomponent', '157287348662848003', 'ds_not', 'ds_not', 'ds_dic_tablecomponent', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157287348662848004', 'ds_dic_tablecomponent', '157287348662848004', 'ds_not', 'ds_not', 'ds_dic_tablecomponent', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15743183003831264', 'ds_dev_text', '15743183003831264', 'ds_not', 'ds_not', 'ds_dev_text', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157431830038312641', 'ds_dev_text', '157431830038312641', 'ds_not', 'ds_not', 'ds_dev_text', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157431830038312642', 'ds_dev_text', '157431830038312642', 'ds_not', 'ds_not', 'ds_dev_text', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15743184475720188', 'ds_dev_text', '15743183765187976', 'ds_not', 'ds_not', 'ds_dev_text', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15743184595511908', 'ds_dev_text', '15743184111503712', 'ds_not', 'ds_not', 'ds_dev_text', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15743205377514232', 'ds_base_field', '15707308330770604', 'ds_is', 'ds_not', 'ds_base_field', 5, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15743244402796984', 'ds_test4', '15743244402796984', 'ds_not', 'ds_not', 'ds_test4', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157432444027969841', 'ds_test4', '157432444027969841', 'ds_not', 'ds_not', 'ds_test4', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157432444027969842', 'ds_test4', '157432444027969842', 'ds_not', 'ds_not', 'ds_test4', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15743245262320630', 'ds_test4', '15743244402796984', 'ds_not', 'ds_not', 'ds_test4', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15743245923160888', 'ds_test4', '15743245494078050', 'ds_not', 'ds_not', 'ds_test4', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15743879049786540', 'ds_base_personalsetting', '15743879049786540', 'ds_not', 'ds_not', 'ds_base_personalsetting', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157438790497865401', 'ds_base_personalsetting', '157438790497865401', 'ds_not', 'ds_not', 'ds_base_personalsetting', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157438790497865402', 'ds_base_personalsetting', '157438790497865402', 'ds_not', 'ds_not', 'ds_base_personalsetting', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15743907892209070', 'ds_base_personalsetting', '15743883355620948', 'ds_not', 'ds_not', 'ds_base_personalsetting', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15743908035616696', 'ds_base_personalsetting', '15743902870570524', 'ds_not', 'ds_not', 'ds_base_personalsetting', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15767391792037492', 'ds03_document', '15767391792037492', 'ds_not', 'ds_not', 'ds03_document', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157673917920374921', 'ds03_document', '157673917920374921', 'ds_not', 'ds_not', 'ds03_document', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157673917920374922', 'ds03_document', '157673917920374922', 'ds_not', 'ds_not', 'ds03_document', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15767394910584892', 'ds03_document', '15767392785132792', 'ds_is', 'ds_not', 'ds03_document', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15767395089477456', 'ds03_document', '15767394130129080', 'ds_not', 'ds_not', 'ds03_document', 3, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15767395240641856', 'ds03_document', '15767394570660656', 'ds_is', 'ds_not', 'ds03_document', 4, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15767396038855300', 'ds03_document', '15767395717955204', 'ds_not', 'ds_not', 'ds03_document', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15770889423450730', 'ds03_typedic', '15770889423450730', 'ds_not', 'ds_not', 'ds03_typedic', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157708894234507301', 'ds03_typedic', '157708894234507301', 'ds_not', 'ds_not', 'ds03_typedic', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157708894234507302', 'ds03_typedic', '157708894234507302', 'ds_not', 'ds_not', 'ds03_typedic', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157708894234507303', 'ds03_typedic', '157708894234507303', 'ds_not', 'ds_not', 'ds03_typedic', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157708894234507304', 'ds03_typedic', '157708894234507304', 'ds_not', 'ds_not', 'ds03_typedic', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15773299149695840', 'ds3_plugin', '15773299149695840', 'ds_not', 'ds_not', 'ds3_plugin', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157732991496958401', 'ds3_plugin', '157732991496958401', 'ds_not', 'ds_not', 'ds3_plugin', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('157732991496958402', 'ds3_plugin', '157732991496958402', 'ds_not', 'ds_not', 'ds3_plugin', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15773304856073712', 'ds3_plugin', '15773299898033080', 'ds_not', 'ds_not', 'ds3_plugin', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15773304986267542', 'ds3_plugin', '15773300352308164', 'ds_not', 'ds_not', 'ds3_plugin', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15777573319030492', 'ds03_document', '15770890557755826', 'ds_not', 'ds_not', 'ds03_document', 6, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15881679759680948', 'ds_getway_2', '15881679759680948', 'ds_not', 'ds_not', 'ds_getway_2', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('158816797596809481', 'ds_getway_2', '158816797596809481', 'ds_not', 'ds_not', 'ds_getway_2', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('158816797596809482', 'ds_getway_2', '158816797596809482', 'ds_not', 'ds_not', 'ds_getway_2', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15882293698582492', 'ds3_homepage', '15882293698582492', 'ds_not', 'ds_not', 'ds3_homepage', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('158822936985824921', 'ds3_homepage', '158822936985824921', 'ds_not', 'ds_not', 'ds3_homepage', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('158822936985824922', 'ds3_homepage', '158822936985824922', 'ds_not', 'ds_not', 'ds3_homepage', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15882298387068268', 'ds_ng_demo', '15882298387068268', 'ds_not', 'ds_not', 'ds_ng_demo', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('158822983870682681', 'ds_ng_demo', '158822983870682681', 'ds_not', 'ds_not', 'ds_ng_demo', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('158822983870682682', 'ds_ng_demo', '158822983870682682', 'ds_not', 'ds_not', 'ds_ng_demo', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15882504263422292', 'ds_dic_tableshowtype', '15882504263422292', 'ds_not', 'ds_not', 'ds_dic_tableshowtype', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('158825042634222921', 'ds_dic_tableshowtype', '158825042634222921', 'ds_not', 'ds_not', 'ds_dic_tableshowtype', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('158825042634222922', 'ds_dic_tableshowtype', '158825042634222922', 'ds_not', 'ds_not', 'ds_dic_tableshowtype', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('158825042634222923', 'ds_dic_tableshowtype', '158825042634222923', 'ds_not', 'ds_not', 'ds_dic_tableshowtype', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('158825042634222924', 'ds_dic_tableshowtype', '158825042634222924', 'ds_not', 'ds_not', 'ds_dic_tableshowtype', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15936576053110734', 'blog_article', '15936576053110734', 'ds_not', 'ds_not', 'blog_article', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159365760531107341', 'blog_article', '159365760531107341', 'ds_not', 'ds_not', 'blog_article', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159365760531107342', 'blog_article', '159365760531107342', 'ds_not', 'ds_not', 'blog_article', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15936582482716034', 'blog_article', '15936578407017272', 'ds_not', 'ds_not', 'blog_article', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15936582637607876', 'blog_article', '15936579828369772', 'ds_is', 'ds_not', 'blog_article', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15936591471951540', 'bolg_tag', '15936591471951540', 'ds_not', 'ds_not', 'bolg_tag', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159365914719515401', 'bolg_tag', '159365914719515401', 'ds_not', 'ds_not', 'bolg_tag', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159365914719515402', 'bolg_tag', '159365914719515402', 'ds_not', 'ds_not', 'bolg_tag', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159365914719515403', 'bolg_tag', '159365914719515403', 'ds_not', 'ds_not', 'bolg_tag', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159365914719515404', 'bolg_tag', '159365914719515404', 'ds_not', 'ds_not', 'bolg_tag', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15936602640599480', 'bolg_summary_a', '15936602640599480', 'ds_not', 'ds_not', 'bolg_summary_a', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159366026405994801', 'bolg_summary_a', '159366026405994801', 'ds_not', 'ds_not', 'bolg_summary_a', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159366026405994802', 'bolg_summary_a', '159366026405994802', 'ds_not', 'ds_not', 'bolg_summary_a', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159366026405994803', 'bolg_summary_a', '159366026405994803', 'ds_not', 'ds_not', 'bolg_summary_a', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159366026405994804', 'bolg_summary_a', '159366026405994804', 'ds_not', 'ds_not', 'bolg_summary_a', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159366035189707761', 'bolg_summary_b', '159366035189707761', 'ds_not', 'ds_not', 'bolg_summary_b', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159366035189707762', 'bolg_summary_b', '159366035189707762', 'ds_not', 'ds_not', 'bolg_summary_b', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15936604945558024', 'bolg_summary_b', '15936603812078488', 'ds_not', 'ds_is', 'bolg_summary_b', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15936605148574724', 'bolg_summary_b', '15936604660001840', 'ds_not', 'ds_not', 'bolg_summary_b', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('15936664754973776', 'blog_type', '15936664754973776', 'ds_not', 'ds_not', 'blog_type', NULL, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159366647549737761', 'blog_type', '159366647549737761', 'ds_not', 'ds_not', 'blog_type', 998, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159366647549737762', 'blog_type', '159366647549737762', 'ds_not', 'ds_not', 'blog_type', 999, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159366647549737763', 'blog_type', '159366647549737763', 'ds_not', 'ds_not', 'blog_type', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('159366647549737764', 'blog_type', '159366647549737764', 'ds_not', 'ds_not', 'blog_type', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('2', 'ds_dic_base_table', '43', 'ds_not', 'ds_not', 'ds_dic_base_table', 3, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('21', 'ds_base_showlist', '101', 'ds_is', 'ds_not', 'ds_base_showlist', 1, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('22', 'ds_base_showlist', '103', 'ds_is', 'ds_not', 'ds_base_showlist', 2, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('23', 'ds_base_showlist', '104', 'ds_not', 'ds_is', 'ds_base_showlist', 5, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('24', 'ds_base_showlist', '105', 'ds_not', 'ds_is', 'ds_base_showlist', 4, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('25', 'ds_base_showlist', '2', 'ds_is', 'ds_not', 'ds_base_field', 3, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('3', 'ds_dic_base_table', '44', 'ds_not', 'ds_is', 'ds_dic_base_table', 4, 'ds_is', 'ds_is');
INSERT INTO `ds_base_showlist` VALUES ('4', 'ds_dic_base_table', '45', 'ds_not', 'ds_is', 'ds_dic_base_table', 5, 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for ds_base_tablebtu
-- ----------------------------
DROP TABLE IF EXISTS `ds_base_tablebtu`;
CREATE TABLE `ds_base_tablebtu`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_detele` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_tablename` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_btutype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'DsTableAddDataComponent',
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_base_tablebtu
-- ----------------------------
INSERT INTO `ds_base_tablebtu` VALUES ('15707376646808734', 'ds_is', 'ds_is', 'ds_dic_base_table', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15707390514951744', 'ds_is', 'ds_is', 'ds_dic_system', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15707595925860248', 'ds_is', 'ds_is', 'test_note', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15707603024113364', 'ds_is', 'ds_is', 'ds_base_field', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15707603114064208', 'ds_is', 'ds_is', 'ds_base_showlist', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15707622675524456', 'ds_is', 'ds_is', 'ds_test2', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15707725531734736', 'ds_is', 'ds_is', 'test22', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15707726761327292', 'ds_is', 'ds_is', 'test22', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15707760564877746', 'ds_is', 'ds_is', 'test22', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15708546850863432', 'ds_is', 'ds_is', 'ds_dic_priority', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15709399152114998', 'ds_is', 'ds_is', 'ds_dic_echartstype', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15709409236267702', 'ds_is', 'ds_is', 'ds_base_echartsetting', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15709800012957616', 'ds_is', 'ds_is', 'test2', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15711459671624722', 'ds_is', 'ds_is', 'ds_dic_btutype', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15712275318471876', 'ds_is', 'ds_is', 'ds_dic_fieldtype', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15713309534531488', 'ds_is', 'ds_is', 'note_romote', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15715463008012158', 'ds_is', 'ds_is', 'ds_base_echartsettingfey', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15716468548175406', 'ds_is', 'ds_is', 'ds_baseusers', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15716475119176078', 'ds_is', 'ds_is', 'ds_basegetwayserve', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15721616315948724', 'ds_is', 'ds_is', 'ds_base_jurisdiction', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15721640648306400', 'ds_is', 'ds_is', 'ds_dic_jurisdiction', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15728734866284800', 'ds_is', 'ds_is', 'ds_dic_tablecomponent', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15743183003831264', 'ds_is', 'ds_is', 'ds_dev_text', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15743244402796984', 'ds_is', 'ds_is', 'ds_test4', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15743879049786540', 'ds_is', 'ds_is', 'ds_base_personalsetting', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15767391792037492', 'ds_is', 'ds_is', 'ds03_document', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15770889423450730', 'ds_is', 'ds_is', 'ds03_typedic', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15773299149695840', 'ds_is', 'ds_is', 'ds3_plugin', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15881679759680948', 'ds_is', 'ds_is', 'ds_getway_2', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15882293698582492', 'ds_is', 'ds_is', 'ds3_homepage', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15882298387068268', 'ds_is', 'ds_is', 'ds_ng_demo', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15882504263422292', 'ds_is', 'ds_is', 'ds_dic_tableshowtype', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15936576053110734', 'ds_is', 'ds_is', 'blog_article', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15936591471951540', 'ds_is', 'ds_is', 'bolg_tag', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15936602640599480', 'ds_is', 'ds_is', 'bolg_summary_a', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15936603518970776', 'ds_is', 'ds_is', 'bolg_summary_b', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('15936664754973776', 'ds_is', 'ds_is', 'blog_type', 'DsTableAddDataComponent');
INSERT INTO `ds_base_tablebtu` VALUES ('2222', 'ds_is', 'ds_is', 'ds_base_tablebtu', 'DsTableAddDataComponent');

-- ----------------------------
-- Table structure for ds_basegetwayserve
-- ----------------------------
DROP TABLE IF EXISTS `ds_basegetwayserve`;
CREATE TABLE `ds_basegetwayserve`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `serveraddress` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'http://localhost:8080',
  `serversystem` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `serverdescribe` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_basegetwayserve
-- ----------------------------
INSERT INTO `ds_basegetwayserve` VALUES ('15716478053192864', 'ds_is', 'ds_is', 'http://localhost:10001', 'dsapi', 'ds开发客户端');
INSERT INTO `ds_basegetwayserve` VALUES ('15739609343806248', 'ds_is', 'ds_is', 'http://localhost:10002', 'ds_file', '文件系统');
INSERT INTO `ds_basegetwayserve` VALUES ('15750160497957072', 'ds_is', 'ds_is', 'http://localhost:10003', 'ds_mock', 'mock数据');

-- ----------------------------
-- Table structure for ds_baseusers
-- ----------------------------
DROP TABLE IF EXISTS `ds_baseusers`;
CREATE TABLE `ds_baseusers`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_name` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_jurisdiction` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_personal_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_user_slat` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_baseusers
-- ----------------------------
INSERT INTO `ds_baseusers` VALUES ('15716474548689852', 'ds_is', 'ds_is', 'admin', '系统管理员', 'admin1234', 'ds_superadmin', '', '1234');
INSERT INTO `ds_baseusers` VALUES ('15721647740103616', 'ds_is', 'ds_is', 'admin_test', '测试员', 'admin_test', 'ds_test', '', '');

-- ----------------------------
-- Table structure for ds_dev_text
-- ----------------------------
DROP TABLE IF EXISTS `ds_dev_text`;
CREATE TABLE `ds_dev_text`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_title` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_date` datetime(0) NOT NULL,
  `ds_content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dev_text
-- ----------------------------
INSERT INTO `ds_dev_text` VALUES ('15743185367911910', 'ds_is', 'ds_is', '开发自定义样式', '2019-11-21 14:42:21', '# 开发自定义样式\n## 文件服务器的搭建\n在搭建文件服务器时发现自己之前写的getway不适应文件的转发，所以升级了，在实验的的期间，截止2019年11月21日，还余下下面问题\n1. 对于用户表的设计，用户信息的获取，存储\n2. 首页的设计，登录的设计，游客的设计\n3. 文件框表单的设计\n\n');
INSERT INTO `ds_dev_text` VALUES ('15743194295638944', 'ds_is', 'ds_is', '关于ant design颜色记录', '2019-11-21 14:57:21', '### 主要的六大颜色\n \"#40a9ff\" 主要颜色\n \"#1890ff\" 按钮边框色，链接色\n \"#40a9ff\" 链接hover色\n \"#096dd9\" 链接active色\n \"#b7eb8f\"  success颜色\n \"#91d5ff\" info的border颜色');
INSERT INTO `ds_dev_text` VALUES ('16069021689798898', 'ds_is', 'ds_is', 'wqeqw', '2020-12-02 17:43:28', '##### Eqweqwe');

-- ----------------------------
-- Table structure for ds_dic_base_table
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_base_table`;
CREATE TABLE `ds_dic_base_table`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_table_system` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_table_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_fieldseting` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_delete` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_table_component` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'dsdefaultcomponent',
  `ds_tableshowtype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'defalute_show',
  PRIMARY KEY (`ds_id`, `ds_key`) USING BTREE,
  INDEX `table_system`(`ds_table_system`) USING BTREE,
  INDEX `table_type`(`ds_table_type`) USING BTREE,
  INDEX `ds_key`(`ds_key`) USING BTREE,
  CONSTRAINT `table_system` FOREIGN KEY (`ds_table_system`) REFERENCES `ds_dic_system` (`ds_key`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `table_type` FOREIGN KEY (`ds_table_type`) REFERENCES `ds_dic_tabletype` (`ds_key`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_base_table
-- ----------------------------
INSERT INTO `ds_dic_base_table` VALUES ('0', 'ds_dic_base_table', '基础数据表', 'ds_base', 'ds_operate', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('1', 'ds_dic_system', '系统表', 'ds_base', 'ds_operate', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15704467924942516', 'ds_test2', '測試表1', 'ds_test', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsmarkdown', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15706087022172952', 'ds_base_setbutton', '按钮表', 'ds_base', 'ds_dic', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15706089759124990', 'ds_dic_btutype', '按钮类型', 'ds_base', 'ds_dic', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15706331087290594', 'test_note', '記事本', 'ds_test', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15707314115406996', 'ds_base_tablebtu', '表按钮', 'ds_base', 'ds_seytem', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15708546850863432', 'ds_dic_priority', '优先级表', 'ds_test', 'ds_dic', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15709401207424480', 'ds_dic_echartstype', '图表类型', 'ds_base', 'ds_dic', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15709409236267702', 'ds_base_echartsetting', '图表设置', 'ds_base', 'ds_seytem', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15709800012957616', 'test2', '测试表2', 'ds_test', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15713309534531488', 'note_romote', '记事本备注表', 'ds_test', 'ds_seytem', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15715463008012158', 'ds_base_echartsettingfey', '图表设置表格', 'ds_base', 'ds_seytem', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15716468548175406', 'ds_baseusers', '用户表', 'ds_base', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15716475119176078', 'ds_basegetwayserve', 'getway服务', 'ds_base', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15728734866284800', 'ds_dic_tablecomponent', '表组件字段', 'ds_base', 'ds_dic', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15743183003831264', 'ds_dev_text', '开发历程记录表', 'ds_test', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15743244402796984', 'ds_test4', '测试表3', 'ds_test', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15743879049786540', 'ds_base_personalsetting', '个人设置表', 'ds_base', 'ds_seytem', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15767391792037492', 'ds03_document', '文档', 'ds_d03', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15770889423450730', 'ds03_typedic', 'ds3文档类型', 'ds_d03', 'ds_dic', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15773299149695840', 'ds3_plugin', '插件', 'ds_d03', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15881679759680948', 'ds_getway_2', 'getway第二版', 'ds_base', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'getway02', 'component_show');
INSERT INTO `ds_dic_base_table` VALUES ('15882293698582492', 'ds3_homepage', 'ds3页面', 'ds_customization', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'ds3system', 'router_show');
INSERT INTO `ds_dic_base_table` VALUES ('15882298387068268', 'ds_ng_demo', 'ngDemo页面', 'ds_customization', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsngdemo', 'router_show');
INSERT INTO `ds_dic_base_table` VALUES ('15882504263422292', 'ds_dic_tableshowtype', '表显示类型', 'ds_base', 'ds_dic', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15936576053110734', 'blog_article', '博客文章', 'blog_system', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15936591471951540', 'bolg_tag', '博客tag', 'blog_system', 'ds_dic', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15936602640599480', 'bolg_summary_a', '博客目录第一层', 'blog_system', 'ds_dic', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15936603518970776', 'bolg_summary_b', '博客目录第二层', 'blog_system', 'ds_operate', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('15936664754973776', 'blog_type', '博客类型', 'blog_system', 'ds_dic', 'ds_is', 'ds_is', 'ds_is', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('2', 'ds_dic_tabletype', '表类型', 'ds_base', 'ds_dic', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('3', 'ds_base_jurisdiction', '权限表', 'ds_base', 'ds_seytem', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('4', 'ds_dic_jurisdictiontype', '权限类型', 'ds_base', 'ds_dic', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('5', 'ds_dic_ifornot', '是否字典', 'ds_base', 'ds_dic', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('6', 'ds_base_field', '基础字段表', 'ds_base', 'ds_seytem', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('7', 'ds_dic_fieldtype', '字段类型', 'ds_base', 'ds_dic', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('8', 'ds_dic_jurisdiction', '角色表', 'ds_base', 'ds_operate', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');
INSERT INTO `ds_dic_base_table` VALUES ('9', 'ds_base_showlist', '列表显示设置表', 'ds_base', 'ds_seytem', 'ds_is', 'ds_is', 'ds_not', 'dsdefaultcomponent', 'defalute_show');

-- ----------------------------
-- Table structure for ds_dic_btutype
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_btutype`;
CREATE TABLE `ds_dic_btutype`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_btutype
-- ----------------------------
INSERT INTO `ds_dic_btutype` VALUES ('0', 'modal', 'modal', '', 'ds_is');
INSERT INTO `ds_dic_btutype` VALUES ('1', 'popconfirm', 'popconfirm', '', 'ds_is');

-- ----------------------------
-- Table structure for ds_dic_echartstype
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_echartstype`;
CREATE TABLE `ds_dic_echartstype`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_echartstype
-- ----------------------------
INSERT INTO `ds_dic_echartstype` VALUES ('15709404302885144', 'ds_basebrokenline', '基础折线图', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_echartstype` VALUES ('15709407498303736', 'ds_basebar', '基础柱状图', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_echartstype` VALUES ('15709407818847864', 'ds_basebardiagram', '基础条形图', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_echartstype` VALUES ('15709408259997524', 'ds_basepie', '基础饼图', 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for ds_dic_fieldtype
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_fieldtype`;
CREATE TABLE `ds_dic_fieldtype`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_detele` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  PRIMARY KEY (`ds_id`, `ds_key`) USING BTREE,
  INDEX `ds_key`(`ds_key`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_fieldtype
-- ----------------------------
INSERT INTO `ds_dic_fieldtype` VALUES ('0', 'ds_text', '文本框', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('1', 'ds_select', '下拉列表', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('15712286072130806', 'ds_checkbox', '多选框', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('15712286261762600', 'ds_datepicker', '日期选择框', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('15712286508150124', 'ds_textarea', '文本域', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('15712286725573742', 'ds_radio', '单选框', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('15713253038060976', 'ds_table', '表格类型', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('15715817700363974', 'ds_number', '数字框', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('15728729645454506', 'ds_richtext', '富文本', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('15728730036460156', 'ds_markdown', 'markdown编辑器', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('15743203714003274', 'ds_picdiv', '图片框', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('15881667689342620', 'ds_mapdata', '拾取地图', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('2', 'ds_foreignkey', '外键', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('3', 'ds_sort', '排序字段', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_fieldtype` VALUES ('4', 'ds_operatebtu', '操作按钮', 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for ds_dic_ifornot
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_ifornot`;
CREATE TABLE `ds_dic_ifornot`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_detele` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  PRIMARY KEY (`ds_id`, `ds_key`) USING BTREE,
  INDEX `ds_key`(`ds_key`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_ifornot
-- ----------------------------
INSERT INTO `ds_dic_ifornot` VALUES ('0', 'ds_not', '否', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_ifornot` VALUES ('1', 'ds_is', '是', 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for ds_dic_jurisdiction
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_jurisdiction`;
CREATE TABLE `ds_dic_jurisdiction`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  INDEX `ds_key`(`ds_key`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_jurisdiction
-- ----------------------------
INSERT INTO `ds_dic_jurisdiction` VALUES ('0', 'ds_superadmin', '超级管理员');
INSERT INTO `ds_dic_jurisdiction` VALUES ('15721645767912960', 'ds_test', '超级测试员');

-- ----------------------------
-- Table structure for ds_dic_jurisdictiontype
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_jurisdictiontype`;
CREATE TABLE `ds_dic_jurisdictiontype`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_detele` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  PRIMARY KEY (`ds_id`, `ds_key`) USING BTREE,
  INDEX `ds_key`(`ds_key`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_jurisdictiontype
-- ----------------------------
INSERT INTO `ds_dic_jurisdictiontype` VALUES ('0', 'ds_system', '系统权限', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_jurisdictiontype` VALUES ('1', 'ds_table', '表权限', 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for ds_dic_priority
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_priority`;
CREATE TABLE `ds_dic_priority`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_detele` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_key` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_priority
-- ----------------------------
INSERT INTO `ds_dic_priority` VALUES ('15708549460204936', 'ds_is', 'ds_is', '1', '重要');
INSERT INTO `ds_dic_priority` VALUES ('15708549567931728', 'ds_is', 'ds_is', '0', '紧急');
INSERT INTO `ds_dic_priority` VALUES ('15708549683649334', 'ds_is', 'ds_is', '3', '一般');

-- ----------------------------
-- Table structure for ds_dic_system
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_system`;
CREATE TABLE `ds_dic_system`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`, `ds_key`) USING BTREE,
  INDEX `ds_key`(`ds_key`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_system
-- ----------------------------
INSERT INTO `ds_dic_system` VALUES ('0', 'ds_base', '开发系统');
INSERT INTO `ds_dic_system` VALUES ('1', 'ds_system', '全局系统');
INSERT INTO `ds_dic_system` VALUES ('15704466102443776', 'ds_test', '測試系統');
INSERT INTO `ds_dic_system` VALUES ('15767391346154144', 'ds_d03', 'ds0.0.3');
INSERT INTO `ds_dic_system` VALUES ('15882291585560914', 'ds_customization', '客制化页面');
INSERT INTO `ds_dic_system` VALUES ('15936575526619164', 'blog_system', '博客系统');

-- ----------------------------
-- Table structure for ds_dic_tablecomponent
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_tablecomponent`;
CREATE TABLE `ds_dic_tablecomponent`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_tablecomponent
-- ----------------------------
INSERT INTO `ds_dic_tablecomponent` VALUES ('15728735387542240', 'dsdefaultcomponent', '默认', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_tablecomponent` VALUES ('15728736108230288', 'dsmarkdown', '博客页面', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_tablecomponent` VALUES ('15881676905978562', 'dsngdemo', 'angularDemo页面', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_tablecomponent` VALUES ('15881679488010824', 'getway02', 'getwayV2', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_tablecomponent` VALUES ('15883284835437872', 'ds3system', 'ds系统页面', 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for ds_dic_tableshowtype
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_tableshowtype`;
CREATE TABLE `ds_dic_tableshowtype`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_tableshowtype
-- ----------------------------
INSERT INTO `ds_dic_tableshowtype` VALUES ('15882504995658264', 'defalute_show', '默认显示', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_tableshowtype` VALUES ('15882505606875824', 'component_show', '动态组件', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_tableshowtype` VALUES ('15882505773893056', 'router_show', '路由显示', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_tableshowtype` VALUES ('15882505906289830', 'plugin_show', '插件显示', 'ds_is', 'ds_is');
INSERT INTO `ds_dic_tableshowtype` VALUES ('15885028157997224', 'iframe_show', 'iframe显示', 'ds_is', 'ds_is');

-- ----------------------------
-- Table structure for ds_dic_tabletype
-- ----------------------------
DROP TABLE IF EXISTS `ds_dic_tabletype`;
CREATE TABLE `ds_dic_tabletype`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_key` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_value` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '998',
  `ds_btu_detele` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  PRIMARY KEY (`ds_id`, `ds_key`) USING BTREE,
  INDEX `ds_key`(`ds_key`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_dic_tabletype
-- ----------------------------
INSERT INTO `ds_dic_tabletype` VALUES ('0', 'ds_seytem', '系统', '998', 'ds_is');
INSERT INTO `ds_dic_tabletype` VALUES ('1', 'ds_operate', '操作', '998', 'ds_is');
INSERT INTO `ds_dic_tabletype` VALUES ('2', 'ds_dic', '字典', '998', 'ds_is');

-- ----------------------------
-- Table structure for ds_getway_2
-- ----------------------------
DROP TABLE IF EXISTS `ds_getway_2`;
CREATE TABLE `ds_getway_2`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_getway_2
-- ----------------------------

-- ----------------------------
-- Table structure for ds_ng_demo
-- ----------------------------
DROP TABLE IF EXISTS `ds_ng_demo`;
CREATE TABLE `ds_ng_demo`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_ng_demo
-- ----------------------------

-- ----------------------------
-- Table structure for ds_test2
-- ----------------------------
DROP TABLE IF EXISTS `ds_test2`;
CREATE TABLE `ds_test2`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `test_ceshi1` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_detele` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `test_table` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cestts` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_test2
-- ----------------------------
INSERT INTO `ds_test2` VALUES ('15706303397473808', '第一個問題测试', 'ds_is', 'ds_is', '', '');
INSERT INTO `ds_test2` VALUES ('15708471714393506', '随便加一条测试啊阿达', 'ds_is', 'ds_is', '', '');
INSERT INTO `ds_test2` VALUES ('15708472752433888', '随便加一条阿萨德', 'ds_is', 'ds_is', '', '');
INSERT INTO `ds_test2` VALUES ('15708491413994150', 'as', 'ds_is', 'ds_is', '', '');

-- ----------------------------
-- Table structure for ds_test4
-- ----------------------------
DROP TABLE IF EXISTS `ds_test4`;
CREATE TABLE `ds_test4`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `test1` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '123',
  `re` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ds_test4
-- ----------------------------
INSERT INTO `ds_test4` VALUES ('15743246018024976', 'ds_is', 'ds_is', '123', '[{\"value\":\"2\",\"label\":\"ds_dic\",\"checked\":true},{\"value\":\"1\",\"label\":\"ds_operate\"},{\"value\":\"0\",\"label\":\"ds_seytem\",\"checked\":true}]');

-- ----------------------------
-- Table structure for note_romote
-- ----------------------------
DROP TABLE IF EXISTS `note_romote`;
CREATE TABLE `note_romote`  (
  `ds_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_detele` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `note_dec` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `note_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of note_romote
-- ----------------------------
INSERT INTO `note_romote` VALUES ('15713335712217552', 'ds_is', 'ds_is', '增加了表格类型，在晚上聊天的时候', '15713249668835280');
INSERT INTO `note_romote` VALUES ('15713337122437086', 'ds_is', 'ds_is', '哈哈哈哈，测试测试', '15713249668835280');
INSERT INTO `note_romote` VALUES ('15715741149488888', 'ds_is', 'ds_is', 'j接下来全力写表单控件联动', '15711479088733652');
INSERT INTO `note_romote` VALUES ('15715790960446440', 'ds_is', 'ds_is', '处理表单控件联动的同时解决布局问题', '15711479088733652');
INSERT INTO `note_romote` VALUES ('15715796634292990', 'ds_is', 'ds_is', '测试', '15711479088733652');
INSERT INTO `note_romote` VALUES ('15716575890634952', 'ds_is', 'ds_is', '现在使用的是存储，不是比较好的功能，以后看能不能取得比较好的方式解决', '15707783643999756');
INSERT INTO `note_romote` VALUES ('15724854321469380', 'ds_is', 'ds_is', '哈哈啊', '15724854194887026');
INSERT INTO `note_romote` VALUES ('15724857553956052', 'ds_is', 'ds_is', '现在所有的字段都没有剔除出表单校验，全部在表单校验中，只是选择了隐藏', '15724474038199390');
INSERT INTO `note_romote` VALUES ('15724858794218116', 'ds_is', 'ds_is', '删除字段在以后的设计中都做假删除', '15724858324556348');
INSERT INTO `note_romote` VALUES ('15742313451144896', 'ds_is', 'ds_is', '第一个关于文件服务器创建多层新目录问题', '15742313319057840');
INSERT INTO `note_romote` VALUES ('15742314323648666', 'ds_is', 'ds_is', '关于用户表的设计问题，在设计中刚好把密码加盐也设计好，对于特殊提交表单的特殊对待', '15742313319057840');
INSERT INTO `note_romote` VALUES ('15742314803670656', 'ds_is', 'ds_is', '关于指令换肤的联动问题', '15742313319057840');
INSERT INTO `note_romote` VALUES ('15742324400053360', 'ds_is', 'ds_is', '关于请求加载时的加载框接入，在这个问题中每个请求都会如此，很差劲，需要修改', '15742313319057840');
INSERT INTO `note_romote` VALUES ('15742325426916946', 'ds_is', 'ds_is', '暂想的解决方案为，自定义就是自定义，全局自定义，只留其他模块的调用接口，完善返回接口的逻辑', '15735658537649284');
INSERT INTO `note_romote` VALUES ('15742326208180794', 'ds_is', 'ds_is', '使用2.0.0getway版本,将里面的所有处理变为异步', '15742313319057840');
INSERT INTO `note_romote` VALUES ('15742326727058524', 'ds_is', 'ds_is', '关于antdesign的所有颜色全部写出来，判断需要设计多少颜色种类', '15742313319057840');
INSERT INTO `note_romote` VALUES ('15743209140984832', 'ds_is', 'ds_is', '关于新增数据后返回问题，并没有把过滤和排序字段传过去，导致出现bug', '15715846828554872');
INSERT INTO `note_romote` VALUES ('15744084917971466', 'ds_is', 'ds_is', '使用编辑时，对于表单的联动存在问题，很多应该显示的没有显示', '15743202918223036');
INSERT INTO `note_romote` VALUES ('15744087874042522', 'ds_is', 'ds_is', '对于后端新增字段时的长度问题', '15708509106559896');
INSERT INTO `note_romote` VALUES ('15937783688685564', 'ds_is', 'ds_is', '日期的显示应该设置可以显示的格式', '15711484676737052');

-- ----------------------------
-- Table structure for test2
-- ----------------------------
DROP TABLE IF EXISTS `test2`;
CREATE TABLE `test2`  (
  `ds_id` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_detele` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `test_checkbox` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `test_date` datetime(0) NOT NULL,
  `test_textarea` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_yesy` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of test2
-- ----------------------------
INSERT INTO `test2` VALUES ('15712379585307212', 'ds_is', 'ds_is', '[{\"value\":\"ds_seytem\",\"label\":\"系统\"},{\"value\":\"ds_operate\",\"label\":\"操作\",\"checked\":true},{\"value\":\"ds_dic\",\"label\":\"字典\",\"checked\":true}]', '2019-10-16 22:59:20', '阿萨德1232367�😀123😂', 'ds0.0.2/img/5HNbv8_1AoQPzQhPBoVqj0Ms.jpg,ds0.0.2/img/4CZDPebLoatNg8PSR00Hygxk.jpg');
INSERT INTO `test2` VALUES ('15713275531512980', 'ds_is', 'ds_is', '[{\"value\":\"ds_seytem\",\"label\":\"系统\",\"checked\":true},{\"value\":\"ds_operate\",\"label\":\"操作\",\"checked\":true},{\"value\":\"ds_dic\",\"label\":\"字典\"}]', '2019-10-17 23:52:34', '我去额', '');
INSERT INTO `test2` VALUES ('15728767739152272', 'ds_is', 'ds_is', '[{\"value\":\"ds_seytem\",\"label\":\"系统\",\"checked\":true},{\"value\":\"ds_operate\",\"label\":\"操作\"},{\"value\":\"ds_dic\",\"label\":\"字典\"}]', '2019-11-04 22:13:26', '记事本1， 写新页面，，看如何集成更多的东西', '');

-- ----------------------------
-- Table structure for test_note
-- ----------------------------
DROP TABLE IF EXISTS `test_note`;
CREATE TABLE `test_note`  (
  `ds_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `ds_btu_update` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `ds_btu_delete` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_is',
  `noto_text` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `node_result` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'ds_not',
  `note_priority` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '3',
  `note_sort` int(11) NOT NULL DEFAULT 0,
  `note_remote` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ds_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of test_note
-- ----------------------------
INSERT INTO `test_note` VALUES ('15707595996697272', 'ds_is', 'ds_is', 'npm install tslib解决数组展开式问题', 'ds_is', '3', 0, NULL);
INSERT INTO `test_note` VALUES ('15707783643999756', 'ds_is', 'ds_is', '需要修改重新获取tokenId的密码传入', 'ds_is', '3', 10, NULL);
INSERT INTO `test_note` VALUES ('15708508421219108', 'ds_is', 'ds_is', '修改分页问题，已经在table组件中写了回调事件，下一步写在调用取值，修改sql', 'ds_is', '3', 0, NULL);
INSERT INTO `test_note` VALUES ('15708509106559896', 'ds_is', 'ds_is', '增加自增的字段', 'ds_not', '1', 9, NULL);
INSERT INTO `test_note` VALUES ('15708509604746854', 'ds_is', 'ds_is', '完善统计分析的设计（在查询x轴时会存在查询的字段是字典或外键的情况）（缺少图，研究g2)）', 'ds_not', '1', 11, NULL);
INSERT INTO `test_note` VALUES ('15708509851583868', 'ds_is', 'ds_is', '增加时间选择框，完善已有表单的联动，主要是增加字段时的联动', 'ds_is', '3', 0, NULL);
INSERT INTO `test_note` VALUES ('15708513328298248', 'ds_is', 'ds_is', '额外的信息也要加入回调中，不然两个页签都打开字段设置就会有问题', 'ds_is', '0', 0, NULL);
INSERT INTO `test_note` VALUES ('15708594633415732', 'ds_is', 'ds_is', '现在的筛选和排序都是在当前10条，所以需要修改（筛选解决，，排序没有解决）', 'ds_is', '1', 0, NULL);
INSERT INTO `test_note` VALUES ('15709680402107198', 'ds_is', 'ds_is', '把公用组件提出来，例如增加和修改的页面组件提出来', 'ds_is', '0', 0, NULL);
INSERT INTO `test_note` VALUES ('15711479088733652', 'ds_is', 'ds_is', '【表单】，在隐藏表单控件时未将表单的值进行初始化，所以在隐藏后仍然向后端发送', 'ds_is', '0', 3, NULL);
INSERT INTO `test_note` VALUES ('15711484676737052', 'ds_is', 'ds_is', '【字典】键值修改会影响原来数据， 并且修改键值不会有联动效果，用这个字典的表没有变化', 'ds_not', '0', 13, NULL);
INSERT INTO `test_note` VALUES ('15713249668835280', 'ds_is', 'ds_is', '【字段类型】增加表格字段类型', 'ds_is', '0', 0, NULL);
INSERT INTO `test_note` VALUES ('15715846828554872', 'ds_is', 'ds_is', '表格数据的搜索问题', 'ds_not', '3', 14, NULL);
INSERT INTO `test_note` VALUES ('15724474038199390', 'ds_is', 'ds_is', '关于增加数据提交问题，循环的是字段，但是表单校验中是把一些字段剔除出表单校验了，所以需要重新设计', 'ds_is', '3', 0, NULL);
INSERT INTO `test_note` VALUES ('15724858324556348', 'ds_is', 'ds_is', '关于删除数据的问题，有表格字段的外表并没有进行删除，以后会占据空间', 'ds_not', '3', 2, NULL);
INSERT INTO `test_note` VALUES ('15735658537649284', 'ds_is', 'ds_is', '自定义组件在返回时存在严重问题，markdown在表单组中无法被使用，同时会有报错等', 'ds_not', '3', 2, NULL);
INSERT INTO `test_note` VALUES ('15742313319057840', 'ds_is', 'ds_is', '关于换肤的很多问题', 'ds_not', '3', 1, NULL);
INSERT INTO `test_note` VALUES ('15743202918223036', 'ds_is', 'ds_is', '在所有文本框中输入单引号会导致报错', 'ds_not', '3', 0, NULL);

SET FOREIGN_KEY_CHECKS = 1;
