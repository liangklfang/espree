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
                        "name": "baz",
                        "range": [
                            15,
                            18
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 15
                            },
                            "end": {
                                "line": 1,
                                "column": 18
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
                        18
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 8
                        },
                        "end": {
                            "line": 1,
                            "column": 18
                        }
                    }
                },
                {
                    "type": "ImportSpecifier",
                    "local": {
                        "type": "Identifier",
                        "name": "xyz",
                        "range": [
                            20,
                            23
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 20
                            },
                            "end": {
                                "line": 1,
                                "column": 23
                            }
                        }
                    },
                    "imported": {
                        "type": "Identifier",
                        "name": "xyz",
                        "range": [
                            20,
                            23
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 20
                            },
                            "end": {
                                "line": 1,
                                "column": 23
                            }
                        }
                    },
                    "range": [
                        20,
                        23
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 20
                        },
                        "end": {
                            "line": 1,
                            "column": 23
                        }
                    }
                }
            ],
            "source": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
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
            "range": [
                0,
                36
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 36
                }
            }
        }
    ],
    "sourceType": "module",
    "range": [
        0,
        36
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 36
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
            "type": "Identifier",
            "value": "as",
            "range": [
                12,
                14
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            }
        },
        {
            "type": "Identifier",
            "value": "baz",
            "range": [
                15,
                18
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 15
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ",",
            "range": [
                18,
                19
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 18
                },
                "end": {
                    "line": 1,
                    "column": 19
                }
            }
        },
        {
            "type": "Identifier",
            "value": "xyz",
            "range": [
                20,
                23
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 20
                },
                "end": {
                    "line": 1,
                    "column": 23
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                23,
                24
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 23
                },
                "end": {
                    "line": 1,
                    "column": 24
                }
            }
        },
        {
            "type": "Identifier",
            "value": "from",
            "range": [
                25,
                29
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 25
                },
                "end": {
                    "line": 1,
                    "column": 29
                }
            }
        },
        {
            "type": "String",
            "value": "\"foo\"",
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
            "value": ";",
            "range": [
                35,
                36
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 35
                },
                "end": {
                    "line": 1,
                    "column": 36
                }
            }
        }
    ]
};