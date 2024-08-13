import { createClient } from '@supabase/supabase-js';

const URL = 'https://akajkgqiuhvlnnnncuyb.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrYWprZ3FpdWh2bG5ubm5jdXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyODUwMjAsImV4cCI6MjAzNzg2MTAyMH0.pR3mDChzJjgmoQLJpVtMCtOi9cTw4YE4N0i3N7s4muc';

export const supabase = createClient(URL, API_KEY);
