parser grammar BoQQIParser;

options {
    tokenVocab = BoQQILexer;
}

program
    : statement* EOF
    ;

statement
    : call SEMI
    | assign SEMI
    ;

assign
    : IDENT EQUAL expr
    ;

expr
    : expr op=(MUL | DIV) expr      # MulDiv
    | expr op=(PLUS | MINUS) expr   # AddSub
    | LPAREN expr RPAREN            # Parens
    | INT                           # Int
    | IDENT                         # Var
    ;

call
    : IDENT LPAREN args RPAREN
    ;

args
    : expr (COMMA expr)*
    |
    ;
