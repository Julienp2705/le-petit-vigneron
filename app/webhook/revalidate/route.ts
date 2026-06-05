import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  let body: { categorie?: string; slug?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 })
  }

  const { categorie, slug } = body

  if (!categorie || !slug) {
    return NextResponse.json({ message: 'Missing categorie or slug' }, { status: 400 })
  }

  // Sécurité : pas de path traversal
  if (!/^[a-z0-9-]+$/.test(categorie) || !/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json({ message: 'Invalid path characters' }, { status: 400 })
  }

  revalidatePath(`/${categorie}/${slug}`)

  return NextResponse.json({ revalidated: true, path: `/${categorie}/${slug}` })
}