PROGRAM GreetUser(INPUT, OUTPUT);
USES
  GPC;
VAR
  QueryValue, NameValue: STRING;
BEGIN {GreetUser}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  QueryValue := GetEnv('QUERY_STRING');
  IF Pos('name=', QueryValue) > 0
  THEN
    BEGIN
      WRITE('Hello, dear ');
      IF Pos('&', QueryValue) > 0
      THEN
        NameValue := Copy(QueryValue, 6, Pos('&', QueryValue) - 6)
      ELSE
        NameValue := Copy(QueryValue, 6, Length(QueryValue) - 5);
      WRITELN(NameValue, '!') 
    END
  ELSE
    WRITELN('Hello Anonymous!')  
END. {GreetUser}
