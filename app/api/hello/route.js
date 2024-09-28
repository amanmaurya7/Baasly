export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Welcome to the BaaS!' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  