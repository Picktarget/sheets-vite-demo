import "./style.css";

import { LocaleType, Univer, UniverInstanceType, Tools } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import '@univerjs/sheets-numfmt/lib/index.css';
 
import { UniverSheetsNumfmtPlugin } from '@univerjs/sheets-numfmt';
import SheetsNumfmtZhCN from '@univerjs/sheets-numfmt/locale/zh-CN';

/**
 * The ability to import locales from virtual modules and automatically import styles is provided by Univer Plugins. For more details, please refer to: https://univer.ai/guides/sheet/advanced/univer-plugins.
 * If you encounter issues while using the plugin or have difficulty understanding how to use it, please disable Univer Plugins and manually import the language packs and styles.
 * 
 * 【从虚拟模块导入语言包】以及【自动导入样式】是由 Univer Plugins 提供的能力，详情参考：https://univer.ai/zh-CN/guides/sheet/advanced/univer-plugins
 * 如果您在使用该插件的时候出现了问题，或者无法理解如何使用，请禁用 Univer Plugins，并手动导入语言包和样式
 */
import { zhCN, enUS } from 'univer:locales'

const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.EN_US,
  locales: {
    [LocaleType.ZH_CN]: Tools.deepMerge(
      SheetsNumfmtZhCN
    ),
  },
});

univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);

univer.registerPlugin(UniverUIPlugin, {
  container: 'app',
});

univer.registerPlugin(UniverDocsPlugin, {
  hasScroll: false,
});
univer.registerPlugin(UniverDocsUIPlugin);

univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);
univer.registerPlugin(UniverSheetsNumfmtPlugin);

