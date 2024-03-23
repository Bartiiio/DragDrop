import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://agrgkqsergglutltwnhy.supabase.co";
const supabaseKey =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFncmdrcXNlcmdnbHV0bHR3bmh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMzQ0MjYsImV4cCI6MjAyNjYxMDQyNn0.IW0smrY5fI_9Al6uMu28JmzmApj7ZKdrvqmHwXEApgQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
