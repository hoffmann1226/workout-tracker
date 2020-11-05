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

-- Sample feedback item
INSERT INTO "chest" ("exercise", "reps", "weight")
VALUES ('Standard Push-Ups', 4, 5, 'Doing Great!');
