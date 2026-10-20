
export async function onRequestPost(context) {
  return new Response(
    JSON.stringify({
      success: false,
      message:
        "Backend तैयार है, लेकिन AI वीडियो जनरेशन API अभी कनेक्ट नहीं है।"
    }),
    {
      status: 501,
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }
  );
}
