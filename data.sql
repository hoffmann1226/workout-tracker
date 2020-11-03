-- Database should be prime_feedback
CREATE DATABASE "workout";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "chest" (
  "id" serial primary key,
  "exercise" text,
  "reps" text,
  "weight" text
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4, 4, 5, 'Doing Great!');
