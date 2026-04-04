import { createClient } from '@supabase/supabase-js'

export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )
}

export interface BlogPostDB {
  id: number
  slug: string
  title: string
  meta_title: string | null
  meta_description: string | null
  excerpt: string | null
  date: string
  category: string | null
  category_color: string | null
  reading_time: number | null
  cover_image: string | null
  cover_image_alt: string | null
  content: string
  published: boolean
}
