export async function handler(event: any) {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      status: 'ok',
      time: new Date().toISOString(),
      platform: 'netlify',
    }),
  };
}
