lexer grammar BoQQILexer;

INT : [0-9]+ ;
IDENT : [a-zA-Z_][a-zA-Z0-9_]* ;

PLUS  : '+' ;
MINUS : '-' ;
MUL   : '*' ;
DIV   : '/' ;

EQUAL : '=' ;

LPAREN : '(' ;
RPAREN : ')' ;
COMMA : ',' ;
SEMI : ';' ;

WS : [ \t\r\n]+ -> skip ;
