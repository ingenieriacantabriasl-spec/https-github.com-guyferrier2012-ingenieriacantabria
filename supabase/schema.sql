-- Tabla de leads para formulario de contacto
create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  nombre text not null,
  email text not null,
  telefono text,
  empresa text,
  servicio text,
  mensaje text,
  created_at timestamptz default now() not null
);

-- Índice para consultas por fecha
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Habilitar RLS
alter table public.leads enable row level security;

-- Solo el servicio (service_role) puede leer todos los leads
create policy "Service role can read all leads"
  on public.leads
  for select
  to service_role
  using (true);

-- Cualquiera puede insertar (formulario público)
create policy "Anyone can insert leads"
  on public.leads
  for insert
  to anon, authenticated
  with check (true);

-- Nadie puede modificar ni borrar leads desde el cliente
-- (solo service_role vía Supabase Dashboard)
