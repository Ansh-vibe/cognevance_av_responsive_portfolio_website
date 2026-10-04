create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 254),
  subject text not null check (char_length(subject) between 1 and 160),
  message text not null check (char_length(message) between 10 and 4000),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Public roles receive no table access. The server route writes with the
-- server-only service role key; the service key must never reach the browser.
revoke all on table public.contact_messages from anon, authenticated;
grant insert on table public.contact_messages to service_role;
