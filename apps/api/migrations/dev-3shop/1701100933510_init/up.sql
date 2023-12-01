SET check_function_bodies = false;
CREATE TYPE public.order_status AS ENUM (
    'Pending',
    'In Transit',
    'Delivered'
);
CREATE TABLE public.app (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "imgUrl" text,
    name text NOT NULL,
    "deliveryTaxesTableName" text,
    "moneyAccountId" text,
    plan text DEFAULT 'FREE'::text,
    background_color text,
    font_color text,
    font text,
    show_brand boolean DEFAULT false,
    created_at timestamp with time zone DEFAULT now(),
    show_connect_email boolean DEFAULT false
);
COMMENT ON TABLE public.app IS 'app table';
CREATE TABLE public.choice (
    value text NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    poll_id uuid NOT NULL,
    count integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.delivery_zone (
    name text NOT NULL,
    fees integer NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    countries jsonb DEFAULT jsonb_build_array() NOT NULL,
    app_id uuid NOT NULL
);
CREATE TABLE public.gate (
    attributes jsonb,
    "contractAddress" text NOT NULL,
    discount integer NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    product_id uuid NOT NULL,
    name text
);
CREATE TABLE public.gate_v2 (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL,
    product_id uuid NOT NULL,
    discount integer,
    exclusive_access boolean DEFAULT false NOT NULL,
    app_id uuid,
    claims uuid[] DEFAULT ARRAY[]::uuid[] NOT NULL,
    unique_claim boolean DEFAULT false NOT NULL
);
CREATE TABLE public.network (
    value text NOT NULL
);
CREATE TABLE public."order" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    app_id uuid NOT NULL,
    product_id uuid NOT NULL,
    email text NOT NULL,
    address text NOT NULL,
    firstname text NOT NULL,
    lastname text NOT NULL,
    status public.order_status DEFAULT 'Pending'::public.order_status NOT NULL
);
CREATE TABLE public.plan (
    value text NOT NULL
);
CREATE TABLE public.poll (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    voters jsonb DEFAULT jsonb_build_array() NOT NULL,
    gate text,
    image text,
    created_at timestamp with time zone DEFAULT now(),
    completed boolean DEFAULT false NOT NULL,
    app_id uuid
);
CREATE TABLE public.product (
    app_id uuid NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    description text NOT NULL,
    image text NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    type text DEFAULT 'COMMERCE'::text NOT NULL,
    "webhookUrl" text
);
CREATE TABLE public.product_type (
    value text NOT NULL
);
CREATE TABLE public.segment (
    type text NOT NULL,
    poap_ids jsonb DEFAULT jsonb_build_array() NOT NULL,
    nft_contract_address text,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    gate_id uuid,
    network text
);
CREATE TABLE public.segment_type (
    value text NOT NULL
);
CREATE TABLE public."user" (
    app_id uuid NOT NULL,
    role text NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    email text NOT NULL
);
CREATE TABLE public.utility (
    value text NOT NULL
);
ALTER TABLE ONLY public.gate
    ADD CONSTRAINT "Gate_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.app
    ADD CONSTRAINT app_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.choice
    ADD CONSTRAINT choice_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.delivery_zone
    ADD CONSTRAINT delivery_zone_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.gate_v2
    ADD CONSTRAINT gate_v2_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.network
    ADD CONSTRAINT network_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.plan
    ADD CONSTRAINT plan_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.poll
    ADD CONSTRAINT poll_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.product_type
    ADD CONSTRAINT product_type_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.segment
    ADD CONSTRAINT segment_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.segment_type
    ADD CONSTRAINT segment_type_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (email);
ALTER TABLE ONLY public.utility
    ADD CONSTRAINT utility_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.app
    ADD CONSTRAINT app_plan_fkey FOREIGN KEY (plan) REFERENCES public.plan(value);
ALTER TABLE ONLY public.delivery_zone
    ADD CONSTRAINT delivery_zone_app_id_fkey FOREIGN KEY (app_id) REFERENCES public.app(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.gate
    ADD CONSTRAINT gate_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.gate_v2
    ADD CONSTRAINT gate_v2_app_id_fkey FOREIGN KEY (app_id) REFERENCES public.app(id);
ALTER TABLE ONLY public.gate_v2
    ADD CONSTRAINT gate_v2_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON DELETE CASCADE;
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_app_id_fkey FOREIGN KEY (app_id) REFERENCES public.app(id) ON UPDATE RESTRICT ON DELETE SET NULL;
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.poll
    ADD CONSTRAINT poll_app_id_fkey FOREIGN KEY (app_id) REFERENCES public.app(id);
ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_app_id_fkey FOREIGN KEY (app_id) REFERENCES public.app(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_type_fkey FOREIGN KEY (type) REFERENCES public.product_type(value);
ALTER TABLE ONLY public.segment
    ADD CONSTRAINT segment_network_fkey FOREIGN KEY (network) REFERENCES public.network(value);
ALTER TABLE ONLY public.segment
    ADD CONSTRAINT segment_type_fkey FOREIGN KEY (type) REFERENCES public.segment_type(value);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_app_id_fkey FOREIGN KEY (app_id) REFERENCES public.app(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
