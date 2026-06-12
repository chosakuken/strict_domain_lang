parser grammar BoQQIParser;

options {
    tokenVocab = BoQQILexer;
}

program
    : statement* EOF
    ;

statement
    : if
    | call SEMI
    | declare SEMI
    | assign SEMI
    ;

if
    : IF LPAREN expr RPAREN LBRACE statement* RBRACE (ELSE LBRACE statement* RBRACE)?
    ;

declare
    : type IDENT
    | type IDENT EQUAL expr
    ;

assign
    : IDENT EQUAL expr
    ;

type
    : TYPE_INT
    | TYPE_FLOAT
    | TYPE_STRING
    ;

expr
    : expr op=(MUL | DIV) expr          # MulDiv
    | expr op=(PLUS | MINUS) expr       # AddSub
    | expr op=(GE | LE | GT | LT) expr  # comp
    | expr op=(EQ | NE) expr            # eq
    | LPAREN expr RPAREN                # Parens
    | FLOAT                             # Float
    | INT                               # Int
    | STRING                            # String
    | IDENT                             # Var
    ;

call
    : IDENT LPAREN args RPAREN
    ;

args
    : expr (COMMA expr)*
    |
    ;
