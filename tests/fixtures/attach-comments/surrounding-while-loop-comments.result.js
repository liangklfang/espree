module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "f",
                "range": [
                    9,
                    10
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 9
                    },
                    "end": {
                        "line": 1,
                        "column": 10
                    }
                }
            },
            "params": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "WhileStatement",
                        "test": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "range": [
                                37,
                                41
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 37
                                },
                                "end": {
                                    "line": 1,
                                    "column": 41
                                }
                            }
                        },
                        "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "range": [
                                43,
                                46
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 43
                                },
                                "end": {
                                    "line": 1,
                                    "column": 46
                                }
                            }
                        },
                        "range": [
                            30,
                            46
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 30
                            },
                            "end": {
                                "line": 1,
                                "column": 46
                            }
                        },
                        "leadingComments": [
                            {
                                "type": "Block",
                                "value": " infinite ",
                                "range": [
                                    15,
                                    29
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 15
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 29
                                    }
                                }
                            }
                        ],
                        "trailingComments": [
                            {
                                "type": "Block",
                                "value": " bar ",
                                "range": [
                                    47,
                                    56
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 47
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 56
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "each",
                                    "range": [
                                        61,
                                        65
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 61
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 65
                                        }
                                    }
                                },
                                "init": null,
                                "range": [
                                    61,
                                    65
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 61
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 65
                                    }
                                }
                            }
                        ],
                        "kind": "var",
                        "range": [
                            57,
                            66
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 57
                            },
                            "end": {
                                "line": 1,
                                "column": 66
                            }
                        },
                        "leadingComments": [
                            {
                                "type": "Block",
                                "value": " bar ",
                                "range": [
                                    47,
                                    56
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 47
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 56
                                    }
                                }
                            }
                        ]
                    }
                ],
                "range": [
                    13,
                    68
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 13
                    },
                    "end": {
                        "line": 1,
                        "column": 68
                    }
                }
            },
            "generator": false,
            "expression": false,
            "range": [
                0,
                68
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 68
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        68
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 68
        }
    },
    "comments": [
        {
            "type": "Block",
            "value": " infinite ",
            "range": [
                15,
                29
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 15
                },
                "end": {
                    "line": 1,
                    "column": 29
                }
            }
        },
        {
            "type": "Block",
            "value": " bar ",
            "range": [
                47,
                56
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 47
                },
                "end": {
                    "line": 1,
                    "column": 56
                }
            }
        }
    ],
    "tokens": [
        {
            "type": "Keyword",
            "value": "function",
            "range": [
                0,
                8
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 8
                }
            }
        },
        {
            "type": "Identifier",
            "value": "f",
            "range": [
                9,
                10
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 9
                },
                "end": {
                    "line": 1,
                    "column": 10
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                10,
                11
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 10
                },
                "end": {
                    "line": 1,
                    "column": 11
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                11,
                12
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 11
                },
                "end": {
                    "line": 1,
                    "column": 12
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                13,
                14
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 13
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            }
        },
        {
            "type": "Keyword",
            "value": "while",
            "range": [
                30,
                35
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 30
                },
                "end": {
                    "line": 1,
                    "column": 35
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                36,
                37
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 36
                },
                "end": {
                    "line": 1,
                    "column": 37
                }
            }
        },
        {
            "type": "Boolean",
            "value": "true",
            "range": [
                37,
                41
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 37
                },
                "end": {
                    "line": 1,
                    "column": 41
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                41,
                42
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 41
                },
                "end": {
                    "line": 1,
                    "column": 42
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                43,
                44
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 43
                },
                "end": {
                    "line": 1,
                    "column": 44
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                45,
                46
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 45
                },
                "end": {
                    "line": 1,
                    "column": 46
                }
            }
        },
        {
            "type": "Keyword",
            "value": "var",
            "range": [
                57,
                60
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 57
                },
                "end": {
                    "line": 1,
                    "column": 60
                }
            }
        },
        {
            "type": "Identifier",
            "value": "each",
            "range": [
                61,
                65
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 61
                },
                "end": {
                    "line": 1,
                    "column": 65
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                65,
                66
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 65
                },
                "end": {
                    "line": 1,
                    "column": 66
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                67,
                68
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 67
                },
                "end": {
                    "line": 1,
                    "column": 68
                }
            }
        }
    ]
};