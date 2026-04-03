import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          nombre: string
          email: string
          telefono: string | null
          empresa: string | null
          servicio: string | null
          mensaje: string | null
          created_at: string
        }
        Insert: {
          nombre: string
          email: string
          telefono?: string | null
          empresa?: string | null
          servicio?: string | null
          mensaje?: string | null
        }
      }
    }
  }
}
