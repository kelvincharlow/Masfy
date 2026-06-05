import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  const url = new URL(request.url);
  const providedSecret = url.searchParams.get('secret');

  if (!secret || providedSecret !== secret) {
    return NextResponse.json({ message: 'Invalid revalidation secret' }, { status: 401 });
  }

  revalidateTag('projects');
  revalidatePath('/');
  revalidatePath('/projects');

  return NextResponse.json({
    revalidated: true,
    paths: ['/', '/projects'],
    tag: 'projects',
    now: Date.now(),
  });
}
