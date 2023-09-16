mysql> create database capstoneproject_db;
Query OK, 1 row affected (0.39 sec)

mysql> use capstoneproject_db;
Database changed

mysql> show tables;
+------------------------------+
| Tables_in_capstoneproject_db |
+------------------------------+
| booking_table                |
| owner_msgs                   |
| owner_table                  |
| user_messages                |
| user_table                   |
| vehicle_table                |
| waiting_approve              |
+------------------------------+
7 rows in set (0.00 sec)

mysql> select * from vehicle_table;

| vehicle_id | date       | distance | dropping   | owner_name | pickup     | price | time  | vehicle_name | vehicle_type |
+------------+------------+----------+------------+------------+------------+-------+-------+--------------+--------------+
|          1 | 22-01-2023 | 10       | Navallur   | Harsha     | Padur      |   150 | 08:00 | BWM          | 4 wheeler    |
|          2 | 22-01-2023 | 10       | Padur      | Harsha     | Navallur   |   150 | 07:35 | Honda        | 2 wheeler    |
|          3 | 22-01-2023 | 5        | Busstand   | Kavya      | GokulNagar |    50 | 08:00 | Pulsar       | 2 wheeler    |
|          4 | 22-01-2023 | 10       | Navallur   | Kavya      | Padur      |   100 | 08:30 | Hero         | 2 wheeler    |
|          5 | 22-01-2023 | 5        | GokulNagar | Kavya      | Busstand   |    50 | 08:10 | Pulsar       | 2 wheeler

mysql> select * from owner_table;

1 | Kavya@gmail.com    | Kavya      | Kavya@123      | 9440533780  |
2 | niranjan@gmail.com | Niranjan   | Niranjan@123   | 8240677740  |

mysql> select * from user_table;

1 | Pooja@gmail.com  | Pooja     | Pooja@123     | 9642521892 |
2 | nikhil@gmail.com | Nikhil    | Nikhil@123    | 7653422780 |

mysql> select * from waiting_approve;
+------------+------------+----------+-------------+------------+-------------+-------+------+-----------+--------------+--------------+
| vehicle_id | date       | distance | dropping    | owner_name | pickup      | price | time | user_name | vehicle_name | vehicle_type |
+------------+------------+----------+-------------+------------+-------------+-------+------+-----------+--------------+--------------+
|          1 | 22-01-2023 | 5        | GokulNagar  | Kavya      | Busstand    |   50  | 08:00| Pooja     | Pulsar       | 2 wheeler    |
+------------+------------+----------+-------------+------------+-------------+-------+------+-----------+--------------+--------------+
1 row in set (0.00 sec)
