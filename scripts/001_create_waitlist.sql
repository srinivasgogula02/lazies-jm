-- Create waitlist table for email signups
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS (Row Level Security)
alter table public.waitlist enable row level security;

-- Create policy to allow anyone to insert (for waitlist signup)
create policy "Allow anyone to join waitlist"
  on public.waitlist for insert
  with check (true);

-- Create policy to prevent reading waitlist data (privacy)
create policy "No one can read waitlist"
  on public.waitlist for select
  using (false);
