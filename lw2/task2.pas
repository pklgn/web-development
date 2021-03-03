PROGRAM SarahRevere(INPUT, OUTPUT);
USES
  GPC;
VAR
  QueryValue: STRING;
BEGIN {SarahRevere}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  QueryValue := GetEnv('QUERY_STRING');
  IF QueryValue = 'lanterns=1'
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    IF QueryValue = 'lanterns=2'
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      IF QueryValue = 'lanterns=3'
      THEN
        WRITELN('The British are coming by air.')
      ELSE
        WRITELN('Sarah didn''t say.')
END. {SarahRevere}
