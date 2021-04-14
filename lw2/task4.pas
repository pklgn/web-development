PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  GPC;                                                                                              
FUNCTION GetQueryStringParameter(Parameter: STRING): STRING;
VAR
  QueryValue, ParameterFound: STRING;
BEGIN {GetQueryStringParameter}
  QueryValue := GetEnv('QUERY_STRING');
  IF Pos(Parameter, ParameterFound) > 0
  THEN
    BEGIN
      ParameterFound := Copy(QueryValue, Pos(Parameter, QueryValue) + Length(Parameter) + 1, Length(QueryValue));
      IF Pos('&', ParameterFound) > 0
      THEN  
        GetQueryStringParameter := Copy(ParameterFound, 1, Pos('&', ParameterFound) - 1)
      ELSE
        GetQueryStringParameter := Copy(ParameterFound, 1, Length(ParameterFound))
    END      
  ELSE
    GetQueryStringParameter := 'value not found'
END; {GetQueryStringParameter}
BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}

