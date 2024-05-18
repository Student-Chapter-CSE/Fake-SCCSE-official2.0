import {NextRequest,NextResponse} from 'next/server'

export async function POST(req: NextRequest,_res: NextResponse) {
  const formData =await req.json();
  console.log(formData);
  return new NextResponse("Success!")
}