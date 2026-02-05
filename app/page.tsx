import type { Metadata } from "next"
import UmamisoLP from "@/components/umamiso-lp"

export const metadata: Metadata = {
  title: "食べるウマミソ｜馬肉×味噌の極上グルメ【会津ブランド館】送料無料",
  description:
    "TBSラジオで絶賛！高タンパク・低カロリーな希少馬肉を、伝統の味噌と大葉・えごまで仕上げた極上の逸品。楽天・Yahoo!ショッピングで高評価続出。2個セット1,680円から送料無料でお届け。",
  keywords:
    "食べるウマミソ,馬肉,味噌,ご飯のお供,会津,福島,通販,お取り寄せ,送料無料,会津ブランド館,大葉,えごま,高タンパク,低カロリー",
  authors: [{ name: "会津ブランド館" }],
  creator: "会津ブランド館",
  publisher: "会津ブランド館",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "食べるウマミソ｜馬肉×味噌の極上グルメ【会津ブランド館】",
    description:
      "高タンパク・低カロリーな希少馬肉を、伝統の味噌と大葉・えごまで仕上げた極上の逸品。ごはんにのせるだけで至福の味わい。送料無料でお届け。",
    url: "https://your-domain.com/umamiso",
    siteName: "会津ブランド館",
    images: [
      {
        url: "/og-umamiso.jpg",
        width: 1200,
        height: 630,
        alt: "食べるウマミソ - 馬肉と味噌の極上の組み合わせ",
        type: "image/jpeg",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aizu_brand_kan",
    creator: "@aizu_brand_kan",
    title: "食べるウマミソ｜馬肉×味噌の極上グルメ【会津ブランド館】",
    description: "高タンパク・低カロリーな希少馬肉を、伝統の味噌と大葉・えごまで仕上げた極上の逸品。送料無料でお届け。",
    images: [
      {
        url: "/og-umamiso.jpg",
        alt: "食べるウマミソ - 馬肉×味噌の極上グルメ",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://your-domain.com/umamiso",
  },
  category: "food",
  classification: "食品・グルメ",
  other: {
    "product:price:amount": "1680",
    "product:price:currency": "JPY",
    "product:availability": "in stock",
    "product:condition": "new",
    "product:retailer_item_id": "umamiso-2set",
    "product:brand": "会津ブランド館",
    "product:category": "食品・グルメ > ご飯のお供",
  },
}

export default function Page() {
  return <UmamisoLP />
}
