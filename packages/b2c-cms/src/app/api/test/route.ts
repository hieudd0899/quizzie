import { type NextRequest } from 'next/server';

/**
 * @swagger
 * /api/test:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const searchValue = searchParams.get('search');

  return new Response(
    JSON.stringify({
      data: {
        s: searchValue,
      },
    }),
    {
      status: 200,
    }
  );
}
