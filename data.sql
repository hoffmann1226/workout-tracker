-- Database should be prime_feedback
CREATE DATABASE "workout";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "chest" (
  "id" serial primary key,
  "exercise" text,
  "reps" int,
  "weight" int
); 

CREATE TABLE "shoulders" (
  "id" serial primary key,
  "exercise" int,
  "reps" int,
  "weight" int
); 

CREATE TABLE "legs" (
  "id" serial primary key,
  "exercise" text,
  "reps" int,
  "weight" int
); 


INSERT INTO "chest" ("exercise", "reps", "weight")
VALUES 
  ('Standard Push-Ups', 0, 0),
  ('Wide Front Pull-Ups', 0, 0),
  ('Military Push-Ups', 0, 0),
  ('Reverse Grip Chin Ups', 0, 0),
  ('Water Break', 0, 0),
  ('Wide Fly Push-Ups', 0, 0),
  ('Closed Grip Overhand Pull-Ups', 0, 0),
  ('Decline Push-Ups', 0, 0),
  ('Heavy Pants', 0, 0),
  ('Water Break', 0, 0),
  ('Diamond Push-Ups', 0, 0),
  ('Lawnmowers', 0, 0),
  ('Dive-Bomber Push-Ups', 0, 0),
  ('Back Flys', 0, 0);

