parser grammar BoQQIParser;

options {
    tokenVocab = BoQQILexer;
}

program
    : expr* EOF
    ;

expr
    : expr op=(MUL | DIV) expr      # MulDiv
    | expr op=(PLUS | MINUS) expr   # AddSub
    | LPAREN expr RPAREN            # Parens
    | INT                           # Int
    ;
