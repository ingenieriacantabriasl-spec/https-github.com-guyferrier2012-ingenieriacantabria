import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const ADMIN_TOKEN = process.env.ADMIN_TOKEN

function checkAuth(request: NextRequest): boolean {
  const auth = request.headers.get('authorization')
  return auth === `Bearer ${ADMIN_TOKEN}`
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ leads: data, total: data?.length ?? 0 })
}