// create univer sheet instance
univer.createUnit(UniverInstanceType.UNIVER_SHEET,{
        "id": "531cc12591924dc1b6e13fbe9aebdc8a",
        "sheetOrder": [
            "24530a28109d44fd924ab0a0a8c3b69e",
        ],
        "name": "cesda",
        "appVersion": "3.0.0-alpha",
        "locale": "zhCn",
        "styles": {
            "1dhU1A": {
                "ht": 1,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": null,
                "n": {
                    "pattern": "@"
                }
            },
            "2KJcXJ": {
                "ht": 1,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(192,192,192)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "4YYOnG": {
                "ht": 3,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 8,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "b3QbsM": {
                "ht": 1,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 8,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "General"
                }
            },
            "bfAFaa": {
                "ht": 3,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 8,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "C42y3r": {
                "ht": 2,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "cL66fx": {
                "ht": 1,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "General"
                }
            },
            "d0LwrV": {
                "ht": 2,
                "vt": 2,
                "bl": 1,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(192,192,192)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "dL7E8O": {
                "ht": 0,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 11,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "General"
                }
            },
            "dQDwjS": {
                "ht": 1,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 8,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": null,
                "n": {
                    "pattern": "General"
                }
            },
            "f6GrL4": {
                "ht": 1,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "fdtKmj": {
                "ht": 3,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 8,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": null,
                "n": {
                    "pattern": "@"
                }
            },
            "gbomIQ": {
                "ht": 1,
                "vt": 2,
                "bl": 1,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(192,192,192)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "H09nnG": {
                "ht": 1,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 8,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "HgCHgM": {
                "ht": 2,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "微软雅黑",
                "fs": 15,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "IqQTIF": {
                "ht": 1,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 8,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "General"
                }
            },
            "jQGI8N": {
                "ht": 2,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 8,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "K50nl0": {
                "ht": 2,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(192,192,192)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "kErtLo": {
                "ht": 1,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 8,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "General"
                }
            },
            "LBCDPt": {
                "ht": 2,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": null,
                "n": {
                    "pattern": "General"
                }
            },
            "Mhvcnm": {
                "ht": 2,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(192,192,192)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "MIgInd": {
                "ht": 2,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "等线",
                "fs": 10,
                "cl": "rgb(0,0,255)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": null,
                "n": {
                    "pattern": "General"
                }
            },
            "mQykee": {
                "ht": 3,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "General"
                }
            },
            "nK4e9Y": {
                "ht": 3,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "#,##0.00"
                }
            },
            "qBNTHP": {
                "ht": 3,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": null,
                "n": {
                    "pattern": "@"
                }
            },
            "S56Rkb": {
                "ht": 2,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 8,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "General"
                }
            },
            "SgcIDT": {
                "ht": 1,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 8,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    },
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            },
            "UI8Ihx": {
                "ht": 2,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": null,
                "n": {
                    "pattern": "@"
                }
            },
            "uQd3VR": {
                "ht": 1,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(192,192,192)"
                },
                "bd": null,
                "n": {
                    "pattern": "@"
                }
            },
            "WUVXlL": {
                "ht": 3,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": null,
                "n": {
                    "pattern": "#,##0.00"
                }
            },
            "xh1gyQ": {
                "ht": 0,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 11,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "t": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "General"
                }
            },
            "Y0GwSJ": {
                "ht": 0,
                "vt": 0,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 11,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(255,255,255)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(255,255,255)"
                        }
                    }
                },
                "n": {
                    "pattern": "General"
                }
            },
            "YSi1nY": {
                "ht": 2,
                "vt": 2,
                "bl": 0,
                "it": 0,
                "ff": "宋体",
                "fs": 9,
                "cl": "rgb(0,0,0)",
                "bg": {
                    "rgb": "rgb(192,192,192)"
                },
                "bd": {
                    "b": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "l": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    },
                    "r": {
                        "s": 1,
                        "cl": {
                            "rgb": "rgb(0,0,0)"
                        }
                    }
                },
                "n": {
                    "pattern": "@"
                }
            }
        },
        "sheets": {
            "24530a28109d44fd924ab0a0a8c3b69e": {
                "type": 0,
                "id": "24530a28109d44fd924ab0a0a8c3b69e",
                "name": "资产负债表",
                "cellData": {
                    "0": {
                        "0": {
                            "s": "HgCHgM",
                            "t": 1,
                            "v": "资产负债表",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "xh1gyQ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "xh1gyQ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "xh1gyQ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "xh1gyQ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "xh1gyQ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "xh1gyQ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "xh1gyQ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "1": {
                        "0": {
                            "s": "kErtLo",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "Y0GwSJ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "S56Rkb",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "Y0GwSJ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "Y0GwSJ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "4YYOnG",
                            "t": 1,
                            "v": "集团财01表",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "Y0GwSJ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "Y0GwSJ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "2": {
                        "0": {
                            "s": "SgcIDT",
                            "t": 1,
                            "v": "单位:",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "dL7E8O",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "jQGI8N",
                            "t": 1,
                            "v": "会计月:",
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "dL7E8O",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "dL7E8O",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "bfAFaa",
                            "t": 1,
                            "v": "金额单位:元",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "dL7E8O",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "dL7E8O",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "3": {
                        "0": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "项目",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "YSi1nY",
                            "t": 1,
                            "v": "行次",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "期末余额",
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "YSi1nY",
                            "t": 1,
                            "v": "上年年末余额",
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "YSi1nY",
                            "t": 1,
                            "v": "项目",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "行次",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "期末余额",
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "YSi1nY",
                            "t": 1,
                            "v": "上年年末余额",
                            "f": null,
                            "si": null
                        }
                    },
                    "4": {
                        "0": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "栏次",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "--",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "1",
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "2",
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "栏次",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "——",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "1",
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "2",
                            "f": null,
                            "si": null
                        }
                    },
                    "5": {
                        "0": {
                            "s": "gbomIQ",
                            "t": 1,
                            "v": "流动资产：",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "1",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "C42y3r",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "C42y3r",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "gbomIQ",
                            "t": 1,
                            "v": "流动负债：",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "47",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "C42y3r",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "C42y3r",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "6": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "货币资金",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "2",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "短期借款",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "48",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "7": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": " ☆交易性金融资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "3",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "☆交易性金融负债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "49",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "8": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "衍生金融资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "4",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "衍生金融负债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "50",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "9": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "应收票据",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "5",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "uQd3VR",
                            "t": 1,
                            "v": "应付票据",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "51",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "WUVXlL",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "10": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "应收账款",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "6",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "应付账款",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "52",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "11": {
                        "0": {
                            "s": "1dhU1A",
                            "t": 1,
                            "v": "☆应收款项融资",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "7",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "预收款项",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "53",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "12": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "预付款项",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "8",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "1dhU1A",
                            "t": 1,
                            "v": "☆合同负债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "54",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "WUVXlL",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "13": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "其他应收款",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "9",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "应付职工薪酬",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "55",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "14": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "其中：其他应收款",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "10",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "WUVXlL",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "应交税费",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "56",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "15": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "      应收股利",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "11",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "其他应付款",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "57",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "16": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "      应收利息",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "12",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "其中：其他应付款",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "58",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "17": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "存货",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "13",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "      应付股利",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "59",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "18": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "内部往来",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "14",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "      应付利息",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "60",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "19": {
                        "0": {
                            "s": "1dhU1A",
                            "t": 1,
                            "v": "☆合同资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "15",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "持有待售负债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "61",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "20": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "持有待售资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "16",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "一年内到期的非流动负债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "62",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "21": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "一年内到期的非流动资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "17",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "其他流动负债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "63",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "22": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "其他流动资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "18",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "d0LwrV",
                            "t": 1,
                            "v": "流动负债合计",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "64",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "23": {
                        "0": {
                            "s": "d0LwrV",
                            "t": 1,
                            "v": "流动资产合计",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "19",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "gbomIQ",
                            "t": 1,
                            "v": "非流动负债：",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "65",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "C42y3r",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "C42y3r",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "24": {
                        "0": {
                            "s": "gbomIQ",
                            "t": 1,
                            "v": "非流动资产：",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "20",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "C42y3r",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "C42y3r",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "长期借款",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "66",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "25": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "☆其他权益工具投资",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "21",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "应付债券",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "67",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "26": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "☆债权投资",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "22",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "    其中：优先股",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "68",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "27": {
                        "0": {
                            "s": "1dhU1A",
                            "t": 1,
                            "v": "☆其他债权投资",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "23",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "          永续债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "69",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "28": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "长期应收款",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "24",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "1dhU1A",
                            "t": 1,
                            "v": "☆租赁负债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "70",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "29": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "长期股权投资",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "25",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "长期应付款",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "71",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "30": {
                        "0": {
                            "s": "1dhU1A",
                            "t": 1,
                            "v": "☆其他非流动金融资产 ",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "26",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "预计负债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "72",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "31": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "投资性房地产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "27",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "递延收益",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "73",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "32": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "固定资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "28",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "递延所得税负债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "74",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "33": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "在建工程",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "29",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "其他非流动负债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "75",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "34": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "生产性生物资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "30",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "d0LwrV",
                            "t": 1,
                            "v": "非流动负债合计",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "76",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "35": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "油气资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "31",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "d0LwrV",
                            "t": 1,
                            "v": "负债合计",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "77",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "36": {
                        "0": {
                            "s": "1dhU1A",
                            "t": 1,
                            "v": "☆使用权资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "32",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "gbomIQ",
                            "t": 1,
                            "v": "所有者权益（或股东权益）：",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "78",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "mQykee",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "mQykee",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "37": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "无形资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "33",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "实收资本（或股本）",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "79",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "38": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "开发支出",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "34",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "其他权益工具",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "80",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "39": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "商誉",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "35",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "    其中：优先股",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "81",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "40": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "长期待摊费用",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "36",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "          永续债",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "82",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "41": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "递延所得税资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "37",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "          其他",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "83",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "42": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "其他非流动资产",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "38",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "资本公积",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "84",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "43": {
                        "0": {
                            "s": "d0LwrV",
                            "t": 1,
                            "v": "非流动资产合计",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "39",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "减：库存股",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "85",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "44": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "40",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "其他综合收益",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "86",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "45": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "41",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "专项储备",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "87",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "46": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "42",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "盈余公积",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "88",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "47": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "43",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "未分配利润",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "89",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "48": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "44",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "d0LwrV",
                            "t": 1,
                            "v": "归属于母公司所有者权益（或股东权益）合计",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "90",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "49": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "45",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "b3QbsM",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "dQDwjS",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "2KJcXJ",
                            "t": 1,
                            "v": "*少数股东权益",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "91",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "50": {
                        "0": {
                            "s": "2KJcXJ",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "46",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "cL66fx",
                            "t": 1,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "d0LwrV",
                            "t": 1,
                            "v": "所有者权益（或股东权益）合计",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "92",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "51": {
                        "0": {
                            "s": "d0LwrV",
                            "t": 1,
                            "v": "资产总计",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "47",
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "d0LwrV",
                            "t": 1,
                            "v": "负债和所有者权益（或股东权益）总计",
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "K50nl0",
                            "t": 1,
                            "v": "93",
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "nK4e9Y",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    },
                    "52": {
                        "0": {
                            "s": "1dhU1A",
                            "t": 1,
                            "v": "单位负责人：",
                            "f": null,
                            "si": null
                        },
                        "1": {
                            "s": "1dhU1A",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "2": {
                            "s": "1dhU1A",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "3": {
                            "s": "UI8Ihx",
                            "t": 1,
                            "v": "财务负责人：",
                            "f": null,
                            "si": null
                        },
                        "4": {
                            "s": "1dhU1A",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "5": {
                            "s": "1dhU1A",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        },
                        "6": {
                            "s": "1dhU1A",
                            "t": 1,
                            "v": "制表人：",
                            "f": null,
                            "si": null
                        },
                        "7": {
                            "s": "1dhU1A",
                            "t": 2,
                            "v": null,
                            "f": null,
                            "si": null
                        }
                    }
                },
                "mergeData": [
                    {
                        "startRow": 1,
                        "startColumn": 0,
                        "endRow": 1,
                        "endColumn": 1,
                        "rangeType": 0
                    },
                    {
                        "startRow": 0,
                        "startColumn": 0,
                        "endRow": 0,
                        "endColumn": 7,
                        "rangeType": 0
                    },
                    {
                        "startRow": 2,
                        "startColumn": 0,
                        "endRow": 2,
                        "endColumn": 1,
                        "rangeType": 0
                    },
                    {
                        "startRow": 1,
                        "startColumn": 2,
                        "endRow": 1,
                        "endColumn": 4,
                        "rangeType": 0
                    },
                    {
                        "startRow": 2,
                        "startColumn": 2,
                        "endRow": 2,
                        "endColumn": 4,
                        "rangeType": 0
                    },
                    {
                        "startRow": 2,
                        "startColumn": 5,
                        "endRow": 2,
                        "endColumn": 7,
                        "rangeType": 0
                    },
                    {
                        "startRow": 1,
                        "startColumn": 5,
                        "endRow": 1,
                        "endColumn": 7,
                        "rangeType": 0
                    }
                ],
                "rowData": {
                    "0": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "1": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "2": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "3": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "4": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "5": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "6": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "7": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "8": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "9": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "10": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "11": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "12": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "13": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "14": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "15": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "16": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "17": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "18": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "19": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "20": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "21": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "22": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "23": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "24": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "25": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "26": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "27": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "28": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "29": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "30": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "31": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "32": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "33": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "34": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "35": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "36": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "37": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "38": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "39": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "40": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "41": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "42": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "43": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "44": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "45": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "46": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "47": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "48": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "49": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "50": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "51": {
                        "hd": 0,
                        "h": 29.326
                    },
                    "52": {
                        "hd": 0,
                        "h": 29.326
                    }
                },
                "columnData": {
                    "0": {
                        "w": 161.154,
                        "hd": 0
                    },
                    "1": {
                        "w": 40.5385,
                        "hd": 0
                    },
                    "2": {
                        "w": 90.6154,
                        "hd": 0
                    },
                    "3": {
                        "w": 91.6923,
                        "hd": 0
                    },
                    "4": {
                        "w": 286.615,
                        "hd": 0
                    },
                    "5": {
                        "w": 40.5385,
                        "hd": 0
                    },
                    "6": {
                        "w": 90.6154,
                        "hd": 0
                    },
                    "7": {
                        "w": 91.6923,
                        "hd": 0
                    }
                },
                "hidden": 0,
                "rowCount": 53,
                "columnCount": 8,
                "zoomRatio": 1,
                "scrollTop": 0,
                "scrollLeft": 0,
                "defaultColumnWidth": 93,
                "defaultRowHeight": 27,
                "status": 1,
                "showGridlines": 1,
                "hideRow": [],
                "hideColumn": [],
                "rowHeader": {
                    "width": 46,
                    "hidden": 0
                },
                "columnHeader": {
                    "height": 20,
                    "hidden": 0
                },
                "selections": [],
                "rightToLeft": 0,
                "pluginMeta": {},
                "tabColor": "",
                "freeze": {
                    "xSplit": 0,
                    "ySplit": 0,
                    "startRow": -1,
                    "startColumn": -1
                }
            },
        },
        "resources": []
    }
);
