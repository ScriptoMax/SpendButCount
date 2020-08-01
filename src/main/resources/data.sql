INSERT INTO users(id, first_name, last_name, email) VALUES(1, 'Frank', 'Moor', 'puremoor@gmail.com');
INSERT INTO users(id, first_name, last_name, email) VALUES(2, 'Sydney', 'Cooper', 'prettysydney@gmail.com');
INSERT INTO users(id, first_name, last_name, email) VALUES(3, 'Daniel', 'Surgeon', 'alonesurgeon@gmail.com');

INSERT INTO categories(id, category_name) VALUES(1, 'Food and essentials');
INSERT INTO categories(id, category_name) VALUES(2, 'Beauty and cosmetics');
INSERT INTO categories(id, category_name) VALUES(3, 'Household electronics');

INSERT INTO costs(id, payment_time, description, place, category_id, user_id) VALUES(1, '2020-04-21T14:45:06.000Z', 'Some vegetables, grapefruit too', 'Prague', 1, 1);
INSERT INTO costs(id, payment_time, description, place, category_id, user_id) VALUES(2, '2020-04-22T09:18:54.000Z', 'Brand new mascara and perfume', 'Osaka', 2, 3);
INSERT INTO costs(id, payment_time, description, place, category_id, user_id) VALUES(3, '2020-04-25T22:07:34.000Z', 'Bought a new blender at Walmart store', 'Cleveland', 3, 2);