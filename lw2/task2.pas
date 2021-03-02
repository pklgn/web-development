PROGRAM SarahRevere(INPUT, OUTPUT);
USES
  DOS;
VAR
  Query1: STRING;
BEGIN {SarahRevere}
  WRITELN('Content-Type: text/plain');
  WRITELN;
	Query1 := GetEnv('QUERY_STRING');
  IF Query1 = 'lanterns=1'
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    IF Query1 = 'lanterns=2'
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      IF Query1 = 'lanterns=3'
      THEN
        WRITELN('The British are coming by air.')
      ELSE
        WRITELN('Sarah didn''t say.')
END. {SarahRevere}
