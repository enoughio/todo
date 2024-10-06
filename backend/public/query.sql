create table todo (
	task_id serial primary key,
	todo text,
	due_date date,
	completed bool,
	created_at TIMESTAMP
)



INSERT INTO todo (todo) VALUES ('Complete homework');
INSERT INTO todo (todo) VALUES ('Buy groceries');
INSERT INTO todo (todo) VALUES ('Read a book');
INSERT INTO todo (todo) VALUES ('Go for a run');
INSERT INTO todo (todo) VALUES ('Finish project report');
INSERT INTO todo (todo) VALUES ('Plan weekend trip');
INSERT INTO todo (todo) VALUES ('Attend meeting');
INSERT INTO todo (todo) VALUES ('Water the plants');
INSERT INTO todo (todo) VALUES ('Call the doctor');
INSERT INTO todo (todo) VALUES ('Prepare presentation');


UPDATE todo 
SET todo = 'la la la' 
WHERE task_id = 1;

