import { createClient } from "@supabase/supabase-js";

const SUPBASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsd3hkbHhmcGhrZ2t5aWt3cnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk4NDUxMzgsImV4cCI6MTk2NTQyMTEzOH0.VSHSlMrLfubw2oYLBrx1HzGFvkNu_pkz9GkuwqxNK1U";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tlwxdlxfphkgkyikwrtx.supabase.co";

const client = createClient(SUPABASE_URL, SUPBASE_ANON_KEY);

export { client as supabaseClient };
