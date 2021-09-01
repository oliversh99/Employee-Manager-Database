-- Insert multiple produce items --
INSERT INTO department (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("finance"),
    ("Legal");

INSERT INTO role (title, salary,department_id)
VALUES
       ("Sales Lead",100000,Null),
       ("Salesperson", 80000,Null),
       ("Lead Engineer", 150000,Null),
       ("Software Engineer", 120000,Null),
       ("Account Manager", 160000,Null),
       ("Accountant",125000,Null),
       ("Legal Team Lead", 125000,Null),
       ("Lawyer",190000,Null);
  
  INSERT INTO employee (First_name, Last_name)
VALUES
       ("Jonhn", "Doe"),
       ("Mike", "Chan"),
       ("Ashley", "Rodriguez"),
       ("Kevin", "Tupik"),
       ("Kunal", "Singh"),
       ("Malia", "Brown"),
       ("Sarah", "Lourd"),
       ("Tom", "Allen");