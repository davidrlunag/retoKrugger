--
-- PostgreSQL database dump
--

-- Dumped from database version 12.8
-- Dumped by pg_dump version 12.8

-- Started on 2021-09-14 13:50:01

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2850 (class 0 OID 16599)
-- Dependencies: 207
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, nombre, descripcion) FROM stdin;
1	ADMIN	Admin Rol
2	USER	User Rol
\.


--
-- TOC entry 2852 (class 0 OID 16607)
-- Dependencies: 209
-- Data for Name: rolesxusuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rolesxusuario (id, user_id, role_id) FROM stdin;
1	1	1
2	1	2
3	2	2
\.


--
-- TOC entry 2846 (class 0 OID 16573)
-- Dependencies: 203
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (id, cedula, nombre, apellido, email, created_at, updated_at, username, password, fechanac, direccion, telefono, vacunado) FROM stdin;
1	1122334455	David                                   	Luna Gonzalez                                                         	davidrlunag@gmail.com                                                 	\N	\N	davidrlunag    	12345678    	1976-02-03 00:00:00+00	\N	\N	S
3	1122334566	Prueba Nueva                            	Prueba Prubea                                                         	prueba22@gmail.com                                                    	\N	\N	1122334566     	1122334566  	2000-09-18 00:00:00+00	\N	\N	N
2	1234567890	Prueba                                  	Prueba Prubea                                                         	prueba@gmail.com                                                      	\N	\N	1111111111     	1111111111  	1987-04-05 00:00:00+00	\N	\N	S
\.


--
-- TOC entry 2848 (class 0 OID 16588)
-- Dependencies: 205
-- Data for Name: vacunas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vacunas (id, tipo, fecha, dosis, usuario) FROM stdin;
1	0	2021-08-10 00:00:00+00	1	1
2	1	2021-09-01 00:00:00+00	1	2
3	0	2021-09-10 00:00:00+00	2	1
4	1	2021-09-10 06:00:00+00	3	1
\.


--
-- TOC entry 2863 (class 0 OID 0)
-- Dependencies: 206
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 1, false);


--
-- TOC entry 2864 (class 0 OID 0)
-- Dependencies: 208
-- Name: rolesxusuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rolesxusuario_id_seq', 3, true);


--
-- TOC entry 2865 (class 0 OID 0)
-- Dependencies: 202
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 3, true);


--
-- TOC entry 2866 (class 0 OID 0)
-- Dependencies: 204
-- Name: vacunas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.vacunas_id_seq', 4, true);


-- Completed on 2021-09-14 13:50:02

--
-- PostgreSQL database dump complete
--

