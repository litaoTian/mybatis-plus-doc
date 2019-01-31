(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{174:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"逻辑删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑删除","aria-hidden":"true"}},[t._v("#")]),t._v(" 逻辑删除")]),t._v(" "),a("p",[t._v("SpringBoot 配置方式：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("application.yml 加入配置(如果你的默认值和mp默认的一样,该配置可无):")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[t._v("mybatis-plus")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("global-config")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("db-config")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("logic-delete-value")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1 ")]),a("span",{attrs:{class:"token comment"}},[t._v("# 逻辑已删除值(默认为 1)")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("logic-not-delete-value")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0 ")]),a("span",{attrs:{class:"token comment"}},[t._v("# 逻辑未删除值(默认为 0)")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("注册 Bean：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baomidou"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mybatisplus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("injector"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ISqlInjector"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baomidou"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mybatisplus"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extension"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("injector"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LogicSqlInjector"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Bean"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotation"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Configuration"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyBatisPlusConfiguration")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" ISqlInjector "),a("span",{attrs:{class:"token function"}},[t._v("sqlInjector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LogicSqlInjector")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("实体类字段上加上"),a("code",[t._v("@TableLogic")]),t._v("注解")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@TableLogic")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Integer deleted"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("效果: 使用mp自带方法删除和查找都会附带逻辑删除功能 (自己写的xml不会)")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("example\n删除时 "),a("span",{attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v(" deleted"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n查找时 "),a("span",{attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("user")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("where")]),t._v(" deleted"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("附件说明")]),t._v(" "),a("p",[t._v("逻辑删除是为了方便数据恢复和保护数据本身价值等等的一种方案，但实际就是删除。\n如果你需要再查出来就不应使用逻辑删除，而是以一个状态去表示。\n如： 员工离职，账号被锁定等都应该是一个状态字段，此种场景不应使用逻辑删除。\n若确需查找删除数据，如老板需要查看历史所有数据的统计汇总信息，请单独手写sql。")])])])}],!1,null,null,null);e.options.__file="logic-delete.md";s.default=e.exports}}]);