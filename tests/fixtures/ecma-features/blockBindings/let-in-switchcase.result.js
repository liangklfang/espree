module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "SwitchStatement",
            "discriminant": {
                "type": "Identifier",
                "name": "answer",
                "range": [
                    8,
                    14
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 8
                    },
                    "end": {
                        "line": 1,
                        "column": 14
                    }
                }
            },
            "cases": [
                {
                    "type": "SwitchCase",
                    "test": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "range": [
                            23,
                            25
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 23
                            },
                            "end": {
                                "line": 1,
                                "column": 25
                            }
                        }
                    },
                    "consequent": [
                        {
                            "type": "VariableDeclaration",
                            "declarations": [
                                {
                                    "type": "VariableDeclarator",
                                    "id": {
                                        "type": "Identifier",
                                        "name": "t",
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
                                    "init": {
                                        "type": "Literal",
                                        "value": 42,
                                        "raw": "42",
                                        "range": [
                                            35,
                                            37
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 35
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 37
                                            }
                                        }
                                    },
                                    "range": [
                                        31,
                                        37
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 31
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 37
                                        }
                                    }
                                }
                            ],
                            "kind": "let",
                            "range": [
                                27,
                                38
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 27
                                },
                                "end": {
                                    "line": 1,
                                    "column": 38
                                }
                            }
                        },
                        {
                            "type": "BreakStatement",
                            "label": null,
                            "range": [
                                39,
                                45
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 39
                                },
                                "end": {
                                    "line": 1,
                                    "column": 45
                                }
                            }
                        }
                    ],
                    "range": [
                        18,
                        45
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 18
                        },
                        "end": {
                            "line": 1,
                            "column": 45
                        }
                    }
                }
            ],
            "range": [
                0,
                47
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 47
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        47
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 47
        }
    },
    "tokens": [
        {
            "type": "Keyword",
            "value": "switch",
            "range": [
                0,
                6
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 6
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                7,
                8
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 7
                },
                "end": {
                    "line": 1,
                    "column": 8
                }
            }
        },
        {
            "type": "Identifier",
            "value": "answer",
            "range": [
                8,
                14
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 8
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                14,
                15
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 14
                },
                "end": {
                    "line": 1,
                    "column": 15
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                16,
                17
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 16
                },
                "end": {
                    "line": 1,
                    "column": 17
                }
            }
        },
        {
            "type": "Keyword",
            "value": "case",
            "range": [
                18,
                22
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 18
                },
                "end": {
                    "line": 1,
                    "column": 22
                }
            }
        },
        {
            "type": "Numeric",
            "value": "42",
            "range": [
                23,
                25
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 23
                },
                "end": {
                    "line": 1,
                    "column": 25
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ":",
            "range": [
                25,
                26
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 25
                },
                "end": {
                    "line": 1,
                    "column": 26
                }
            }
        },
        {
            "type": "Keyword",
            "value": "let",
            "range": [
                27,
                30
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 27
                },
                "end": {
                    "line": 1,
                    "column": 30
                }
            }
        },
        {
            "type": "Identifier",
            "value": "t",
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
            "value": "=",
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
            "type": "Numeric",
            "value": "42",
            "range": [
                35,
                37
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 35
                },
                "end": {
                    "line": 1,
                    "column": 37
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                37,
                38
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 37
                },
                "end": {
                    "line": 1,
                    "column": 38
                }
            }
        },
        {
            "type": "Keyword",
            "value": "break",
            "range": [
                39,
                44
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 39
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
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                46,
                47
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 46
                },
                "end": {
                    "line": 1,
                    "column": 47
                }
            }
        }
    ]
};