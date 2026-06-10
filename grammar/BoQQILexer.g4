lexer grammar BoQQILexer;

INT : [0-9]+ ;
IDENT : [a-zA-Z_][a-zA-Z0-9_]* ;

PLUS  : '+' ;
MINUS : '-' ;
MUL   : '*' ;
DIV   : '/' ;

LPAREN : '(' ;
RPAREN : ')' ;
COMMA : ',' ;

WS : [ \t\r\n]+ -> skip ;
