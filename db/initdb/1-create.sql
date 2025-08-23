CREATE TABLE MealTable (
id INTEGER PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
date VARCHAR(8)  NOT NULL,
breakfastmealno1 VARCHAR(50)  NOT NULL,
breakfastmealno2 VARCHAR(50)  NOT NULL,
breakfastmealno3 VARCHAR(50)  NOT NULL,
breakfastmealno4 VARCHAR(50)  NOT NULL,
breakfastmealno5 VARCHAR(50)  NOT NULL,
breakfastmealno6 VARCHAR(50)  NOT NULL,
breakfastmealno7 VARCHAR(50)  NOT NULL,
lunchmealno1 VARCHAR(50)  NOT NULL,
lunchmealno2 VARCHAR(50)  NOT NULL,
lunchmealno3 VARCHAR(50)  NOT NULL,
lunchmealno4 VARCHAR(50)  NOT NULL,
lunchmealno5 VARCHAR(50)  NOT NULL,
lunchmealno6 VARCHAR(50)  NOT NULL,
lunchmealno7 VARCHAR(50)  NOT NULL,
dinnermealno1 VARCHAR(50)  NOT NULL,
dinnermealno2 VARCHAR(50)  NOT NULL,
dinnermealno3 VARCHAR(50)  NOT NULL,
dinnermealno4 VARCHAR(50)  NOT NULL,
dinnermealno5 VARCHAR(50)  NOT NULL,
dinnermealno6 VARCHAR(50)  NOT NULL,
dinnermealno7 VARCHAR(50)  NOT NULL
);

CREATE TABLE todoTable (
id INTEGER PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY,
registerDate VARCHAR(8) NOT NULL,
updateDate VARCHAR(8)  NOT NULL,
contents VARCHAR(100)  NOT NULL,
completeFlg VARCHAR(1)  NOT NULL,
deleteFlg BOOLEAN  NOT NULL
);