module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ImportDeclaration",
            "specifiers": [
                {
                    "type": "ImportNamespaceSpecifier",
                    "local": {
                        "type": "Identifier",
                        "name": "foo",
                        "range": [
                            12,
                            15
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 12
                            },
                            "end": {
                                "line": 1,
                                "column": 15
                            }
                        }
                    },
                    "range": [
                        7,
                        15
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 7
                        },
                        "end": {
                            "line": 1,
                            "column": 15
                        }
                    }
                }
            ],
            "source": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "range": [
                    21,
                    26
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 21
                    },
                    "end": {
                        "line": 1,
                        "column": 26
                    }
                }
            },
            "range": [
                0,
                27
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 27
                }
            }
        }
    ],
    "sourceType": "module",
    "range": [
        0,
        27
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 27
        }
    },
    "tokens": [
        {
            "type": "Keyword",
            "value": "import",
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
            "value": "*",
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
            "value": "as",
            "range": [
                9,
                11
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 9
                },
                "end": {
                    "line": 1,
                    "column": 11
                }
            }
        },
        {
            "type": "Identifier",
            "value": "foo",
            "range": [
                12,
                15
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 15
                }
            }
        },
        {
            "type": "Identifier",
            "value": "from",
            "range": [
                16,
                20
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 16
                },
                "end": {
                    "line": 1,
                    "column": 20
                }
            }
        },
        {
            "type": "String",
            "value": "\"foo\"",
            "range": [
                21,
                26
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 21
                },
                "end": {
                    "line": 1,
                    "column": 26
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                26,
                27
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 26
                },
                "end": {
                    "line": 1,
                    "column": 27
                }
            }
        }
    ]
};