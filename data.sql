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

INSERT INTO "shoulders" ("exercise", "reps", "weight")
VALUES 
  ('Alternating Shoulder Presses', 0, 0),
  ('In and Out Bicep Curls', 0, 0),
  ('Two Arm Tricep Kickback', 0, 0),
  ('Alternating Shoulder Presses', 0, 0),
  ('In and Out Bicep Curls', 0, 0),
  ('Two Arm Tricep Kickback', 0, 0),
  ('Water Break', 0, 0),
  ('Deep Swimmer Presses', 0, 0),
  ('Full Supination Concentration Curls', 0, 0),
  ('Chair Dips', 0, 0),
  ('Deep Swimmer Presses', 0, 0),
  ('Full Supination Concentration Curls', 0, 0),
  ('Chair Dips', 0, 0),
  ('Water Break', 0, 0),
  ('Upright Rows', 0, 0),
  ('Static Arm Curls', 0, 0),
  ('Flip Grip Tricep Kickbacks', 0, 0);
   ('Upright Rows', 0, 0),
  ('Static Arm Curls', 0, 0),
  ('Flip Grip Tricep Kickbacks', 0, 0);
   ('Water Break', 0, 0),
  ('Seater Two-Angle Shoulder Flys', 0, 0),
  ('Crouching Cohen Curls', 0, 0);
   ('Lying-Down Triceps Extensions', 0, 0),
  ('Seater Two-Angle Shoulder Flys', 0, 0),
  ('Crouching Cohen Curls', 0, 0);
   ('Lying-Down Triceps Extensions', 0, 0),
  ('Water Break', 0, 0),
  ('In and Out Straight Arm Shoulder Flys', 0, 0);
   ('Congdon Curls', 0, 0),
  ('Side Tri-Rises', 0, 0);
  ('In and Out Straight Arm Shoulder Flys', 0, 0);
   ('Congdon Curls', 0, 0),
  ('Side Tri-Rises', 0, 0);

