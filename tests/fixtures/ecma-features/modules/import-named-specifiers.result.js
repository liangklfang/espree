module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ImportDeclaration",
            "specifiers": [
                {
                    "type": "ImportSpecifier",
                    "local": {
                        "type": "Identifier",
                        "name": "bar",
                        "range": [
                            8,
                            11
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 1,
                                "column": 11
                            }
                        }
                    },
                    "imported": {
                        "type": "Identifier",
                        "name": "bar",
                        "range": [
                            8,
                            11
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 1,
                                "column": 11
                            }
                        }
                    },
                    "range": [
                        8,
                        11
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 8
                        },
                        "end": {
                            "line": 1,
                            "column": 11
                        }
                    }
                },
                {
                    "type": "ImportSpecifier",
                    "local": {
                        "type": "Identifier",
                        "name": "baz",
                        "range": [
                            13,
                            16
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 13
                            },
                            "end": {
                                "line": 1,
                                "column": 16
                            }
                        }
                    },
                    "imported": {
                        "type": "Identifier",
                        "name": "baz",
                        "range": [
                            13,
                            16
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 13
                            },
                            "end": {
                                "line": 1,
                                "column": 16
                            }
                        }
                    },
                    "range": [
                        13,
                        16
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 13
                        },
                        "end": {
                            "line": 1,
                            "column": 16
                        }
                    }
                }
            ],
            "source": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "range": [
                    23,
                    28
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 23
                    },
                    "end": {
                        "line": 1,
                        "column": 28
                    }
                }
            },
            "range": [
                0,
                29
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 29
                }
            }
        }
    ],
    "sourceType": "module",
    "range": [
        0,
        29
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 29
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
            "value": "{",
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
            "value": "bar",
            "range": [
                8,
                11
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 8
                },
                "end": {
                    "line": 1,
                    "column": 11
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ",",
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
            "type": "Identifier",
            "value": "baz",
            "range": [
                13,
                16
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 13
                },
                "end": {
                    "line": 1,
                    "column": 16
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
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
            "type": "Identifier",
            "value": "from",
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
            "type": "String",
            "value": "\"foo\"",
            "range": [
                23,
                28
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 23
                },
                "end": {
                    "line": 1,
                    "column": 28
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                28,
                29
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 28
                },
                "end": {
                    "line": 1,
                    "column": 29
                }
            }
        }
    ]
};