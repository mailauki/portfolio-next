import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://idwzmbvvfiwxafabsobh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlkd3ptYnZ2Zml3eGFmYWJzb2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNDY1NzcsImV4cCI6MTk5MDYyMjU3N30.kcoNQvO10HYXc6Edd_NgObJOWsMzH4BCB9YXVRCHFpY'

export const supabase = createClient(supabaseUrl, supabaseKey)