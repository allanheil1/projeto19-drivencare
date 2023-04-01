--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: appointments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.appointments (
    id integer NOT NULL,
    doctor_id integer NOT NULL,
    patient_id integer NOT NULL,
    appoint_date date NOT NULL,
    appoint_hour integer NOT NULL,
    status text DEFAULT 'pendente'::text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: appointments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.appointments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: appointments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.appointments_id_seq OWNED BY public.appointments.id;


--
-- Name: doctors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.doctors (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    specialty text NOT NULL,
    location text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.doctors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.doctors_id_seq OWNED BY public.doctors.id;


--
-- Name: patients; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.patients (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: patients_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.patients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: patients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.patients_id_seq OWNED BY public.patients.id;


--
-- Name: appointments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.appointments ALTER COLUMN id SET DEFAULT nextval('public.appointments_id_seq'::regclass);


--
-- Name: doctors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors ALTER COLUMN id SET DEFAULT nextval('public.doctors_id_seq'::regclass);


--
-- Name: patients id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients ALTER COLUMN id SET DEFAULT nextval('public.patients_id_seq'::regclass);


--
-- Data for Name: appointments; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.appointments VALUES (1, 1, 4, '2023-11-10', 10, 'pending', '2023-04-01 14:47:46.163921');
INSERT INTO public.appointments VALUES (2, 2, 4, '2023-11-10', 9, 'pending', '2023-04-01 14:48:37.219313');
INSERT INTO public.appointments VALUES (3, 1, 4, '2023-11-10', 7, 'pending', '2023-04-01 14:49:29.332558');
INSERT INTO public.appointments VALUES (4, 1, 4, '2023-11-10', 8, 'pending', '2023-04-01 14:49:33.428224');
INSERT INTO public.appointments VALUES (5, 1, 4, '2023-11-10', 11, 'pending', '2023-04-01 14:49:43.126994');
INSERT INTO public.appointments VALUES (6, 1, 4, '2023-11-10', 12, 'pending', '2023-04-01 14:49:47.027905');
INSERT INTO public.appointments VALUES (7, 1, 4, '2023-11-10', 13, 'pending', '2023-04-01 15:00:45.419936');
INSERT INTO public.appointments VALUES (8, 1, 4, '2023-11-10', 14, 'pending', '2023-04-01 15:01:55.166458');
INSERT INTO public.appointments VALUES (9, 1, 4, '2023-11-01', 14, 'pending', '2023-04-01 15:04:58.723199');


--
-- Data for Name: doctors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.doctors VALUES (1, 'Doctor 1', 'doctor1@gmail.com', '$2b$10$UByABk9Rda9k25p5LvB7wOdB3vwbLejcNmj2Qkyw1xvixaV3uAqTK', 'Urologist', 'Brazil', '2023-04-01 12:49:53.199589');
INSERT INTO public.doctors VALUES (2, 'Doctor 2', 'doctor2@gmail.com', '$2b$10$bkRi.e4ezOY2dwzq3/7G7O6TBFAQ/eVoMznCz20OTyOsVIPziY/7q', 'Generic', 'Brazil', '2023-04-01 12:53:29.733342');
INSERT INTO public.doctors VALUES (3, 'Doctor 3', 'doctor3@gmail.com', '$2b$10$Xqr34BFX5YHicUrm//p4o.i4A7uIoTK7Y.mb/VAhH6VHchTHCEXoa', 'Eye', 'Argentina', '2023-04-01 13:28:18.3577');
INSERT INTO public.doctors VALUES (4, 'Doctor 4', 'doctor4@gmail.com', '$2b$10$BJNu.bcrKagAK/7alcWmj.d5ccYutfMcMxZquR9T32I3.eAn8d2sy', 'Generic', 'Argentina', '2023-04-01 13:28:26.106779');
INSERT INTO public.doctors VALUES (5, 'Doctor 5', 'doctor5@gmail.com', '$2b$10$6A6hTbiUzuYs16DS6rPhcebYbjsEay41VGPprpgXZgO86iFSe1W66', 'Generic', 'Albania', '2023-04-01 13:28:33.087282');
INSERT INTO public.doctors VALUES (6, 'Doctor 6', 'doctor6@gmail.com', '$2b$10$AVbXm66Wh9ae4Rf/yn3Gb.Ug5V758FfJKQze685S61eBGC8fNDZxq', 'Brain', 'Brazil', '2023-04-01 13:28:59.624508');


--
-- Data for Name: patients; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.patients VALUES (4, 'Patient 1', 'patient1@gmail.com', '$2b$10$NEuhM7c/lTmm/wtnCmNgneNnMZchiKcWZj10yh3lWNl8fR6ixIQIe', '2023-04-01 12:38:14.936315');
INSERT INTO public.patients VALUES (5, 'Patient 2', 'patient2@gmail.com', '$2b$10$KmMqw5uZxEGmnPnOA/aG7uqGpArRjIFfzFluy4lgl5uNn2rliHKC.', '2023-04-01 12:38:20.043449');
INSERT INTO public.patients VALUES (6, 'Patient 3', 'patient3@gmail.com', '$2b$10$5he.0YEdVYQWZfFiqnjE2uYYzMX197iPxQBtNmWd4Fk37Z4ArxwKu', '2023-04-01 12:38:24.598113');
INSERT INTO public.patients VALUES (7, 'Patient 4', 'patient4@gmail.com', '$2b$10$DbUmRH6Mju0vqkDwMmqrz.taPMaG7dCo5/O99nv6Wwy0KhJHaoL.O', '2023-04-01 12:38:29.150382');
INSERT INTO public.patients VALUES (8, 'Patient 5', 'patient5@gmail.com', '$2b$10$XJ1Nj9SQ7C9fLESBw5fxouJIn.l.TUE0lVu6KKdnZxgcpY7Br3BrS', '2023-04-01 12:38:32.890637');


--
-- Name: appointments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.appointments_id_seq', 9, true);


--
-- Name: doctors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.doctors_id_seq', 6, true);


--
-- Name: patients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.patients_id_seq', 8, true);


--
-- Name: appointments appointments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_pkey PRIMARY KEY (id);


--
-- Name: doctors doctors_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_email_key UNIQUE (email);


--
-- Name: doctors doctors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pkey PRIMARY KEY (id);


--
-- Name: patients patients_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_email_key UNIQUE (email);


--
-- Name: patients patients_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (id);


--
-- Name: appointments appointments_doctor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_doctor_id_fkey FOREIGN KEY (doctor_id) REFERENCES public.doctors(id);


--
-- Name: appointments appointments_patient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_patient_id_fkey FOREIGN KEY (patient_id) REFERENCES public.patients(id);


--
-- PostgreSQL database dump complete
--

