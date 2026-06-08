lexer grammar StrictDomainLangLexer;

INT : [0-9]+ ;

PLUS  : '+' ;
MINUS : '-' ;
MUL   : '*' ;
DIV   : '/' ;

LPAREN : '(' ;
RPAREN : ')' ;

WS : [ \t\r\n]+ -> skip ;