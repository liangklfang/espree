module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "TaggedTemplateExpression",
                "tag": {
                    "type": "Identifier",
                    "name": "raw",
                    "range": [
                        0,
                        3
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 3
                        }
                    }
                },
                "quasi": {
                    "type": "TemplateLiteral",
                    "quasis": [
                        {
                            "type": "TemplateElement",
                            "value": {
                                "raw": "hello ",
                                "cooked": "hello "
                            },
                            "tail": false,
                            "range": [
                                3,
                                12
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 3
                                },
                                "end": {
                                    "line": 1,
                                    "column": 12
                                }
                            }
                        },
                        {
                            "type": "TemplateElement",
                            "value": {
                                "raw": "",
                                "cooked": ""
                            },
                            "tail": true,
                            "range": [
                                42,
                                44
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 42
                                },
                                "end": {
                                    "line": 1,
                                    "column": 44
                                }
                            }
                        }
                    ],
                    "expressions": [
                        {
                            "type": "TemplateLiteral",
                            "quasis": [
                                {
                                    "type": "TemplateElement",
                                    "value": {
                                        "raw": "nested ",
                                        "cooked": "nested "
                                    },
                                    "tail": false,
                                    "range": [
                                        12,
                                        22
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 12
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 22
                                        }
                                    }
                                },
                                {
                                    "type": "TemplateElement",
                                    "value": {
                                        "raw": " blah",
                                        "cooked": " blah"
                                    },
                                    "tail": true,
                                    "range": [
                                        35,
                                        42
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 35
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 42
                                        }
                                    }
                                }
                            ],
                            "expressions": [
                                {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "TemplateLiteral",
                                        "quasis": [
                                            {
                                                "type": "TemplateElement",
                                                "value": {
                                                    "raw": "deeply",
                                                    "cooked": "deeply"
                                                },
                                                "tail": true,
                                                "range": [
                                                    22,
                                                    30
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 22
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 30
                                                    }
                                                }
                                            }
                                        ],
                                        "expressions": [],
                                        "range": [
                                            22,
                                            30
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 22
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 30
                                            }
                                        }
                                    },
                                    "right": {
                                        "type": "ObjectExpression",
                                        "properties": [],
                                        "range": [
                                            33,
                                            35
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 33
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 35
                                            }
                                        }
                                    },
                                    "range": [
                                        22,
                                        35
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 22
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 35
                                        }
                                    }
                                }
                            ],
                            "range": [
                                12,
                                42
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 12
                                },
                                "end": {
                                    "line": 1,
                                    "column": 42
                                }
                            }
                        }
                    ],
                    "range": [
                        3,
                        44
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 3
                        },
                        "end": {
                            "line": 1,
                            "column": 44
                        }
                    }
                },
                "range": [
                    0,
                    44
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 44
                    }
                }
            },
            "range": [
                0,
                45
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 45
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        45
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 45
        }
    },
    "tokens": [
        {
            "type": "Identifier",
            "value": "raw",
            "range": [
                0,
                3
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 3
                }
            }
        },
        {
            "type": "Template",
            "value": "`hello ${",
            "range": [
                3,
                12
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 3
                },
                "end": {
                    "line": 1,
                    "column": 12
                }
            }
        },
        {
            "type": "Template",
            "value": "`nested ${",
            "range": [
                12,
                22
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 22
                }
            }
        },
        {
            "type": "Template",
            "value": "`deeply`",
            "range": [
                22,
                30
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 22
                },
                "end": {
                    "line": 1,
                    "column": 30
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "+",
            "range": [
                31,
                32
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 31
                },
                "end": {
                    "line": 1,
                    "column": 32
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                33,
                34
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 33
                },
                "end": {
                    "line": 1,
                    "column": 34
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                34,
                35
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 34
                },
                "end": {
                    "line": 1,
                    "column": 35
                }
            }
        },
        {
            "type": "Template",
            "value": "} blah`",
            "range": [
                35,
                42
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 35
                },
                "end": {
                    "line": 1,
                    "column": 42
                }
            }
        },
        {
            "type": "Template",
            "value": "}`",
            "range": [
                42,
                44
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 42
                },
                "end": {
                    "line": 1,
                    "column": 44
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                44,
                45
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 44
                },
                "end": {
                    "line": 1,
                    "column": 45
                }
            }
        }
    ]
};