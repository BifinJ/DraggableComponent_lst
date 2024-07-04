import { NextRequest, NextResponse } from "next/server";

const componentsData: any = [
  {
    content:
      '<p>hello hi hi jsdjsbdjbsjb <strong><em><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000; font-size: 26px; font-family: Arial"><u>bifin </u></span><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000"><u>james</u></span></em></strong></p>',
    coordinates: {
      x: 337,
      y: 244,
    },
  },
  {
    content:
      '<p>hello iam <strong><em><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000; font-size: 26px; font-family: Arial"><u>bifin </u></span><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000"><u>james</u></span></em></strong></p>',
    coordinates: {
      x: 37,
      y: 400,
    },
  },
  {
    content:
      '<p>hello everyone iam <strong><em><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000; font-size: 26px; font-family: Arial"><u>bifin </u></span><span class="text-base" style="color: #000000; font-size: 16px; font-family: Arial;; color: #c70000"><u>james</u></span></em></strong></p>',
    coordinates: {
      x: 500,
      y: 270,
    },
  },
];
export async function GET() {
  return NextResponse.json({ component: componentsData });
}
