PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;                                                                                              
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  QueryValue, KeyFound: STRING;
BEGIN {GetQueryStringParameter}
  QueryValue := GetEnv('QUERY_STRING');
  KeyFound := Copy(QueryValue, Pos(Key, QueryValue), Length(QueryValue));
  IF Pos('&', KeyFound) > 0
  THEN
		GetQueryStringParameter := Copy(KeyFound, Length(Key) + 2, Pos('&', KeyFound) - Length(Key) - 2)
  ELSE
    GetQueryStringParameter := Copy(KeyFound, Length(Key) + 2, Length(KeyFound) - Length(Key))
END; {GetQueryStringParameter}
BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}

