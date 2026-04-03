import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { password, role } = await request.json()

  const userPass = process.env.ADMIN_PASSWORD_USER
  const itPass = process.env.ADMIN_PASSWORD_IT
  const token = process.env.ADMIN_TOKEN ?? 'changeme'

  let authed = false
  let redirectTo = '/admin/user'

  if (role === 'it' && password === itPass) {
    authed = true
    redirectTo = '/admin/it'
  } else if (role === 'user' && password === userPass) {
    authed = true
    redirectTo = '/admin/user'
  }

  if (!authed) {
    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true, redirectTo })
  response.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 días
    path: '/',
  })
  response.cookies.set('admin_role', role, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })

  return response
}
