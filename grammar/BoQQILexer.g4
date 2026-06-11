lexer grammar BoQQILexer;

IF : 'if' ;
ELSE : 'else' ;

PLUS  : '+' ;
MINUS : '-' ;
MUL   : '*' ;
DIV   : '/' ;

EQUAL : '=' ;

EQ : '==' ;
NE : '!=' ;
GE : '>=' ;
LE : '<=' ;
GT : '>' ;
LT : '<' ;

LPAREN : '(' ;
RPAREN : ')' ;
LBRACE : '{' ;
RBRACE : '}' ;
COMMA : ',' ;
SEMI : ';' ;

INT : [0-9]+ ;
IDENT : [a-zA-Z_][a-zA-Z0-9_]* ;

WS : [ \t\r\n]+ -> skip ;
