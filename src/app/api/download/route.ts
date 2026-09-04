import { NextResponse } from "next/server";

const LATEST_RELEASE_API =
  "https://api.github.com/repos/Fhanafii/MerchGo-App/releases/latest";

export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(LATEST_RELEASE_API, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`github ${res.status}`);
    const data = (await res.json()) as {
      assets?: { name: string; browser_download_url: string }[];
      html_url?: string;
    };
    const apk = data.assets?.find((a) => a.name.endsWith(".apk"));
    return NextResponse.redirect(
      apk?.browser_download_url ??
        data.html_url ??
        "https://github.com/Fhanafii/MerchGo-App/releases",
      302,
    );
  } catch {
    return NextResponse.redirect(
      "https://github.com/Fhanafii/MerchGo-App/releases",
      302,
    );
  }
}
