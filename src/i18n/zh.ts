const zh = {
  // program
  "program.description": "Claude Code Model Switcher - 快速切换 Claude Code 自定义模型配置",

  // common
  "common.not_init": "尚未初始化，请先运行: ccm init",
  "common.model": "模型",
  "common.source": "来源",

  // error
  "error.not_found": '配置 "{name}" 不存在',
  "error.alias_target_missing": '别名 "{alias}" 指向 "{target}"，但该配置不存在',
  "error.invalid_choice": "无效选择",

  // suggest
  "suggest.did_you_mean": "你是不是想说: {name}?",
  "suggest.did_you_mean_header": "你是不是想说:",
  "suggest.use_list": "使用 ccm list 查看所有可用配置",

  // init
  "init.description": "初始化 ccm，选择数据源模式",
  "init.already": "已初始化为 {mode} 模式，是否重新配置？(y/N) ",
  "init.select_mode": "选择数据源模式:",
  "init.cc_switch_detected": "cc-switch 模式 (检测到已安装)",
  "init.cc_switch_desc": "直接读写 cc-switch 数据库，配置与 cc-switch UI 共享",
  "init.cc_switch_not_detected": "cc-switch 模式 (未检测到)",
  "init.cc_switch_need_install": "需要先安装 cc-switch",
  "init.standalone": "独立模式",
  "init.standalone_desc": "使用 ~/.ccm/config.json 存储配置，不依赖 cc-switch",
  "init.choose": "请选择 (1/2): ",
  "init.cc_switch_not_installed": "cc-switch 未安装，请先安装后再选择此模式",
  "init.done_cc_switch": "✓ 已设置为 cc-switch 模式",
  "init.done_standalone": "✓ 已设置为独立模式",

  // config
  "config.description": "查看或切换数据源模式",
  "config.current_mode": "当前模式: {mode}",
  "config.switch_confirm": "是否切换模式？(y/N) ",
  "config.cc_switch_not_installed": "cc-switch 未安装",
  "config.switched": "✓ 已切换为 {mode} 模式",

  // list
  "list.description": "列出所有可用的配置方案",
  "list.empty": "暂无配置方案。使用 ccm save <name> 保存当前配置",
  "list.header": "可用配置:",

  // current
  "current.description": "显示当前生效的配置",
  "current.none": "当前无激活配置",
  "current.settings_header": "当前 settings.json:",
  "current.not_exist": '当前配置 "{name}" 已不存在',
  "current.header": "当前配置: {name}",

  // use
  "use.description": "切换到指定配置方案",
  "use.done": "✓ 已切换到 {name}",
  "use.restart": "重启 Claude Code 生效",

  // save
  "save.description": "从当前 settings.json 保存为新配置",
  "save.overwrite": '配置 "{name}" 已存在，将覆盖',
  "save.done": '✓ 已保存当前配置为 "{name}"',

  // show
  "show.description": "查看配置详情（不指定则显示当前）",
  "show.no_current": "当前无激活配置，请指定名称: ccm show <name>",

  // remove
  "remove.description": "删除配置方案",
  "remove.confirm": '确认删除 "{name}"？(y/N) ',
  "remove.done": '✓ 已删除 "{name}"',

  // alias
  "alias.description": "管理别名",
  "alias.set_description": "设置别名，如: ccm alias set z zenMux-opus4.6",
  "alias.set_done": "✓ 别名已设置: {short} → {name}",
  "alias.rm_description": "删除别名",
  "alias.rm_not_found": '别名 "{short}" 不存在',
  "alias.rm_done": '✓ 已删除别名 "{short}"',
  "alias.list_description": "列出所有别名",
  "alias.list_empty": "暂无别名。使用 ccm alias set <short> <name> 添加",
  "alias.list_header": "别名列表:",

  // locale
  "locale.description": "管理界面语言",
  "locale.current": "当前语言: {locale}",
  "locale.set_description": "设置语言 (zh/en)",
  "locale.set_done": "✓ 语言已设置为 {locale}",
  "locale.set_invalid": "不支持的语言: {locale}，可选: zh, en",

  // store errors
  "store.db_not_found": "cc-switch 数据库不存在: {path}",
} as const;

export type TranslationKey = keyof typeof zh;
export default zh;
